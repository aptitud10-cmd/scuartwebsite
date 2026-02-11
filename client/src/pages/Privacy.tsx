/* Privacy Policy Page
 * Legal page for GDPR compliance
 */

import Navigation from "@/components/Navigation";
import { Link } from "wouter";


export default function Privacy() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="container py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Política de Privacidad
          </h1>
          <p className="text-sm font-body font-light text-foreground/60 mb-12">
            Última actualización: Diciembre 2024
          </p>

          <div className="space-y-8 font-body font-light text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                1. Información que Recopilamos
              </h2>
              <p className="mb-4">
                En Scuart, recopilamos información que usted nos proporciona directamente cuando:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Completa nuestro formulario de contacto</li>
                <li>Se comunica con nosotros por correo electrónico o WhatsApp</li>
                <li>Solicita información sobre nuestros servicios</li>
              </ul>
              <p className="mt-4">
                La información recopilada puede incluir: nombre, dirección de correo electrónico, número de teléfono, 
                tipo de proyecto y cualquier otra información que decida compartir con nosotros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                2. Cómo Utilizamos su Información
              </h2>
              <p className="mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder a sus consultas y solicitudes de información</li>
                <li>Proporcionar cotizaciones y propuestas de proyectos</li>
                <li>Comunicarnos con usted sobre nuestros servicios</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                3. Compartir Información
              </h2>
              <p>
                No vendemos, alquilamos ni compartimos su información personal con terceros para fines de marketing. 
                Podemos compartir su información únicamente en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Cuando sea requerido por ley o para proteger nuestros derechos</li>
                <li>Con su consentimiento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                4. Cookies y Tecnologías de Seguimiento
              </h2>
              <p className="mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. 
                Esto incluye:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio web y comprender cómo los visitantes interactúan con nuestro contenido</li>
                <li><strong>Meta Pixel:</strong> Para medir la efectividad de nuestras campañas publicitarias</li>
              </ul>
              <p className="mt-4">
                Puede configurar su navegador para rechazar cookies, aunque esto puede afectar su experiencia en el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                5. Seguridad de Datos
              </h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información 
                personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método 
                de transmisión por Internet o almacenamiento electrónico es 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                6. Sus Derechos
              </h2>
              <p className="mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acceder a la información personal que tenemos sobre usted</li>
                <li>Solicitar la corrección de información inexacta</li>
                <li>Solicitar la eliminación de su información personal</li>
                <li>Oponerse al procesamiento de su información</li>
                <li>Solicitar la portabilidad de sus datos</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, contáctenos en{" "}
                <a href="mailto:info@scuart.com" className="text-cyan hover:underline">
                  info@scuart.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                7. Retención de Datos
              </h2>
              <p>
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos 
                descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                8. Enlaces a Sitios de Terceros
              </h2>
              <p>
                Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas 
                de privacidad de estos sitios. Le recomendamos revisar las políticas de privacidad de cualquier sitio 
                que visite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                9. Cambios a esta Política
              </h2>
              <p>
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios 
                significativos publicando la nueva política en esta página con una fecha de actualización revisada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                10. Contacto
              </h2>
              <p>
                Si tiene preguntas sobre esta Política de Privacidad, contáctenos:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@scuart.com" className="text-cyan hover:underline">
                    info@scuart.com
                  </a>
                </li>
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <a href="https://wa.me/13478489720" className="text-cyan hover:underline">
                    +1 (347) 848-9720
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-cyan/20">
            <Link href="/">
              <a className="text-cyan hover:underline font-body font-light">
                ← Volver al inicio
              </a>
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
}
