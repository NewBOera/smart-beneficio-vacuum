import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Hero extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        #hero-section {
          min-height: 800px;
          background-image: linear-gradient(rgba(0, 0, 0, 0.2), transparent), url('/public/assets/hero/hero_md.png');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .image-hero {
          display: none;
        }

        .main-text {
          text-shadow: 4px 4px 6px #000;
        }
        .gradientWhite {
          background: linear-gradient(to top, #ffffff, transparent);
        }

        @media (min-width: 850px) {
          #hero-section {
            min-height: 1000px;
            background-image: linear-gradient(rgba(0, 0, 0, 0.1), transparent), url('/public/assets/hero/hero_lg.png');

            background-position: center;
          }
          .image-hero {
            display: block;
          }
        }
      </style>

      <section id="hero-section" class="relative xl:pt-10">
        <div class="flex flex-col mx-auto w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] p-10 sm:px-12 md:px-16 lg:px-24">
          <img class="w-16 md:w-24 lg:w-28 xl:w-36 2xl:w-44  md:mb-4 object-cover ml-auto mr-auto lg:mr-0" src="/public/assets/hero/logo.png" alt="Logo" />
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center text-white main-text md:text-left lg:mt-40 xl:mt-20">
            Disfruta de los
            <br class="hidden md:!block" />
            <span class="text-orange">BENEFICIOS</span>
            <br class="hidden md:!block" />
            con solo unos clics
          </h1>

          <h2 class="text-sm md:text-base lg:text-lg 2xl:text-xl font-medium text-center md:text-left text-white main-text mt-6 lg:pr-[34rem] xl:pr-[44rem]">
            <span class="text-orange font-bold  underline">Xiaomi Robot Vacuum S20</span>
            , la máquina que te dará la oportunidad de disfrutar de beneficios diarios a través de una sola pantalla, en cualquier momento y lugar.
          </h2>
        </div>

        <div class="z-10 absolute w-full bottom-0 h-28 gradientWhite">
          <div class=" w-full mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] p-10 sm:px-12 md:px-16 lg:px-24">
            <p class="text-xs md:text-sm lg:text-base xl:text-lg font-medium bg-olive p-7 rounded-3xl rounded-tl-none text-navy self-start -mt-16">
              Hoy, en SmartBeneficio, revisaremos el Xiaomi S20 Robot Vacuum, destacando sus ventajas tecnológicas y cómo puede mejorar tu experiencia de limpieza diaria.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', Hero);
