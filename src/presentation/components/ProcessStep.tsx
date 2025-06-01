import { ReactNode } from 'react';

interface ProcessStepProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ProcessStep = ({ icon, title, description }: ProcessStepProps) => (
  <div className="flex flex-1 flex-col py-3">
    <div className="flex items-center gap-2 mb-2">{icon}</div>
    <p className="text-white text-base font-medium leading-normal">{title}</p>
    <p className="text-[#adadad] text-base font-normal leading-normal">{description}</p>
  </div>
); 