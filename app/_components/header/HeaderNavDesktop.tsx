"use client";

const HeaderNavDesktop = () => (
  <div className="w-fit h-14 lg:flex items-center gap-10 hidden px-2">
    <ul className="w-96 h-full flex justify-around items-center text-xl capitalize text-white/60 hover:text-white/80 duration-300 cursor-pointer">
      <li><a href="#hero">home</a></li>
      <li><a href="#projects">projects</a></li>
      <li><a href="#services">services</a></li>
    </ul>
    <a href="#contact">
      <button className="bg-yellow h-12 w-36 text-xl rounded-xl capitalize cursor-pointer hover:bg-yellow-300 duration-300">
        say hello
      </button>
    </a>
  </div>
);

export default HeaderNavDesktop;
