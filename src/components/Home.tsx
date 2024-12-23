import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-36">
      <h1 className="text-8xl font-bold">Software Engineer</h1>
      <h1 className="text-8xl font-bold text-orange-500">Manuel Solis</h1>
      <h2 className="text-4xl"></h2>
      <div className="flex justify-center items-center mt-14">
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
    </div>
  );
};

export default Home;
