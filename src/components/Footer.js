import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

import './PrivacyModal.js';
import './TermsModal.js';
import './LegalModal.js';

export class Footer extends LitElement {
  static properties = {
    isPrivacyModalOpen: { type: Boolean },
    isTermsModalOpen: { type: Boolean },
    isLegalModalOpen: { type: Boolean },
  };

  constructor() {
    super();
    this.isPrivacyModalOpen = false;
    this.isTermsModalOpen = false;
    this.isLegalModalOpen = false;
  }

  // Para que Tailwind o estilos globales funcionen dentro del componente
  createRenderRoot() {
    return this;
  }

  // --- MÉTODOS PARA PRIVACIDAD ---
  togglePrivacyModal() {
    this.isPrivacyModalOpen = !this.isPrivacyModalOpen;
    if (this.isPrivacyModalOpen) {
      // Cierro los demás modales si los hubiera abierto
      this.isTermsModalOpen = false;
      this.isLegalModalOpen = false;
    }
  }
  _onClosePrivacyModal() {
    this.isPrivacyModalOpen = false;
  }

  // --- MÉTODOS PARA TÉRMINOS ---
  toggleTermsModal() {
    this.isTermsModalOpen = !this.isTermsModalOpen;
    if (this.isTermsModalOpen) {
      this.isPrivacyModalOpen = false;
      this.isLegalModalOpen = false;
    }
  }
  _onCloseTermsModal() {
    this.isTermsModalOpen = false;
  }

  // --- MÉTODOS PARA AVISO LEGAL ---
  toggleLegalModal() {
    this.isLegalModalOpen = !this.isLegalModalOpen;
    if (this.isLegalModalOpen) {
      this.isPrivacyModalOpen = false;
      this.isTermsModalOpen = false;
    }
  }
  _onCloseLegalModal() {
    this.isLegalModalOpen = false;
  }

  render() {
    return html`
      <!-- <style>
        .footer-section {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/public/assets/footer/footer.webp');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
      </style> -->

      <div class=" bg-navy">
        <section class="flex justify-center items-center">
          <div
            class="mx-auto flex flex-col md:flex-row text-center justify-center items-center gap-10 md:gap-12 lg:gap-14 xl:gap-20 w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] px-10 sm:px-12 md:px-16 lg:px-24 py-6 md:py-10 lg:py-14"
          >
            <div class="flex flex-col items-center text-center text-white text-xs md:text-lg gap-6">
              <img src="/public/assets/footer/logo.webp" class="w-[100px] lg:w-[150px]" alt="Logo" />

              <!-- Botones para abrir cada modal -->
              <div
                class="flex flex-col md:flex-row gap-6 [&>button]:min-w-[202px] [&>button]:bg-orange [&>button]:text-white [&>button]:py-2 [&>button]:px-4 [&>button]:text-center [&>button]:cursor-pointer [&>button]:transition-all [&>button]:duration-200 [&>button]:text-xs  [&>button]:md:text-sm [&>button]:font-semibold"
              >
                <button class="rounded-full hover:scale-105 active:brightness-110 focus:outline-none" @click=${this.toggleLegalModal}>Aviso Legal</button>

                <button class="rounded-full hover:scale-105 active:brightness-110 focus:outline-none" @click=${this.togglePrivacyModal}>Política de Privacidad</button>

                <button class="rounded-full hover:scale-105 active:brightness-110 focus:outline-none" @click=${this.toggleTermsModal}>Términos y Condiciones</button>
              </div>
            </div>
          </div>
        </section>

        <section class="flex justify-center items-center bg-sky">
          <div
            class="mx-auto flex flex-col items-center gap-10 md:gap-12 lg:gap-14 xl:gap-20 w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] px-10 sm:px-12 md:px-16 lg:px-24 py-6"
          >
            <span class="w-full text-white text-xs md:text-sm text-center">SmartBeneficio &copy;</span>
          </div>
        </section>

        <!-- Modal de Privacidad -->
        <privacy-modal .open=${this.isPrivacyModalOpen} @close-privacy-modal=${this._onClosePrivacyModal}></privacy-modal>

        <!-- Modal de Términos -->
        <terms-modal .open=${this.isTermsModalOpen} @close-terms-modal=${this._onCloseTermsModal}></terms-modal>

        <!-- Modal de Aviso Legal -->
        <legal-modal .open=${this.isLegalModalOpen} @close-legal-modal=${this._onCloseLegalModal}></legal-modal>
      </div>
    `;
  }
}

customElements.define('footer-element', Footer);
//
