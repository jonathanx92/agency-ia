interface TestimonialCardProps {
  image: string;
  text: string;
  name: string;
  company: string;
}

export const TestimonialCard = ({ image, text, name, company }: TestimonialCardProps) => (
  <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
      style={{ backgroundImage: `url('${image}')` }}
    />
    <div>
      <p className="text-white text-base font-medium leading-normal">{text}</p>
      <p className="text-[#adadad] text-sm font-normal leading-normal">{name}, {company}</p>
    </div>
  </div>
); 