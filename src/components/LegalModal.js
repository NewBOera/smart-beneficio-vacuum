import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class LegalModal extends LitElement {
  static properties = {
    open: { type: Boolean }, // Controla si el modal se muestra.
  };

  // Si usas Tailwind global o estilos globales, y quieres que apliquen,
  // puedes devolver `this` en vez de un shadow root.
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.open = false;
  }

  _handleClose() {
    // Despachamos un evento para que el padre (Footer) sepa que debe cerrar este modal.
    this.dispatchEvent(
      new CustomEvent('close-legal-modal', {
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
            <h2 class="text-2xl font-bold text-white">Aviso Legal</h2>
            <button @click=${this._handleClose} class="text-white hover:text-gray-200 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal content (texto del Aviso Legal) -->
          <div class="p-6 text-gray-700">
            <p class="mb-3">
              Todas las características, especificaciones y descripciones mencionadas anteriormente son solo para fines ilustrativos. El rendimiento y la disponibilidad reales pueden variar según el
              entorno, las condiciones de uso y las actualizaciones de software.
            </p>
            <p class="mb-3">
              El rendimiento del Xiaomi Robot Vacuum S20 puede diferir según el diseño de la habitación, los obstáculos y la configuración de limpieza. Las imágenes del producto son solo para
              referencia; consulte el producto real para obtener detalles.
            </p>
            <p class="mb-3">La compatibilidad de la app Mi Home/Xiaomi Home, Amazon Alexa y Google Assistant puede variar según la región.</p>
            <p class="mb-3">Todas las ofertas, incluidos cupones, descuentos y promociones, están sujetas a términos y condiciones y pueden estar sujetas a cambios sin previo aviso.</p>
            <p class="mb-3">Para más información, consulte el sitio web oficial de Xiaomi o los manuales del producto.</p>
            <p class="mb-6">
              Este contenido no está relacionado ni patrocinado por ninguna marca. Se trata estrictamente de una reseña con el objetivo de informar a los consumidores, brindando prioridad a la
              actualización sobre productos tecnológicos y sus beneficios.
            </p>
          </div>

          <!-- Modal footer -->
          <div class="flex justify-end p-4 border-t">
            <button @click=${this._handleClose} class="text-white px-6 py-2 rounded-full focus:outline-none font-semibold transition-all duration-200 bg-orange hover:scale-105 active:brightness-110">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

// Definimos el custom element
customElements.define('legal-modal', LegalModal);
