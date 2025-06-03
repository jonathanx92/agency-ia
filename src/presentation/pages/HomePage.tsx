export const HomePage = () => {
  return (
    <>
      <div className="@container">
        <div className="flex flex-col gap-6 px-4 py-10 lg:gap-8 lg:flex-row">
          <div
            className="w-full aspect-[16/9] sm:aspect-video bg-center bg-no-repeat bg-cover rounded-lg relative overflow-hidden group"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop")',
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

          <div className="flex flex-col gap-6 lg:justify-center">
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                Impulsa tu negocio con IA — Fácil, rápido y accesible
              </h1>
              <h2 className="text-white text-sm sm:text-base font-normal leading-normal">
                Automatiza tus tareas diarias y libera tu tiempo para lo que realmente importa: hacer crecer tu negocio.
              </h2>
            </div>
            <button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-accent text-background text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-accent/90 transition-colors">
              <a
                href="https://wa.me/34628506129"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-accent text-background text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-accent/90 transition-colors"
              >
                <span className="truncate">Contáctanos</span>
              </a>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-white text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Beneficios de la automatización con IA
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {[
          {
            title: "Ahorro de tiempo",
            text: "Reduce las tareas manuales y enfócate en tus clientes.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128A104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
              </svg>
            ),
          },
          {
            title: "Aumento de reservas",
            text: "Optimiza tu agenda y maximiza tus ingresos.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" />
              </svg>
            ),
          },
          {
            title: "Atención 24/7",
            text: "Responde a tus clientes en cualquier momento.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
              </svg>
            ),
          },
          {
            title: "Mayor satisfacción",
            text: "Mejora la experiencia del cliente con respuestas rápidas.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Z" />
              </svg>
            ),
          },
        ].map((card, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 hover:border-accent transition-colors w-full"
          >
            <div className="text-accent">{card.icon}</div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">{card.title}</h2>
              <p className="text-[#adadad] text-sm font-normal leading-normal">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
