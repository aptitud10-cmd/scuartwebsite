export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  {
    console.error("[contact] RESEND_API_KEY no configurada. Vercel → Settings → Environment Variables.");
    return new Response(
      JSON.stringify({ ok: false, error: "Email service not configured. Contact us directly at hello@scuart.com" }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
