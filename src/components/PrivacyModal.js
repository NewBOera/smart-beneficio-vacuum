import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class PrivacyModal extends LitElement {
  static properties = {
    open: { type: Boolean }, // Controla si el modal se muestra.
  };

  // Si quieres usar las clases globales (Tailwind, etc.), puedes hacer:
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.open = false;
  }

  // Despachamos un evento personalizado. El padre lo escuchará para cerrar.
  _handleClose() {
    this.dispatchEvent(
      new CustomEvent('close-privacy-modal', {
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
          <div class="flex justify-between items-center p-6 border-b bg-mint">
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
              En SmartBeneficio, valoramos tu privacidad y estamos comprometidos con la protección de la información personal que proporcionas. Esta Política de Privacidad explica cómo recopilamos,
              usamos, almacenamos y protegemos tus datos personales cuando utilizas nuestro sitio web y servicios.
            </p>

            <!-- 1. Información que Recopilamos -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">1. Información que Recopilamos</h3>

            <p class="mb-6">Recopilamos la siguiente información cuando te registras en nuestro boletín de noticias o interactúas con nuestro sitio web:</p>
            <ul class="list-disc pl-6 mb-6">
              <li class="mb-2">
                <strong>Personal:</strong>
                Nombre, apellido, dirección de correo electrónico.
              </li>
              <li class="mb-2">
                <strong>Datos de Uso:</strong>
                Información sobre cómo interactúas con nuestro sitio web, incluyendo tu dirección IP, tipo de navegador y páginas visitadas.
              </li>
            </ul>

            <!-- 2. Cómo Usamos la Información -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">2. Cómo Usamos la Información</h3>

            <p class="mb-3">La información que recopilamos se utiliza para:</p>
            <ul class="list-disc pl-6 mb-6">
              <li class="mb-2">Enviarte boletines de noticias, actualizaciones sobre productos tecnológicos y ofertas especiales.</li>
              <li class="mb-2">Mejorar nuestros servicios y contenido.</li>
              <li class="mb-2">Responder a consultas o solicitudes.</li>
              <li class="mb-2">Enviar comunicaciones relacionadas con el uso de nuestros productos y servicios.</li>
            </ul>

            <!-- 3. Protección de los Datos -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">3. Protección de los Datos</h3>

            <p class="mb-6">
              Implementamos medidas de seguridad para proteger tu información personal. Sin embargo, ten en cuenta que ninguna transmisión de datos a través de internet o almacenamiento electrónico es
              completamente segura. Tomamos todas las precauciones razonables para proteger tus datos, pero no podemos garantizar su seguridad absoluta.
            </p>

            <!-- 4. Compartir Información -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">4. Compartir Información</h3>

            <p class="mb-6">
              SmartBeneficio no venderá ni compartirá tu información personal con terceros, excepto cuando sea necesario para cumplir con la ley o para proporcionar nuestros servicios, como a través
              de proveedores de servicios de correo electrónico.
            </p>

            <!-- 5. Tus Derechos -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">5. Tus Derechos</h3>

            <p class="mb-6">
              Tienes el derecho de acceder, corregir o eliminar cualquier información personal que hayamos recopilado sobre ti. Si deseas ejercer cualquiera de estos derechos, por favor contáctanos
              utilizando la información de contacto proporcionada.
            </p>

            <!-- 6. Cookies -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">6. Cookies</h3>

            <p class="mb-6">
              Nuestro sitio web puede utilizar cookies para mejorar tu experiencia de navegación y personalizar el contenido que ves. Las cookies son pequeños archivos de texto almacenados en tu
              dispositivo. Puedes configurar tu navegador para rechazar las cookies, pero ten en cuenta que algunas partes del sitio pueden no funcionar correctamente si las cookies están
              desactivadas.
            </p>

            <!-- 7. Cambios en esta Política de Privacidad -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">7. Cambios en esta Política de Privacidad</h3>

            <p class="mb-6">
              Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cualquier cambio significativo publicando la política actualizada en nuestro sitio web. Por favor,
              revisa esta política periódicamente para estar informado sobre cómo estamos protegiendo tu información.
            </p>

            <!-- 8. Contáctanos -->
            <h3 class="font-semibold mb-4 text-xl text-primary-400">8. Contáctanos</h3>
            <p class="mb-3">Si tienes alguna pregunta o inquietud acerca de esta Política de Privacidad o sobre tu información personal, no dudes en contactarnos a:</p>
            <strong class="mb-6">SmartBeneficio</strong>
            <div class="mb-6">
              Correo electrónico :
              <a href="mailto:Info@SmartBeneficio.com" class="font-semibold text-navy hover:text-mint transition-colors duration-150 ">Info@SmartBeneficio.com</a>
            </div>
            <p class="mb-6">Al utilizar nuestro sitio web y servicios, consientes la recopilación y el uso de tus datos personales tal como se describe en esta Política de Privacidad.</p>
          </div>

          <!-- Modal footer -->
          <div class="flex justify-end p-6 border-t">
            <button @click=${this._handleClose} class="text-white px-6 py-2 rounded-full focus:outline-none font-semibold transition-all duration-200 hover:scale-105 bg-mint hover:bg-olive">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

// Definimos el custom element
customElements.define('privacy-modal', PrivacyModal);
