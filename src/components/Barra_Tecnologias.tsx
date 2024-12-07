import { TerminalIcon } from "lucide-react";
import { FaReact, FaHtml5, FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiVite, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";

function Barra_Tecnologias() {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-center border-white border-2 bg-orange-300 m-4 rounded-md to-transparent">
          <TerminalIcon
            size="32"
            color="white"
            className="mt-3 bg-slate-600 rounded-md"
          />
          <h2 className="font-bold m-4 text-3xl text-center md:text-left">
            FrontEnd
          </h2>
        </div>

        <ul className="border-2 border-red-300 p-4 m-6 flex flex-col md:flex-row justify-between shadow-lg rounded-md">
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <FaHtml5 size="100" color="orange" />

            <h2>HTML</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <FaCss3Alt size="100" color="blue" />
            <h2>CSS</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <RiTailwindCssFill size="100" color="skyblue" />
            <h2>TAILWIND</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <IoLogoJavascript size="100" color="yellow" />
            <h2>JAVASCRIPT</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-slate-600 mb-4 md:mb-0 shadow-md">
            <FaReact size="100" color="skyblue" />
            <h2 className="text-sky-400">REACT</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-whithe mb-4 md:mb-0 shadow-md">
            <SiTypescript size="100" color="blue" />
            <h2>TYPESCRIPT</h2>
          </li>

          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-violet-900 mb-4 md:mb-0 shadow-md">
            <SiVite size="100" color="yellow" />
            <h2 className="text-yellow-300">VITE</h2>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row justify-center border-white border-2 bg-orange-300 m-4 rounded-md to-transparent">
          <TerminalIcon
            size="32"
            color="white"
            className="mt-3 bg-slate-600 rounded-md"
          />
          <h2 className="font-bold m-4 text-3xl text-center md:text-left">
            BackEnd
          </h2>
        </div>
        <ul className="border-2 border-red-300 p-4 m-6 flex flex-col md:flex-row justify-between shadow-lg rounded-md">
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <FaGolang size="100" color="skyblue" />
            <h2>GO</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-slate-600 mb-4 md:mb-0 shadow-md">
            <FaPython size="100" color="yellow" />
            <h2 className="text-yellow-50">PYTHON</h2>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row justify-center border-white border-2 bg-orange-300 m-4 rounded-md">
          <TerminalIcon
            size="32"
            color="white"
            className="mt-3 bg-slate-600 rounded-md"
          />
          <h2 className="font-bold m-4 text-3xl text-center md:text-left">
            Base de Datos
          </h2>
        </div>
        <ul className="border-2 border-red-300 p-4 m-6 flex flex-col md:flex-row justify-between shadow-lg rounded-md"></ul>
      </div>
    </>
  );
}

export default Barra_Tecnologias;
