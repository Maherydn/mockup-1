import { MenuBurgerIcon } from "@/app/_assets/icon";

const Header = () => {
  return (
    <header className=" h-24 lg:w-5xl w-full lg:px-0 px-2 flex items-center border-b border-slate-300/50 justify-between  fixed top-0 ">
      <div className="flex justify-around h-14 w-52 ">
        <div className="w-14 h-full bg-slate-200 rounded-lg">
          {/* <img src="#" alt="profil" /> */}
        </div>
        <div className="flex flex-col h-16 justify-center">
          <h3 className="text-xl text-white/80">Brian Santos</h3>
          <h4 className="text-lg text-white/60">Developper</h4>
        </div>
      </div>
      <div className="w-fit h-14 lg:flex items-center gap-10 hidden">
        <ul className="w-96 h-full flex justify-around items-center text-xl capitalize text-white/60 hover:text-white/80 duration-300 cursor-pointer ">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">portfolio</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </ul>
        <button className="bg-yellow h-12 w-36 text-xl rounded-xl capitalize cursor-pointer hover:bg-yellow-300 duration-300">
          say hello
        </button>
      </div>
      <div className="lg:hidden block w-fit h-fit">
          <MenuBurgerIcon/>
      </div>
    </header>
  );
};

export default Header;
