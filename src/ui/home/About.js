import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class About extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="WePresent-section" class="grid grid-cols-1 gap-7">
        <h2 class="text-base lg:text-lg xl:text-xl text-center text-orange font-black mb-2 uppercase">Acerca del Xiaomi Robot Vacuum S20</h2>
        <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-900 text-center mb-5 xl:px-52 ">
          El Xiaomi Robot Vacuum S20 es una máquina de limpieza compacta, inteligente y potente, diseñada para ofrecer una aspiración y fregado eficientes. Sus características clave incluyen:
        </p>

        <div class="grid grid-cols-1 grid-rows-1 md:grid-cols-2 xl:grid-cols-4 gap-7 md:flex-row md:justify-center md:items-center md:gap-10">
          <section class="flex flex-col gap-7 col-span-1 md:col-start-1 text-center md:text-left">
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Suction Power de 5000Pa:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">Elimina el polvo, el cabello y los desechos de los pisos y de las grietas de difícil acceso con facilidad.</p>
            </div>

            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Funcionalidad Dual:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Combina aspirado y fregado en un solo dispositivo, con un tanque de polvo de 400ml y un tanque de agua de 270ml para un uso extendido.
              </p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Navegación Láser:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Los sensores LDS y la tecnología de navegación láser aseguran una mapeo preciso de las habitaciones, rutas de limpieza efectivas y menos áreas pasadas por alto o repetidas.
              </p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Control Inteligente:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Controla la aspiradora de manera remota a través de la app Mi Home/Xiaomi Home, programa limpiezas y sigue el progreso en tiempo real.
              </p>
            </div>

            <div class="flex flex-col gap-7 xl:hidden">
              <div>
                <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Diseño Compacto:</h3>
                <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">Con un tamaño de 325mm, es fácil de almacenar y adecuado para diversos tipos de viviendas.</p>
              </div>

              <div>
                <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Control por Voz:</h3>
                <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">Compatible con Amazon Alexa y Google Assistant para operación manos libres.</p>
              </div>
              <div>
                <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Planes de Limpieza Personalizados:</h3>
                <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                  Crea horarios de limpieza y áreas específicas para limpiar, además de configurar muros virtuales/áreas restringidas.
                </p>
              </div>
            </div>
          </section>

          <img src="/public/assets/about/about_sm.webp" class="object-contain w-full max-w-[320px] mx-auto md:hidden" alt="Benefits second image" title="Benefits 2" />

          <img src="/public/assets/about/about_md.webp" class="object-contain h-auto md:col-start-2 mx-auto hidden md:!block xl:!hidden" alt="Benefits second image" title="Benefits 2" />

          <img src="/public/assets/about/about_lg.webp" class="object-contain w-full col-span-2 mx-auto hidden xl:!block" alt="Benefits second image" title="Benefits 2" />

          <div class="hidden xl:!flex flex-col gap-7 col-span-1 text-left">
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Diseño Compacto:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">Con un tamaño de 325mm, es fácil de almacenar y adecuado para diversos tipos de viviendas.</p>
            </div>

            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Control por Voz:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">Compatible con Amazon Alexa y Google Assistant para operación manos libres.</p>
            </div>
            <div>
              <h3 class="text-sm  lg:text-base xl:text-lg text-center lg:text-left text-orange font-black mb-2">Planes de Limpieza Personalizados:</h3>
              <p class="text-xs lg:text-sm xl:text-base font-normal text-gray-700">
                Crea horarios de limpieza y áreas específicas para limpiar, además de configurar muros virtuales/áreas restringidas.
              </p>
            </div>
          </div>
        </div>

        <p class="text-xs lg:text-sm xl:text-base font-medium bg-mint p-7 rounded-3xl rounded-tl-none text-white mt-12 lg:mt-20 xl:-mt-10 xl:w-1/2 justify-self-end">
          En resumen, el Xiaomi Robot Vacuum S20 ofrece una experiencia de limpieza eficiente, conveniente e inteligente con mínimo esfuerzo.
        </p>
      </section>
    `;
  }
}

customElements.define('about-section', About);
