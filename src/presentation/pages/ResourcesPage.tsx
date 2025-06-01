import { Link } from 'react-router-dom';

export const ResourcesPage = () => {
  return (
    <main className="flex flex-col">
      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-background px-4 py-20 text-center @[480px]:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2a2a] from-0% to-background to-70%"></div>
        <div className="relative z-10 mx-auto max-w-[800px]">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-[-0.02em] text-white @[480px]:text-5xl">
            Recursos y Casos de Éxito
          </h1>
          <p className="text-base leading-7 text-text-secondary @[480px]:text-lg">
            Descubre cómo la IA está transformando negocios y aprende de nuestros casos de éxito
          </p>
        </div>
      </section>

      <section className="bg-background px-4 py-10 @[480px]:px-10 @[480px]:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 @[480px]:mb-16">
            <h2 className="mb-4 text-2xl font-bold leading-tight tracking-[-0.02em] text-white @[480px]:text-3xl">
              Casos de Éxito
            </h2>
            <p className="text-base leading-7 text-text-secondary @[480px]:text-lg">
              Historias reales de empresas que han transformado sus negocios con nuestras soluciones
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 @[480px]:grid-cols-2 @[480px]:gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-[#1f1f1f]"
              >
                <div 
                  className="size-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${study.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent p-6 @[480px]:p-8">
                  <div className="flex h-full flex-col justify-end">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                        {study.category}
                      </span>
                      <span className="text-sm text-accent">{study.metrics}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white @[480px]:text-2xl">{study.title}</h3>
                    <p className="mb-4 text-sm text-text-secondary @[480px]:text-base">{study.description}</p>
                    <Link
                      to={study.link}
                      className="inline-flex items-center gap-2 text-sm text-white hover:text-accent @[480px]:text-base"
                    >
                      Leer caso completo
                      <svg
                        className="size-4 @[480px]:size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-4 py-10 @[480px]:px-10 @[480px]:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 @[480px]:mb-16">
            <h2 className="mb-4 text-2xl font-bold leading-tight tracking-[-0.02em] text-white @[480px]:text-3xl">
              Artículos y Recursos
            </h2>
            <p className="text-base leading-7 text-text-secondary @[480px]:text-lg">
              Mantente al día con las últimas tendencias en IA y descubre cómo aplicarlas a tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 @[480px]:grid-cols-2 @[864px]:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-colors hover:border-accent"
              >
                <div className="relative aspect-[16/9]">
                  <div 
                    className="size-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-sm font-medium text-background">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} min de lectura</span>
                  </div>
                  <h3 className="text-lg font-bold text-white @[480px]:text-xl">{article.title}</h3>
                  <p className="flex-1 text-sm text-text-secondary @[480px]:text-base">{article.description}</p>
                  <Link
                    to={article.link}
                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline @[480px]:text-base"
                  >
                    Leer más
                    <svg
                      className="size-4 @[480px]:size-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-10 @[480px]:px-10 @[480px]:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="mb-4 text-2xl font-bold leading-tight tracking-[-0.02em] text-white @[480px]:text-3xl">
            ¿Quieres saber más?
          </h2>
          <p className="mx-auto mb-8 max-w-[600px] text-base leading-7 text-text-secondary @[480px]:text-lg">
            Suscríbete a nuestra newsletter para recibir las últimas actualizaciones sobre IA y casos de éxito.
          </p>
          <form className="mx-auto flex max-w-[500px] flex-col gap-4 @[480px]:flex-row">
            <input
              type="email"
              placeholder="Tu email"
              className="w-full rounded-lg border border-border bg-[#1f1f1f] px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent focus:outline-none"
            />
            <button type="submit" className="btn whitespace-nowrap">
              <span className="truncate">Suscribirse</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

const caseStudies = [
  {
    title: 'Transformación Digital en Peluquería',
    category: 'Belleza',
    metrics: '+45% reservas online',
    description:
      'Implementación de sistema de reservas IA que redujo las cancelaciones en un 30% y aumentó la fidelización de clientes.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop',
    link: '/casos-de-exito/peluqueria',
  },
  {
    title: 'Automatización en Clínica Dental',
    category: 'Salud',
    metrics: '-40% tiempo administrativo',
    description:
      'Sistema de gestión inteligente que optimizó la agenda y mejoró la experiencia del paciente, aumentando la satisfacción en un 85%.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop',
    link: '/casos-de-exito/clinica-dental',
  },
  {
    title: 'Chatbot para Estética',
    category: 'Belleza',
    metrics: '+35% conversiones',
    description:
      'Asistente virtual IA que maneja consultas 24/7, reduciendo la carga de trabajo del personal y aumentando las reservas.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000&auto=format&fit=crop',
    link: '/casos-de-exito/estetica',
  },
  {
    title: 'Gestión Inteligente en Spa',
    category: 'Bienestar',
    metrics: '+50% eficiencia operativa',
    description:
      'Plataforma integral que automatiza la gestión de citas, inventario y marketing, optimizando todos los procesos del negocio.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
    link: '/casos-de-exito/spa',
  },
];

const articles = [
  {
    title: 'El Impacto de la IA en Negocios de Belleza',
    category: 'Tendencias',
    description:
      'Análisis de cómo la inteligencia artificial está revolucionando la gestión y experiencia del cliente en el sector de la belleza.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
    date: '1 Mar 2024',
    readTime: 5,
    link: '/blog/ia-belleza',
  },
  {
    title: 'Guía de Implementación de Chatbots',
    category: 'Guía',
    description:
      'Paso a paso para implementar un chatbot exitoso en tu negocio, desde la planificación hasta la optimización continua.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop',
    date: '28 Feb 2024',
    readTime: 8,
    link: '/blog/guia-chatbots',
  },
  {
    title: 'ROI de la Automatización en Servicios',
    category: 'Análisis',
    description:
      'Estudio detallado del retorno de inversión en proyectos de automatización, con casos reales y métricas clave.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    date: '25 Feb 2024',
    readTime: 6,
    link: '/blog/roi-automatizacion',
  },
]; 