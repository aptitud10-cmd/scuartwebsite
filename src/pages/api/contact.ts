/**
 * src/pages/api/contact.ts — Endpoint POST del formulario de contacto
 *
 * SEGURIDAD:
 * - RESEND_API_KEY y CONTACT_EMAIL viven SOLO en import.meta.env (server-side).
 *   Nunca se exponen al cliente ni al HTML renderizado.
 * - Campo honeypot: si viene lleno (bot), se responde 200 fake-success silencioso.
 * - Validacion server-side: name, email (regex), message requeridos.
 * - No se loguea PII en produccion.
 *
 * PATRÓN HYBRID:
 * export const prerender = false — solo este endpoint corre server-side.
 * Las paginas /en y /es siguen siendo estaticas (prerendered por defecto con output:'hybrid').
 *
 * FROM DE RESEND:
 * 'SCUART <onboarding@resend.dev>' es el from de prueba de Resend.
 * William DEBE reemplazarlo con un from de su dominio verificado en Resend:
 * ej. 'SCUART <hello@scuart.com>' una vez que verifique el dominio en Resend.
 *
 * PLACEHOLDER: reemplazar FROM_EMAIL con el from definitivo al verificar dominio.
 */

import type { APIRoute } from 'astro';

export const prerender = false;

/* ── Tipos internos ─────────────────────────────────────────── */

interface ContactPayload {
  name: string;
  business?: string;
  email: string;
  country?: string;
  whatDoYouNeed?: string;
  budget?: string;
  timeline?: string;
  message: string;
  /** Campo honeypot — debe estar vacío. Si viene lleno = bot. */
  website?: string;
}

/* ── Validación de email (regex RFC 5322 simplificado) ───────── */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/* ── Parsear body: acepta JSON y form-data (fallback sin JS) ─── */
async function parseBody(request: Request): Promise<Record<string, string>> {
  const contentType = request.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    try {
      const json = await request.json();
      return json as Record<string, string>;
    } catch {
      return {};
    }
  }

  if (
    contentType.includes('application/x-www-form-urlencoded') ||
    contentType.includes('multipart/form-data')
  ) {
    try {
      const formData = await request.formData();
      const result: Record<string, string> = {};
      formData.forEach((value, key) => {
        result[key] = String(value);
      });
      return result;
    } catch {
      return {};
    }
  }

  return {};
}

/* ── Formatear email para Resend ─────────────────────────────── */
function buildEmailHtml(payload: ContactPayload): string {
  const fields = [
    ['Nombre', payload.name],
    ['Negocio / Marca', payload.business || '—'],
    ['Email', payload.email],
    ['País / Mercado', payload.country || '—'],
    ['Qué necesita', payload.whatDoYouNeed || '—'],
    ['Presupuesto', payload.budget || '—'],
    ['Timeline', payload.timeline || '—'],
    ['Mensaje', payload.message],
  ];

  const rows = fields
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 12px;font-family:monospace;font-size:12px;color:#8A857B;text-transform:uppercase;white-space:nowrap;vertical-align:top;border-top:1px solid #1A1A18">
          ${label}
        </td>
        <td style="padding:8px 12px;font-family:sans-serif;font-size:14px;color:#E8E2D6;vertical-align:top;border-top:1px solid #1A1A18">
          ${value.replace(/\n/g, '<br>')}
        </td>
      </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="background-color:#0E0E0E;margin:0;padding:32px;font-family:sans-serif;">
  <table style="max-width:600px;margin:0 auto;width:100%;border-collapse:collapse;background:#0E0E0E;border:1px solid #1A1A18">
    <thead>
      <tr>
        <th colspan="2" style="padding:20px 12px;text-align:left;font-family:monospace;font-size:11px;color:#D70321;text-transform:uppercase;letter-spacing:0.08em;font-weight:400;border-bottom:2px solid #D70321">
          SCUART — Nuevo proyecto recibido
        </th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
  <p style="margin-top:16px;font-family:monospace;font-size:11px;color:#8A857B;text-align:center">
    Enviado desde scuart.com
  </p>
</body>
</html>`;
}

/* ── Handler principal ───────────────────────────────────────── */

export const POST: APIRoute = async ({ request }) => {
  /* Verificar que la API key exista — fallo explícito, no silencioso */
  const apiKey = import.meta.env.RESEND_API_KEY;
  const contactEmail = import.meta.env.CONTACT_EMAIL;

  if (!apiKey) {
    /*
     * La API key no está configurada. El endpoint funciona pero no puede enviar.
     * Instrucciones para William: agregar RESEND_API_KEY en Vercel → Settings → Environment Variables.
     */
    console.error('[contact] RESEND_API_KEY no configurada. Vercel → Settings → Environment Variables.');
    return new Response(
      JSON.stringify({ ok: false, error: 'Email service not configured. Contact us directly at hello@scuart.com' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!contactEmail) {
    console.error('[contact] CONTACT_EMAIL no configurada.');
    return new Response(
      JSON.stringify({ ok: false, error: 'Email service not configured. Contact us directly at hello@scuart.com' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  /* Parsear body */
  const body = await parseBody(request);

  /* ── Anti-spam: honeypot ───────────────────────────────────
   * El campo 'website' está en el form pero oculto visualmente.
   * Los humanos lo dejan vacío. Los bots lo llenan.
   * Si viene lleno: 200 fake-success silencioso (no revelar el mecanismo al bot).
   */
  if (body.website && body.website.trim() !== '') {
    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  /* ── Validación server-side ──────────────────────────────── */
  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Name is required.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!email || !isValidEmail(email)) {
    return new Response(
      JSON.stringify({ ok: false, error: 'A valid email is required.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!message) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Message is required.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const payload: ContactPayload = {
    name,
    email,
    message,
    business: (body.business ?? '').trim() || undefined,
    country: (body.country ?? '').trim() || undefined,
    whatDoYouNeed: (body.whatDoYouNeed ?? '').trim() || undefined,
    budget: (body.budget ?? '').trim() || undefined,
    timeline: (body.timeline ?? '').trim() || undefined,
  };

  /* ── Envío vía Resend ────────────────────────────────────── */
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const subject = `Nuevo proyecto — ${name}${payload.business ? ` / ${payload.business}` : ''}`;

    const result = await resend.emails.send({
      /*
       * PLACEHOLDER FROM:
       * 'onboarding@resend.dev' funciona sin verificar dominio (solo para testing).
       * William DEBE reemplazar esto con su dominio verificado en Resend:
       * from: 'SCUART <hello@scuart.com>'
       * Para verificar el dominio: Resend Dashboard → Domains → Add Domain.
       */
      from: 'SCUART <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email,
      subject,
      html: buildEmailHtml(payload),
    });

    if (result.error) {
      /* Resend devolvió un error — logueamos sin PII sensible */
      console.error('[contact] Resend error:', result.error.name, result.error.message);
      return new Response(
        JSON.stringify({ ok: false, error: 'Could not send email. Please try again.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    /* Error inesperado — no logueamos el payload completo (PII) */
    const errMsg = err instanceof Error ? err.message : 'Unknown error';
    console.error('[contact] Unexpected error:', errMsg);
    return new Response(
      JSON.stringify({ ok: false, error: 'Server error. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
