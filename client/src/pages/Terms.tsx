/* Terms and Conditions Page
 * Legal page for service terms
 */

import Navigation from "@/components/Navigation";
import { Link } from "wouter";


export default function Terms() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="container py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Términos y Condiciones
          </h1>
          <p className="text-sm font-body font-light text-foreground/60 mb-12">
            Última actualización: Diciembre 2024
          </p>

          <div className="space-y-8 font-body font-light text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                1. Aceptación de Términos
              </h2>
              <p>
                Al acceder y utilizar el sitio web de Scuart (en adelante, "el Sitio"), usted acepta estar sujeto 
                a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe 
                utilizar nuestro Sitio o servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                2. Servicios Ofrecidos
              </h2>
              <p className="mb-4">
                Scuart ofrece servicios de desarrollo web, aplicaciones móviles, diseño UI/UX, e-commerce, 
                optimización web, branding digital y hosting. Los detalles específicos de cada servicio se 
                proporcionarán en propuestas individuales.
              </p>
              <p>
                Nos reservamos el derecho de modificar, suspender o discontinuar cualquier servicio en cualquier 
                momento sin previo aviso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                3. Proceso de Contratación
              </h2>
              <p className="mb-4">
                El proceso de contratación incluye:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Consulta inicial y análisis de requisitos</li>
                <li>Propuesta detallada con alcance, cronograma y presupuesto</li>
                <li>Firma de contrato o acuerdo de servicios</li>
                <li>Pago inicial según lo acordado</li>
                <li>Inicio del proyecto</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                4. Precios y Pagos
              </h2>
              <p className="mb-4">
                Los precios indicados en el Sitio son orientativos y pueden variar según los requisitos específicos 
                del proyecto. Los precios finales se confirmarán en la propuesta formal.
              </p>
              <p className="mb-4">
                <strong>Estructura de pagos típica:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>50% al inicio del proyecto</li>
                <li>30% en la entrega del diseño o fase intermedia</li>
                <li>20% al finalizar y entregar el proyecto</li>
              </ul>
              <p className="mt-4">
                Los pagos deben realizarse dentro de los 7 días posteriores a la emisión de la factura. Los retrasos 
                en los pagos pueden resultar en la suspensión del trabajo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                5. Propiedad Intelectual
              </h2>
              <p className="mb-4">
                <strong>Trabajo del Cliente:</strong> Una vez completado el pago final, el cliente recibe todos los 
                derechos de propiedad sobre el trabajo personalizado creado específicamente para su proyecto.
              </p>
              <p className="mb-4">
                <strong>Materiales Pre-existentes:</strong> Scuart retiene los derechos sobre cualquier código, 
                plantilla, herramienta o metodología pre-existente utilizada en el proyecto.
              </p>
              <p>
                <strong>Portfolio:</strong> Scuart se reserva el derecho de mostrar el trabajo completado en su 
                portfolio y materiales de marketing, salvo acuerdo de confidencialidad específico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                6. Responsabilidades del Cliente
              </h2>
              <p className="mb-4">
                El cliente se compromete a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Proporcionar información precisa y completa</li>
                <li>Entregar contenido, imágenes y materiales necesarios en tiempo y forma</li>
                <li>Responder a solicitudes de feedback dentro de los plazos acordados</li>
                <li>Realizar pagos según el calendario establecido</li>
                <li>Asegurar que tiene los derechos necesarios sobre cualquier material proporcionado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                7. Plazos de Entrega
              </h2>
              <p>
                Los plazos de entrega se especificarán en la propuesta del proyecto. Estos plazos son estimados y 
                pueden verse afectados por retrasos en la entrega de materiales por parte del cliente, cambios en 
                el alcance del proyecto o circunstancias imprevistas. Haremos nuestro mejor esfuerzo para cumplir 
                con los plazos acordados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                8. Revisiones y Cambios
              </h2>
              <p className="mb-4">
                Cada proyecto incluye un número específico de rondas de revisión según lo acordado en la propuesta. 
                Las revisiones adicionales o cambios significativos en el alcance del proyecto pueden incurrir en 
                costos adicionales.
              </p>
              <p>
                Los cambios mayores en el alcance requerirán una nueva propuesta y ajuste en el presupuesto y cronograma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                9. Garantía y Soporte
              </h2>
              <p className="mb-4">
                Garantizamos que el trabajo entregado:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Funcionará según las especificaciones acordadas</li>
                <li>Estará libre de defectos significativos al momento de la entrega</li>
                <li>Cumplirá con los estándares de la industria</li>
              </ul>
              <p className="mt-4">
                El período de soporte post-lanzamiento se especifica en cada plan. Después de este período, 
                ofrecemos planes de mantenimiento mensuales opcionales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                10. Cancelación y Reembolsos
              </h2>
              <p className="mb-4">
                <strong>Cancelación por el Cliente:</strong> El cliente puede cancelar el proyecto en cualquier 
                momento. Los pagos realizados por trabajo completado no son reembolsables.
              </p>
              <p>
                <strong>Cancelación por Scuart:</strong> Nos reservamos el derecho de cancelar un proyecto si el 
                cliente no cumple con sus obligaciones. En tal caso, se facturará el trabajo completado hasta la fecha.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                11. Limitación de Responsabilidad
              </h2>
              <p>
                Scuart no será responsable de daños indirectos, incidentales, especiales o consecuentes que resulten 
                del uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad total no excederá el 
                monto pagado por el cliente por los servicios específicos en cuestión.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                12. Confidencialidad
              </h2>
              <p>
                Ambas partes acuerdan mantener confidencial cualquier información propietaria o sensible compartida 
                durante el curso del proyecto. Esta obligación continúa después de la finalización del proyecto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                13. Ley Aplicable
              </h2>
              <p>
                Estos Términos y Condiciones se rigen por las leyes aplicables. Cualquier disputa se resolverá 
                mediante negociación de buena fe o, si es necesario, mediante arbitraje.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                14. Modificaciones
              </h2>
              <p>
                Scuart se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación en el Sitio. El uso 
                continuado del Sitio después de dichos cambios constituye su aceptación de los nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                15. Contacto
              </h2>
              <p>
                Para preguntas sobre estos Términos y Condiciones, contáctenos:
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
