import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Benefits extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="WePresent-section" class="flex flex-col gap-7 md:gap-0">
        <h2 class="text-base  lg:text-lg xl:text-xl text-center md:text-left text-orange font-black mb-2 uppercase">Cómo puedes beneficiarte</h2>

        <div class="flex flex-col gap-7 md:flex-row md:justify-center md:items-center md:gap-10">
          <section class="flex flex-col gap-7 text-center md:text-left">
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Navegación inteligente y menos complicaciones:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                La aspiradora utiliza tecnología de navegación láser, reduciendo los puntos olvidados y asegurando que todo tu espacio esté cubierto. Con múltiples sensores, se maneja de manera
                eficiente alrededor de obstáculos y evita caídas, brindándote tranquilidad y un hogar siempre limpio.
              </p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Comodidad sin manos:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Con limpieza sin manos, no tienes que preocuparte por vaciar los depósitos de polvo o rellenar los tanques de agua con frecuencia. El depósito de polvo de 400ml y el tanque de agua de
                270ml están diseñados para durar más, dándote más tiempo para relajarte mientras limpia.
              </p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Integración con control por voz:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Aprovecha las funciones de comando por voz con Alexa y Google Assistant, lo que te permite controlar la aspiradora fácilmente con solo tu voz, agregando aún más comodidad a tu rutina
                diaria.
              </p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Beneficios a largo plazo:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Con su diseño duradero, potente succión y características inteligentes, el Xiaomi Robot Vacuum S20 es una inversión que ofrece beneficios continuos, haciendo que tu rutina de limpieza
                sea más fácil y eficiente cada día.
              </p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Tiempo libre y productividad:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Con el Xiaomi Robot Vacuum S20 manejando la limpieza, puedes concentrarte en otras actividades que agreguen valor a tu vida. Ya sea trabajando, haciendo ejercicio o pasando tiempo de
                calidad con tus seres queridos, la aspiradora asegura que tu hogar se mantenga limpio sin interrupciones.
              </p>
            </div>
          </section>

          <img src="/public/assets/benefits/benefits_1_sm.png" class="object-contain w-full max-w-[320px] mx-auto md:hidden" alt="Benefits second image" title="Benefits 2" />

          <img src="/public/assets/benefits/benefits_1_md.png" class="object-contain w-full max-w-[250px] mx-auto hidden md:!block xl:!hidden" alt="Benefits second image" title="Benefits 2" />

          <img src="/public/assets/benefits/benefits_1_lg.png" class="object-contain w-full max-w-[450px] mx-auto hidden xl:!block" alt="Benefits second image" title="Benefits 2" />
        </div>

        <div class="flex flex-col gap-10 md:flex-row-reverse md:justify-center md:items-center md:gap-10 md:-mt-20 xl:-mt-0">
          <section class="flex flex-col gap-7 text-center md:text-left">
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Navegación inteligente y menos complicaciones:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                La aspiradora utiliza tecnología de navegación láser, reduciendo los puntos olvidados y asegurando que todo tu espacio esté cubierto. Con múltiples sensores, se maneja de manera
                eficiente alrededor de obstáculos y evita caídas, brindándote tranquilidad y un hogar siempre limpio.
              </p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Comodidad sin manos:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Con limpieza sin manos, no tienes que preocuparte por vaciar los depósitos de polvo o rellenar los tanques de agua con frecuencia. El depósito de polvo de 400ml y el tanque de agua de
                270ml están diseñados para durar más, dándote más tiempo para relajarte mientras limpia.
              </p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Integración con control por voz:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Aprovecha las funciones de comando por voz con Alexa y Google Assistant, lo que te permite controlar la aspiradora fácilmente con solo tu voz, agregando aún más comodidad a tu rutina
                diaria.
              </p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Beneficios a largo plazo:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Con su diseño duradero, potente succión y características inteligentes, el Xiaomi Robot Vacuum S20 es una inversión que ofrece beneficios continuos, haciendo que tu rutina de limpieza
                sea más fácil y eficiente cada día.
              </p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Tiempo libre y productividad:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Con el Xiaomi Robot Vacuum S20 manejando la limpieza, puedes concentrarte en otras actividades que agreguen valor a tu vida. Ya sea trabajando, haciendo ejercicio o pasando tiempo de
                calidad con tus seres queridos, la aspiradora asegura que tu hogar se mantenga limpio sin interrupciones.
              </p>
            </div>
          </section>

          <img src="/public/assets/benefits/benefits_2_sm.png" class="object-contain w-full max-w-[320px] mx-auto md:hidden" alt="Benefits second image" title="Benefits 2" />

          <img src="/public/assets/benefits/benefits_2_md.png" class="object-contain w-full max-w-[250px] mx-auto hidden md:!block xl:!hidden" alt="Benefits second image" title="Benefits 2" />

          <img src="/public/assets/benefits/benefits_2_lg.png" class="object-contain w-full max-w-[450px] mx-auto hidden xl:!block" alt="Benefits second image" title="Benefits 2" />
        </div>

        <p class="text-xs lg:text-sm xl:text-base font-medium bg-mint p-7 rounded-3xl rounded-tl-none text-white mt-12 lg:mt-20">
          En conclusión, el Xiaomi Robot Vacuum S20 ofrece tanto beneficios diarios en términos de tiempo ahorrado como ventajas a largo plazo mediante una limpieza eficiente e inteligente. Es una
          oportunidad en línea para cualquiera que busque una solución moderna y sin manos para las tareas del hogar, ayudándote a aprovechar al máximo tu día y disfrutar de los beneficios de un hogar
          impecable con mínimo esfuerzo.
        </p>
      </section>
    `;
  }
}

customElements.define('benefits-section', Benefits);
