import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Register extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        .registerBg {
          background-image: url('/public/assets/register/registerBg_sm.png');
          background-position: top;
          background-size: cover;
          background-repeat: no-repeat;
        }

        @media (min-width: 746px) {
          .registerBg {
            background-image: url('/public/assets/register/registerBg_md.png');
          }
        }

        @media (min-width: 1280px) {
          .registerBg {
            background-image: url('/public/assets/register/registerBg_lg.png');
          }
          .image-hero {
            display: block;
          }
        }
      </style>

      <div
        class="mx-auto flex flex-col items-center justify-center gap-10 md:gap-12 lg:gap-14 xl:gap-20 w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] px-10 sm:px-12 md:px-16 lg:px-24"
      >
        <article class="grid grid-cols-1 justify-items-center mb-20 rounded-3xl w-full">
          <section class=" w-full sm:max-w-[500px] md:max-w-[1000px] ">
            <register-form></register-form>
          </section>
        </article>
      </div>
    `;
  }
}

customElements.define('register-section', Register);
