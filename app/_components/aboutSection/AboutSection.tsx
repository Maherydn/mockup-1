const AboutSection = () => {
  return (
    <section className="md:h-screen h-fit w-full flex flex-col items-center justify-center gap-10 px-4 lg:px-0 ">
      {/* Nom en haut */}
      <div className="flex items-center gap-1 lg:gap-2 uppercase font-bold text-xl lg:text-2xl text-white/80 w-full">
        <h2>brian</h2>
        <div className="w-2 h-2 rounded-full bg-yellow"></div>
        <h2>santos</h2>
      </div>

      {/* Description + Info */}
      <div className="flex flex-col md:flex-row justify-between gap-6 w-full max-w-6xl">
        <h3 className="text-4xl text-white/90 md:w-1/2">
          Lead product engineer <br /> and creative director.
        </h3>
        <div className="flex flex-col gap-6 h-fit md:w-1/2 w-full">
          <p className="text-xl text-white/85">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis
          </p>
          <p className="text-lg text-white/50">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et
          </p>

          {/* Infos perso */}
          <div className="flex justify-between w-full flex-wrap gap-4">
            <div className="w-fit -space-y-1.5">
              <h4 className="uppercase text-xs md:text-sm text-yellow">
                Location
              </h4>
              <p className="text-lg md:text-2xl text-white/95 capitalize">
                london
              </p>
            </div>
            <div className="w-fit -space-y-1.5">
              <h4 className="uppercase text-xs md:text-sm text-yellow">
                Experience
              </h4>
              <p className="text-lg md:text-2xl text-white/95 capitalize">
                7+ Years
              </p>
            </div>
            <div className="w-fit -space-y-1.5">
              <h4 className="uppercase text-xs md:text-sm text-yellow">
                Date of Birth
              </h4>
              <p className="text-lg md:text-2xl text-white/95 capitalize">
                27 June 1998
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl">
        {[
          { number: "7+", label: "years of experience" },
          { number: "50+", label: "project completed" },
          { number: "30+", label: "happy client" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 w-full md:w-1/3 h-32 py-4 rounded-lg bg-gradient-to-r from-[#323332] to-[#3E403E]"
          >
            <p className="text-4xl font-bold text-white/90">{item.number}</p>
            <p className="text-lg uppercase text-white/85">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
