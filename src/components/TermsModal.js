import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class TermsModal extends LitElement {
  static properties = {
    open: { type: Boolean },
  };

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.open = false;
  }

  _handleClose() {
    this.dispatchEvent(
      new CustomEvent('close-terms-modal', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    if (!this.open) return null;

    return html`
      <div class="fixed inset-0 z-50 flex justify-center items-center px-4 bg-black/60">
        <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <!-- Modal header -->
          <div class="flex justify-between items-center p-6 border-b bg-navy">
            <h2 class="text-2xl font-bold text-white">Términos y Condiciones</h2>
            <button @click=${this._handleClose} class="text-white hover:text-gray-200 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal content -->
          <div class="p-6 text-gray-700 [&>h3]:text-navy">
            <p class="mb-6">
              ¡Bienvenido a
              <strong>SmartBeneficio</strong>
              ! Estos Términos y Condiciones rigen el uso de nuestro sitio web, productos y servicios. Al acceder o utilizar nuestro sitio web y servicios, aceptas estar sujeto a estos Términos y
              Condiciones. Si no estás de acuerdo con alguno de los términos establecidos a continuación, por favor no utilices nuestro sitio web ni nuestros servicios.
            </p>

            <!-- Terms and Conditions Content -->

            <!-- 1. Uso del Sitio Web -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">1. Uso del Sitio Web</h3>

            <p class="mb-3">
              Aceptas utilizar el sitio web de
              <strong>SmartBeneficio</strong>
              únicamente con fines legales y de acuerdo con estos Términos y Condiciones. Eres responsable de asegurarte de que tu uso del sitio web no infrinja ninguna ley o regulación aplicable. No
              utilizarás el sitio web para:
            </p>

            <ul class="list-disc pl-6 mb-6">
              <li class="mb-2">Realizar actividades que interfieran o interrumpan la funcionalidad del sitio web.</li>
              <li class="mb-2">Subir, publicar o transmitir contenido que sea ilegal, difamatorio, obsceno o de otra manera objetable.</li>
              <li class="mb-2">Intentar acceder sin autorización a cualquier parte del sitio web o a otros sistemas o redes conectadas al sitio web.</li>
            </ul>

            <!-- 2. Propiedad Intelectual -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">2. Propiedad Intelectual</h3>

            <p class="mb-6">
              El contenido en este sitio web, incluyendo pero no limitado a texto, imágenes, logotipos y videos, está protegido por derechos de autor y otras leyes de propiedad intelectual. Todo el
              contenido es propiedad de
              <strong>SmartBeneficio</strong>
              o se utiliza con permiso. No podrás copiar, modificar, distribuir ni reproducir ningún contenido del sitio web sin el consentimiento expreso por escrito de
              <strong>SmartBeneficio</strong>
              .
            </p>

            <!-- 3. Información de Productos y Reseñas -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">3. Información de Productos y Reseñas</h3>

            <p class="mb-6">
              La información, reseñas y recomendaciones proporcionadas en este sitio web son solo con fines informativos. Si bien nos esforzamos por garantizar la exactitud, los detalles,
              especificaciones y descripciones de productos como el Xiaomi Robot Vacuum S20 pueden diferir del producto real. Todas las reseñas, opiniones y contenido presentado se basan en nuestras
              propias experiencias y observaciones.
              <strong>SmartBeneficio</strong>
              no se responsabiliza de inexactitudes, errores u omisiones.
            </p>

            <!-- 4. Privacidad y Protección de Datos -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">4. Privacidad y Protección de Datos</h3>

            <p class="mb-6">
              Tu privacidad es importante para nosotros. Por favor, revisa nuestra Política de Privacidad para obtener detalles sobre cómo recopilamos, usamos y protegemos tu información personal. Al
              utilizar el sitio web, consientes nuestras prácticas de privacidad tal como se describen en la Política de Privacidad.
            </p>

            <!-- 5. Limitación de Responsabilidad -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">5. Limitación de Responsabilidad</h3>

            <p class="mb-6">
              En la máxima medida permitida por la ley,
              <strong>SmartBeneficio</strong>
              no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente derivado del uso o la imposibilidad de usar el sitio web o cualquier contenido, producto o
              servicio obtenido a través del sitio web. Esto incluye, pero no se limita a, daños por pérdida de beneficios, datos u oportunidades comerciales.
            </p>

            <!-- 6. Descargo de Garantías -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">6. Descargo de Garantías</h3>

            <p class="mb-6">
              El sitio web y todo el contenido, productos y servicios proporcionados a través de él se ofrecen "tal como están", sin ninguna garantía de ningún tipo, ya sea expresa o implícita.
              <strong>SmartBeneficio</strong>
              no garantiza que el sitio web estará libre de errores, seguro o ininterrumpido. No hacemos representaciones sobre la exactitud, integridad o confiabilidad del contenido proporcionado en
              el sitio web.
            </p>

            <!-- 7. Cambios en Estos Términos y Condiciones -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">7. Cambios en Estos Términos y Condiciones</h3>

            <p class="mb-6">
              Nos reservamos el derecho de actualizar o modificar estos Términos y Condiciones en cualquier momento sin previo aviso. Cualquier cambio será publicado en esta página y los términos
              revisados entrarán en vigencia al momento de su publicación. Por favor, revisa esta página regularmente para mantenerte informado sobre cómo estamos protegiendo tu información. El uso
              continuo del sitio web después de cualquier cambio en estos Términos y Condiciones constituirá tu aceptación de los términos revisados.
            </p>

            <!-- 8. Terminación del Acceso -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">8. Terminación del Acceso</h3>

            <p class="mb-3">
              <strong>SmartBeneficio</strong>
              se reserva el derecho de suspender o terminar tu acceso al sitio web en cualquier momento, sin previo aviso, por cualquier razón, incluyendo pero no limitado a violaciones de estos
              Términos y Condiciones.
            </p>

            <p class="mb-6">
              Estos Términos y Condiciones están diseñados para proteger tanto a ti como a
              <strong>SmartBeneficio</strong>
              , asegurando una experiencia positiva al utilizar nuestro sitio web y servicios. Por favor, léelos cuidadosamente, y no dudes en contactarnos si tienes alguna pregunta.
            </p>
          </div>

          <!-- Modal footer -->
          <div class="flex justify-end p-6 border-t">
            <button @click=${this._handleClose} class="text-white px-6 py-2 rounded-full focus:outline-none font-semibold transition-all duration-200 bg-orange hover:scale-105 active:brightness-110">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('terms-modal', TermsModal);
