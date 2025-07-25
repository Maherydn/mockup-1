const ServiceSection = () => {
  return (
    <section className="md:h-screen h-fit w-full flex flex-col justify-center items-center gap-10 px-4 md:px-0">
      <div className="flex items-center justify-center lg:gap-2 gap-1 uppercase font-bold text-xl text-white/80">
        <h2>My</h2>
        <div className="w-2 h-2 rounded-full bg-yellow"></div>
        <h2>Services</h2>
      </div>
      <div className="w-full flex md:flex-row flex-col gap-8">
        <div className="md:w-1/3 w-full min-w-0 h-96 bg-gradient-to-r from-[#323332] to-[#3E403E] rounded-lg p-4 flex flex-col justify-between items-start">
          <div className="w-16 h-16 bg-slate-500 rounded-lg"></div>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-yellow">0  1</p>
            <h3 className="capitalize text-2xl text-white/90">Branding</h3>
            <p className="text-lg text-white/60 leading-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 w-full min-w-0 h-96 bg-gradient-to-r from-[#323332] to-[#3E403E] rounded-lg p-4 flex flex-col justify-between items-start">
          <div className="w-16 h-16 bg-slate-500 rounded-lg"></div>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-yellow">0 2</p>
            <h3 className="capitalize text-2xl text-white/90">design</h3>
            <p className="text-lg text-white/60 leading-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 w-full min-w-0 h-96 bg-gradient-to-r from-[#323332] to-[#3E403E] rounded-lg p-4 flex flex-col justify-between items-start">
          <div className="w-16 h-16 bg-slate-500 rounded-lg"></div>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-yellow">0 3</p>
            <h3 className="capitalize text-2xl text-white/90">development</h3>
            <p className="text-lg text-white/60 leading-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
