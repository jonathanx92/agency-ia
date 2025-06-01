import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: ReactNode;
  backgroundImage?: string;
  align?: 'center' | 'left';
}

export const Hero = ({ title, subtitle, cta, backgroundImage, align = 'center' }: HeroProps) => (
  <section
    className={`relative flex min-h-[480px] flex-col items-${align} justify-center overflow-hidden bg-background px-10 py-20 text-${align}`}
    style={backgroundImage ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url('${backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
  >
    <div className="relative z-10 mx-auto max-w-[800px] flex flex-col gap-4">
      <h1 className="mb-2 text-5xl font-black leading-tight tracking-[-0.02em] text-white">{title}</h1>
      <h2 className="mb-6 text-lg font-normal leading-normal text-white opacity-90">{subtitle}</h2>
      {cta && <div className="flex gap-4">{cta}</div>}
    </div>
  </section>
); 