export const ContactPage = () => {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-background px-4 py-20 text-center @[480px]:px-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2a2a] to-background opacity-50" />
        <div className="relative z-10 mx-auto max-w-[800px]">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-[-0.02em] text-white @[480px]:text-5xl">
            Contacta con Nosotros
          </h1>
          <p className="text-base leading-7 text-text-secondary @[480px]:text-lg">
            Estamos disponibles para resolver tus dudas y ayudarte a transformar tu negocio con IA.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-background px-4 py-10 @[480px]:px-10 @[480px]:py-20">
        <div className="mx-auto max-w-[800px] flex flex-col gap-8 rounded-lg border border-border bg-[#1f1f1f] p-6 @[480px]:p-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">Información de contacto</h2>
            <div className="flex flex-col gap-4 text-text-secondary">
              <div className="flex items-center gap-3">
                <svg className="size-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" />
                </svg>
                <span>+34 628 506 129</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="size-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" />
                </svg>
                <span>info@aibizboost.com</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">Horario de atención</h2>
            <div className="flex flex-col gap-2 text-text-secondary">
              <div className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span>10:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://wa.me/34628506129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-white  transition hover:bg-zinc-900"
            >
              <svg className="size-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.85.5 3.57 1.36 5.07L2 22l5.09-1.34A9.96 9.96 0 0 0 12.01 22C17.52 22 22 17.52 22 12S17.52 2 12.01 2Zm-.15 17.3c-1.64 0-3.18-.45-4.52-1.22l-.32-.19-3.03.79.81-2.96-.21-.33A8.3 8.3 0 0 1 3.7 12c0-4.6 3.74-8.33 8.33-8.33S20.36 7.4 20.36 12s-3.73 8.33-8.33 8.33Zm4.49-6.27c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12s-.62.79-.76.95c-.14.16-.28.18-.52.06a6.83 6.83 0 0 1-2-1.23 7.51 7.51 0 0 1-1.39-1.72c-.15-.26-.02-.4.11-.52.11-.11.26-.28.39-.42.13-.15.17-.25.26-.42.09-.17.05-.32-.02-.45-.07-.13-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42H7.6c-.14 0-.36.05-.55.25s-.72.7-.72 1.7.74 1.97.84 2.11c.1.13 1.46 2.2 3.55 3.09.5.22.89.35 1.2.45.5.16.96.14 1.32.09.4-.06 1.25-.51 1.43-1.01.18-.5.18-.93.13-1.01-.05-.08-.21-.13-.44-.24Z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
