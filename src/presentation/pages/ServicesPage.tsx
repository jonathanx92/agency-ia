export const ServicesPage = () => {
  return (
    <>
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvNhz95-Siwy7mN5dhALYJO4p1ZlsHoKPtoPaqaRgOSSCU8JlvBed2qN9Ae_dkRamn4cJDfBr5xfBXG8a0O-EQQvaAtPKZglRru0lXlc6xyYWa1FwXcFBDsZQMXPEgd3pfcCjUJpeYnk4D23zP6oa1NnORcwmCDfGpbZK0r8dOtnNP6X5JoNDLVU7cNFRcZi4VBULE-IDBUwVXGP9HMaP3l-u_IOQ4RBRSnfgoPalUINYh2QgIZArlOQN2zKUfKRuzcRjAvygpNfXp")',
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Automatiza tu negocio y libera tu tiempo
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Implementamos soluciones de automatización e inteligencia artificial para pequeños negocios, optimizando procesos y mejorando la eficiencia.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-accent text-background text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-accent/90 transition-colors">
              <span className="truncate">Solicitar Demo</span>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Nuestros Servicios</h2>
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4">
          <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Soluciones a medida para tu negocio
          </h1>
          <p className="text-white text-base font-normal leading-normal max-w-[720px]">
            Ofrecemos una gama de servicios diseñados para automatizar tareas repetitivas y mejorar la toma de decisiones.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col hover:border-accent transition-colors">
            <div className="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">Gestión de Citas Automatizada</h2>
              <p className="text-[#adadad] text-sm font-normal leading-normal">
                Automatiza la programación de citas, reduciendo los tiempos de espera y mejorando la experiencia del cliente.
              </p>
            </div>
          </div>

          <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col hover:border-accent transition-colors">
            <div className="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">Atención al Cliente Automatizada</h2>
              <p className="text-[#adadad] text-sm font-normal leading-normal">Implementa chatbots inteligentes para responder preguntas frecuentes y brindar soporte 24/7.</p>
            </div>
          </div>

          <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col hover:border-accent transition-colors">
            <div className="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">Análisis de Datos y Reportes</h2>
              <p className="text-[#adadad] text-sm font-normal leading-normal">
                Obtén insights valiosos a través del análisis de datos, optimizando tus estrategias y mejorando la rentabilidad.
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
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#363636] text-white text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-[#404040] transition-colors">
            <span className="truncate">Contáctanos</span>
          </button>
        </div>
      </div>
    </>
  );
}; 