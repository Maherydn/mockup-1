import { BottomIcon } from "@/app/_assets/icon";

export const DownloadButton = () => (
  <button className="capitalize bg-yellow lg:h-14 lg:w-64 h-10 w-52 rounded-lg flex justify-evenly items-center hover:bg-yellow-300/50 duration-300 cursor-pointer mx-auto">
    <p className="lg:text-xl text-lg text-slate-600 font-bold">
      download my CV
    </p>
    <div>
      <BottomIcon />
    </div>
  </button>
);
