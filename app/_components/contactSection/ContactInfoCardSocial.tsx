import { GithubIcon, InstaIcon, LinkedinIcon } from "@/app/_assets/icon";


const ContactInfoCardSocial = () => {
  return (
    <div className="h-1/2 w-full min-w-0 min-h-0 flex flex-col justify-between  px-4 py-6  rounded-lg bg-gradient-to-r from-[#323332] to-[#3E403E] gap-4">
      <h3 className="uppercase text-yellow text-xs font-semibold">
        contact with me
      </h3>
      <div className="flex w-full gap-4">
        <LinkedinIcon />
        <GithubIcon />
        <InstaIcon />
      </div>
    </div>
  );
};

export default ContactInfoCardSocial;
