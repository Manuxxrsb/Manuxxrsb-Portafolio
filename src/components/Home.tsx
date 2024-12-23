import React from "react";
import {
  AiOutlineBranches,
  AiOutlineFolderOpen,
  AiOutlineLaptop,
  AiOutlineLoading3Quarters,
  AiTwotoneBug,
} from "react-icons/ai";
import { VscCoffee } from "react-icons/vsc";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-32">
        <AiOutlineBranches size={90} className="text-orange-500" />
        <h1 className="text-8xl font-bold">Software Engineer</h1>
        <h1 className="text-8xl font-bold text-orange-500">Manuel Solis</h1>
        <h2 className="text-4xl"></h2>
        <VscCoffee
          size={90}
          className="absolute mt-32 left-10 text-orange-500"
        />
        <AiTwotoneBug
          size={90}
          className="absolute mt-32 right-10 text-orange-500"
        />
        <AiOutlineLaptop
          size={90}
          className="absolute mt-80 right-60 text-black"
        />
        <AiOutlineFolderOpen
          size={90}
          className="absolute mt-80 left-60 text-black"
        />
        <div className="flex justify-center items-center mt-28">
          <AiOutlineLoading3Quarters
            size={70}
            className="m-4 absolute animate-spin duration-[16000ms] "
          />
          <AiOutlineLoading3Quarters
            size={34}
            color="orange"
            className="m-8 absolute animate-spin duration-2000"
          />
        </div>
        <div className="mt-28 text-6xl font-bold">
          Soy ese <span className="font-bold text-orange-500">miembro</span> que{" "}
          <span className="font-bold text-orange-500">necesitas</span>
        </div>
      </div>
    </>
  );
};

export default Home;
