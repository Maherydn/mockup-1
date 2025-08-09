interface ContactInfoCardProps {
  title: string;
  contact: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  title,
  contact,
}) => (
  <div className="h-full md:w-1/2 w-full min-w-0 min-h-0 flex flex-col justify-between  px-4 py-6  rounded-lg bg-gradient-to-r from-[#323332] to-[#3E403E] gap-4">
    <h3 className="uppercase text-yellow text-xs font-semibold">{title}</h3>
    <p className="text-lg text-white/50">{contact}</p>
  </div>
);

export default ContactInfoCard;
