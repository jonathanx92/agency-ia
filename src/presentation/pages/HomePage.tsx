export const HomePage = () => {
  return (
    <>
      <div className="@container">
        <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full relative overflow-hidden group"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop")'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-medium">Ver cómo funciona →</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Impulsa tu negocio con IA — Fácil, rápido y accesible
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Automatiza tus tareas diarias y libera tu tiempo para lo que realmente importa: hacer crecer tu negocio.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-accent text-background text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-accent/90 transition-colors">
              <span className="truncate">Comienza hoy</span>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Beneficios de la automatización con IA</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col hover:border-accent transition-colors">
          <div className="text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Ahorro de tiempo</h2>
            <p className="text-[#adadad] text-sm font-normal leading-normal">Reduce las tareas manuales y enfócate en tus clientes.</p>
          </div>
        </div>

        <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col hover:border-accent transition-colors">
          <div className="text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Aumento de reservas</h2>
            <p className="text-[#adadad] text-sm font-normal leading-normal">Optimiza tu agenda y maximiza tus ingresos.</p>
          </div>
        </div>

        <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col hover:border-accent transition-colors">
          <div className="text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Atención 24/7</h2>
            <p className="text-[#adadad] text-sm font-normal leading-normal">Responde a tus clientes en cualquier momento.</p>
          </div>
        </div>

        <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col hover:border-accent transition-colors">
          <div className="text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Automatización inteligente</h2>
            <p className="text-[#adadad] text-sm font-normal leading-normal">Procesos eficientes y personalizados para tu negocio.</p>
          </div>
        </div>
      </div>

      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Testimonios</h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQkoUYIYp2LkgATWPKlKbeXNVx4wBLDeQX4EYPMX7HyizEUtmOD2p1MywdhXAVvfTIaiY0GZJnouPJWOR0T2O0PrRRHiLJearArn8Hc44QhDro66IctEWZSe3i-Ya7ujoWNN_kWS0tPUAsvagZ-0vGMXwLap_xAvuaaGOd9RXSSWIqqtEAODyl6g7QbkB6kzokYYYd2L7H9sRLytPmiXz_8Oi5yj_C2xr5hWp-n_C8uC-Jc3j-QFfWj7wGh8MF45BlBJrrWVRsRSKF")'
              }}
            />
            <div>
              <p className="text-white text-base font-medium leading-normal">
                "La automatización ha transformado mi peluquería. Mis clientes aman la facilidad de reservar en línea."
              </p>
              <p className="text-[#adadad] text-sm font-normal leading-normal">Laura, Peluquería "Estilo Chic"</p>
            </div>
          </div>

          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQbk3oJbFhwUNKmoPWa0V8Y5TiRA_1ZmxMd7Sx1e4oPo4s4nbEiB1o7-64Y17XMLjHaOLcIw2Rxva-pjJqPkMF1JqwyLjEyL3DF0D0D2Sigd_bzCzOlf6tc7hUoPb5XHf9qzBfwQNbXx4Coo9L9wgHf5uMOEN24q5zhtNLjKlS4pWDBXIMKm318eBIAgKlyiI4gdv6ku-rsw26ZBqA2sVSnO4pjZxLL4uocnQDy7UljsGqY362EBTil5uZ9pFfi3PBcxSlYYo_CZEn")'
              }}
            />
            <div>
              <p className="text-white text-base font-medium leading-normal">
                "Desde que implementé la IA, mi estética ha visto un aumento significativo en las reservas y la satisfacción del cliente."
              </p>
              <p className="text-[#adadad] text-sm font-normal leading-normal">Sofía, Estética "Belleza Radiante"</p>
            </div>
          </div>

          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxlgFfSBVLVjCNE0C6ZiPkm_wNkDMGSnMRPQEExTdZ1iCwms4yWuX2p_ay4MGHjyUYVudLfHLGepMU1nnzbVf4oFFaXHdulslnqx4Ox7LZ01o6j7ArVkzMeKLx96tf1KpGJ1D5V8iM9TvrjCt1dlbBx_jR8-r0OrxdxbFJKsd9IgXFevNHaavA310esPOtcACQs7gG4dMukzNeQnfxLzIuw_mW799KlX3a2WbR3NjcdApndIFW4YEgShi1P87jeIpKZwyfe4zJOszW")'
              }}
            />
            <div>
              <p className="text-white text-base font-medium leading-normal">
                "La atención 24/7 ha sido clave para mi clínica dental. Mis pacientes se sienten más conectados y atendidos."
              </p>
              <p className="text-[#adadad] text-sm font-normal leading-normal">Carlos, Clínica Dental "Sonrisa Perfecta"</p>
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