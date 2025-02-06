import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Advice extends LitElement {
  constructor() {
    super();
  }

  // Para que Lit no aplique Shadow DOM y puedas usar tus clases de Tailwind directamente:
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        .paper-bg {
          background-image: url('/public/assets/paper_sm.png');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        @media (min-width: 630px) {
          .paper-bg {
            background-image: url('/public/assets/paper_lg.png');
            background-size: cover;
          }
        }
      </style>

      <section class=" paper-bg w-full relative text-right">
        <div class="mx-auto flex flex-col items-end justify-center w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] px-10 sm:px-12 md:px-16 lg:px-24">
          <div class="w-1/2 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl sm:px-10 lg:px-20 py-10 lg:py-20">
            Además, si eres una empresa que quiere promocionar tus gadgets inteligentes, contáctanos
            <br />
            <a href="mailto:Info@SmartBeneficio.com" class=" text-orange hover:text-navy transition-colors duration-150 font-black">Info@SmartBeneficio.com</a>
            <br />
            para colaborar
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('advice-section', Advice);
