"use client";
import Image from "next/image";

const HeaderLogo = () => (
  <div className="flex justify-around h-14 w-52">
    <div className="w-14 h-14 rounded-full bg-white/80 overflow-hidden">
      <Image src="/avatar.png" alt="avatar" width={100} height={100} />
    </div>
    <div className="flex flex-col h-16 justify-center">
      <h3 className="text-xl text-white/80">Mahery Daniel</h3>
      <h4 className="text-lg text-white/60">Developer</h4>
    </div>
  </div>
);

export default HeaderLogo;
