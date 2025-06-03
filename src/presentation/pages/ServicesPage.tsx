export const ServicesPage = () => {
  return (
    <>
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[320px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:min-h-[400px] @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-8 @[480px]:px-10 @[480px]:pb-10 @[864px]:min-h-[480px]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop")',
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] @[864px]:text-5xl">
                Soluciones de IA para tu negocio
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Descubre cómo nuestras soluciones de inteligencia artificial pueden transformar tu negocio y aumentar tu productividad.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-accent text-background text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-accent/90 transition-colors">
              <span className="truncate">Solicita una demo</span>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 @[480px]:text-[22px]">Nuestros Servicios</h2>
      <div className="flex flex-col gap-10 px-4 py-8 @container @[480px]:py-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-white tracking-light text-2xl font-bold leading-tight @[480px]:text-3xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] @[864px]:text-4xl max-w-[720px]">
            Soluciones a medida para tu negocio
          </h1>
          <p className="text-white text-sm font-normal leading-normal @[480px]:text-base max-w-[720px]">
            Ofrecemos una gama de servicios diseñados para automatizar tareas repetitivas y mejorar la toma de decisiones.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 @[480px]:grid-cols-2 @[864px]:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-6 hover:border-accent transition-colors">
            <div className="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-xl font-bold leading-tight">Automatización Inteligente</h2>
              <p className="text-[#adadad] text-sm font-normal leading-normal @[480px]:text-base">
                Automatiza tareas repetitivas y optimiza tus procesos de negocio con IA avanzada.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-6 hover:border-accent transition-colors">
            <div className="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-xl font-bold leading-tight">Chatbots IA</h2>
              <p className="text-[#adadad] text-sm font-normal leading-normal @[480px]:text-base">
                Atiende a tus clientes 24/7 con chatbots inteligentes que entienden y resuelven sus consultas.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-6 hover:border-accent transition-colors">
            <div className="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-xl font-bold leading-tight">Análisis Predictivo</h2>
              <p className="text-[#adadad] text-sm font-normal leading-normal @[480px]:text-base">
                Anticipa tendencias y toma decisiones basadas en datos con nuestro análisis predictivo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-accent text-background text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-accent/90 transition-colors">
            <span className="truncate">Solicita tu demo gratis</span>
          </button>
          <button
            onClick={() => window.open('https://wa.me/34628506129', '_blank')}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#ffffff] text-black text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-gray-200 transition-colors"
          >
            <span className="truncate">Contáctanos</span>
          </button>
        </div>
      </div>
    </>
  );
}; 