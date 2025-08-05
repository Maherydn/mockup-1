import { GithubIcon, InstaIcon, LinkedinIcon } from "@/app/_assets/icon";

const ContactSection = () => {
  return (
    <section className="md:min-h-screen h-fit w-full flex flex-col justify-center items-center gap-12 mt-24 md:mt-0 ">
      <div className="flex items-center justify-center lg:gap-2 gap-1 uppercase font-bold text-xl text-white/80">
        <h2>contact</h2>
        <div className="w-2 h-2 rounded-full bg-yellow"></div>
        <h2>me</h2>
      </div>
      <div className="w-full h-fit flex md:flex-row flex-col gap-4 xl:px-0 px-4">
        <div className="min-w-0 md:w-1/2 w-full flex-1 flex flex-col gap-4">
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
          <div className="flex md:flex-row flex-col md:h-1/2 h-full w-full min-w-0 min-h-0 gap-4">
            <div className="h-full md:w-1/2 w-full min-w-0 min-h-0 flex flex-col justify-between  px-4 py-6  rounded-lg bg-gradient-to-r from-[#323332] to-[#3E403E] gap-4">
              <h3 className="uppercase text-yellow text-xs font-semibold">
                email
              </h3>
              <p className="text-lg text-white/50">toto@example.com</p>
            </div>
            <div className="h-full md:w-1/2 w-full min-w-0 min-h-0 flex flex-col justify-between  px-4 py-6  rounded-lg bg-gradient-to-r from-[#323332] to-[#3E403E] gap-4">
              <h3 className="uppercase text-yellow text-xs font-semibold">
                phone
              </h3>
              <p className="text-lg text-white/50">+1 123-456-789</p>
            </div>
          </div>
        </div>

        {/* formulaire */}
        <div className="min-w-0 md:w-1/2 w-full h-fit px-4 py-6  rounded-lg bg-gradient-to-r from-[#323332] to-[#3E403E]">
          <form action="#" className="space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name1"
                  className="uppercase text-yellow text-xs font-semibold"
                >
                  Name
                </label>
                <input
                  id="name1"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="uppercase text-yellow text-xs font-semibold"
                >
                  email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 bg-white"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="uppercase text-yellow text-xs font-semibold"
              >
                message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full h-48  px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 bg-white"
                placeholder="Entrer votre message"
              ></textarea>
            </div>
            <div className="w-full flex justify-center">
              <button className="w-48 h-12 bg-yellow  text-xl rounded-xl capitalize cursor-pointer hover:bg-yellow-300 duration-300">
                send message
                <span> &rarr; </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
