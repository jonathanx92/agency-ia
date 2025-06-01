import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: ReactNode;
  backgroundImage?: string;
  align?: 'left' | 'center' | 'right';
}

export const Hero = ({ title, subtitle, cta, backgroundImage, align = 'center' }: HeroProps) => (
  <section
    className={`relative flex min-h-[320px] flex-col items-${align} justify-center overflow-hidden bg-background px-4 py-12 text-${align} sm:min-h-[400px] sm:px-6 sm:py-16 lg:min-h-[480px] lg:px-10 lg:py-20`}
    style={backgroundImage ? { 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url('${backgroundImage}')`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    } : {}}
  >
    <div className="relative z-10 mx-auto flex w-full max-w-[800px] flex-col gap-4">
      <h1 className="text-3xl font-black leading-tight tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">{title}</h1>
      <h2 className="text-base font-normal leading-normal text-white opacity-90 sm:text-lg">{subtitle}</h2>
      {cta && (
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {cta}
        </div>
      )}
    </div>
  </section>
); 