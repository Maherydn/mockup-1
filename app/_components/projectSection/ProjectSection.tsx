const ProjectSection = () => {
  return (
    <section className="h-fit w-full flex flex-col gap-6 lg:px-0 px-4 mt-24 md:mt-0 ">
      <div className="flex items-center justify-center lg:gap-2 gap-1 uppercase font-bold text-xl text-white/80">
        <h2>My</h2>
        <div className="w-2 h-2 rounded-full bg-yellow"></div>
        <h2>Projects</h2>
      </div>
      <div className="flex md:flex-row flex-col w-full gap-4">
        {/* project 1 */}
        <div className=" flex flex-col gap-4 md:max-w-1/2 min-w-0 w-full">
          <div className="w-full h-60 relative rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/image.png')] bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" />

            <div className="relative z-10 flex flex-col justify-between items-start p-4 h-full">
              <div className="flex items-center justify-center lg:gap-4 gap-2 uppercase font-semibold text-sm text-yellow">
                <h2>design</h2>
                <div className="w-1 h-1 rounded-full bg-yellow"></div>
                <h2>development</h2>
              </div>
              <div>
                <h3 className="text-xl text-white/80 capitalize">
                  charity landing page
                </h3>
                <p className="text-xs text-white/40">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis,
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 h-96">
            {/* project 2 */}
            <div className="w-1/2 min-w-0 h-full relative rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url('/image2.png')] bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" />

              <div className="relative z-10 flex flex-col justify-between items-start p-4 h-full">
                <div className="uppercase font-semibold text-sm text-yellow">
                  <h2>development</h2>
                </div>
                <div>
                  <h3 className="text-xl text-white/80 capitalize">
                    History Website
                  </h3>
                  <p className="text-xs text-white/40">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>

            {/* project 3 */}
            <div className="w-1/2 min-w-0 h-full relative rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url('/image3.png')] bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" />

              <div className="relative z-10 flex flex-col justify-between items-start p-4 h-full">
                <div className="uppercase font-semibold text-sm text-yellow">
                  <h2>development</h2>
                </div>
                <div>
                  <h3 className="text-xl text-white/80 capitalize">
                    Photography App
                  </h3>
                  <p className="text-xs text-white/40">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex md:flex-col-reverse flex-col gap-4 md:max-w-1/2 min-w-0 w-full">

          {/* project 6 */}
          <div className="w-full h-60 relative rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/image6.png')] bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" />

            <div className="relative z-10 flex flex-col justify-between items-start p-4 h-full">
              <div className="flex items-center justify-center lg:gap-4 gap-2 uppercase font-semibold text-sm text-yellow">
                <h2>design</h2>
                <div className="w-1 h-1 rounded-full bg-yellow"></div>
                <h2>development</h2>
              </div>
              <div>
                <h3 className="text-xl text-white/80 capitalize">
                  Electric Bike Landing Page
                </h3>
                <p className="text-xs text-white/40">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis,
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 h-96">
            {/* project 4 */}
            <div className="w-1/2 min-w-0 h-full relative rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url('/image4.png')] bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" />

              <div className="relative z-10 flex flex-col justify-between items-start p-4 h-full">
                <div className="uppercase font-semibold text-sm text-yellow">
                  <h2>development</h2>
                </div>
                <div>
                  <h3 className="text-xl text-white/80 capitalize">
                    Habit App Design
                  </h3>
                  <p className="text-xs text-white/40">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>

            {/* project 5 */}
            <div className="w-1/2 min-w-0 h-full relative rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url('/image5.png')] bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" />

              <div className="relative z-10 flex flex-col justify-between items-start p-4 h-full">
                <div className="uppercase font-semibold text-sm text-yellow">
                  <h2>development</h2>
                </div>
                <div>
                  <h3 className="text-xl text-white/80 capitalize">
                    Interesting App
                  </h3>
                  <p className="text-xs text-white/40">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
