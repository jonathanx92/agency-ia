import { ReactNode } from 'react';

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div className="flex flex-1 gap-3 rounded-lg border border-[#4d4d4d] bg-neutral-800 p-4 flex-col">
    <div className="text-white">{icon}</div>
    <div className="flex flex-col gap-1">
      <h2 className="text-white text-base font-bold leading-tight">{title}</h2>
      <p className="text-[#adadad] text-sm font-normal leading-normal">{description}</p>
    </div>
  </div>
); 