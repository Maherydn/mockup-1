import ContactFormulaire from "./ContactFormulaire";
import ContactInfoCard from "./ContactInfoCard";
import ContactInfoCardSocial from "./ContactInfoCardSocial";

const contact = [
  {
    title: "email",
    contact: "maherydn@gmail.com",
  },
  {
    title: "phone",
    contact: "+26134094694",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="md:min-h-screen h-fit w-full flex flex-col justify-center items-center gap-20 pt-20 md:pt-0 mt-24 md:mt-0 "
    >
      <div className="flex items-center justify-center lg:gap-2 gap-1 uppercase font-bold md:text-4xl text-2xl text-white/80">
        <h2>contact</h2>
        <div className="w-2 h-2 rounded-full bg-yellow"></div>
        <h2>me</h2>
      </div>

      <div className="w-full h-fit flex md:flex-row flex-col gap-4 xl:px-0 px-4">
        <div className="min-w-0 md:w-1/2 w-full flex-1 flex flex-col gap-4">
          <ContactInfoCardSocial />
          <div className="flex md:flex-row flex-col md:h-1/2 h-full w-full min-w-0 min-h-0 gap-4">
            {contact.map((contact, index) => (
              <ContactInfoCard key={index} {...contact} />
            ))}
          </div>
        </div>

        {/* formulaire */}
        <div className="min-w-0 md:w-1/2 w-full h-fit px-4 py-6  rounded-lg bg-gradient-to-r from-[#323332] to-[#3E403E]">
          <ContactFormulaire />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
