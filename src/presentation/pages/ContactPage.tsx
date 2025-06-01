import { useState } from 'react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envío
    console.log('Form data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <main className="flex flex-col">
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-background px-4 py-20 text-center @[480px]:px-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop")'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2a2a] from-0% to-background to-70% opacity-50"></div>
        <div className="relative z-10 mx-auto max-w-[800px]">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-[-0.02em] text-white @[480px]:text-5xl">
            Contacta con Nosotros
          </h1>
          <p className="text-base leading-7 text-text-secondary @[480px]:text-lg">
            ¿Listo para transformar tu negocio con IA? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <section className="bg-background px-4 py-10 @[480px]:px-10 @[480px]:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-10 @[864px]:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold leading-tight tracking-[-0.02em] text-white @[480px]:text-3xl">
                  Hablemos de tu proyecto
                </h2>
                <p className="text-base leading-7 text-text-secondary @[480px]:text-lg">
                  Cuéntanos sobre tu negocio y cómo podemos ayudarte a alcanzar tus objetivos con la IA.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 @[480px]:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="rounded-lg border border-border bg-[#1f1f1f] px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="rounded-lg border border-border bg-[#1f1f1f] px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="business" className="text-sm font-medium text-white">
                    Tipo de Negocio
                  </label>
                  <select
                    id="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="rounded-lg border border-border bg-[#1f1f1f] px-4 py-3 text-white focus:border-accent focus:outline-none"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="peluqueria">Peluquería</option>
                    <option value="estetica">Estética</option>
                    <option value="spa">Spa</option>
                    <option value="clinica">Clínica</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="rounded-lg border border-border bg-[#1f1f1f] px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent focus:outline-none"
                  />
                </div>

                <button type="submit" className="btn">
                  <span className="truncate">Enviar mensaje</span>
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-8 rounded-lg border border-border bg-[#1f1f1f] p-6 @[480px]:p-8">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Información de contacto</h3>
                <div className="flex flex-col gap-4 text-text-secondary">
                  <div className="flex items-center gap-3">
                    <svg
                      className="size-5 text-accent"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>+34 900 123 456</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="size-5 text-accent"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>info@aibizboost.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Horario de atención</h3>
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

              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#1f1f1f]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4284901456037!2d-3.7037903!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e9e0a4e8f%3A0xa00f5a5b9564400!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1647881234567!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}; 