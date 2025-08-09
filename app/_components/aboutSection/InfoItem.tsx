const InfoItem = ({ title, value }: { title: string; value: string }) => (
  <div className="w-fit -space-y-1.5">
    <h4 className="uppercase text-xs md:text-sm text-yellow">{title}</h4>
    <p className="text-lg md:text-2xl text-white/95 capitalize">{value}</p>
  </div>
);

export default InfoItem;
