export const AboutPage = () => {
  return (
    <>
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOJJB_7ncbIqhrtN0-mwFBkUdPSmaeQeEv18NziJ7IQRO5QoOFbIRvi8LNXxVZejweddzimp3PCBYBWR0EzZsAo0TUlPlXPZr326hDKNn4qAgv1HDK1ehOqrPtegrILzlYDWbtU-3r9hekgvRr0dZfgTV9QPJNkJ2Rf3vOvjz4se3pTL1uOMPr2JfPL0jmvOv9VNKwbWBiTBcw-a4Zc-q_DbTsQ0QuF1PpV31Rp8itBtFcuRODukk8mpIrSd553_6OYQKyaDyCFl71")',
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Impulsando el crecimiento de tu negocio con automatización e IA
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                En Innovatech Solutions, transformamos pequeños negocios con soluciones de automatización e inteligencia artificial a medida. Nuestra misión es democratizar
                el acceso a tecnología avanzada, permitiendo que cada empresa alcance su máximo potencial.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-accent text-background text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-accent/90 transition-colors">
              <span className="truncate">Descubre cómo</span>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Nuestra Filosofía</h2>
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4">
          <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Valores que nos guían
          </h1>
          <p className="text-white text-base font-normal leading-normal max-w-[720px]">
            En Innovatech Solutions, nos comprometemos con la innovación constante, la colaboración estrecha con nuestros clientes y la accesibilidad de la tecnología para
            todos.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col hover:border-accent transition-colors">
            <div className="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">Innovación</h2>
              <p className="text-[#adadad] text-sm font-normal leading-normal">
                Buscamos continuamente nuevas formas de aplicar la IA y la automatización para resolver los desafíos de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col hover:border-accent transition-colors">
            <div className="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">Compromiso</h2>
              <p className="text-[#adadad] text-sm font-normal leading-normal">
                Trabajamos en estrecha colaboración con cada cliente, entendiendo sus necesidades y objetivos para ofrecer soluciones personalizadas.
              </p>
            </div>
          </div>

          <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col hover:border-accent transition-colors">
            <div className="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">Accesibilidad</h2>
              <p className="text-[#adadad] text-sm font-normal leading-normal">
                Creemos que la tecnología avanzada debe estar al alcance de todos los negocios, sin importar su tamaño o presupuesto.
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