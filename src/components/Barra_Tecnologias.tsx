import { TerminalIcon } from "lucide-react";
import {
  FaReact,
  FaHtml5,
  FaGolang,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa6";
import {
  IoLogoFirebase,
  IoLogoJavascript,
  IoLogoVercel,
} from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiVite,
  SiTypescript,
  SiGooglecloud,
  SiNestjs,
  SiPostman,
  SiGithubactions,
  SiFastapi,
} from "react-icons/si";
import { RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql, BiCloud } from "react-icons/bi"; // Importar el ícono de la nube
import { AiOutlineKubernetes } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";

const Barra_Tecnologias = () => {
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
        <ul className="border-2 border-red-300 p-4 m-6 flex flex-col md:flex-row flex-wrap justify-between shadow-lg rounded-md">
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
        <ul className="border-2 border-red-300 p-4 m-6 flex flex-col md:flex-row flex-wrap justify-between shadow-lg rounded-md">
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <FaGolang size="100" color="skyblue" />
            <h2>GO</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <SiNestjs size="100" color="red" />
            <h2>NestJS</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <FaNodeJs size="100" color="blue" />
            <h2>Node.js</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-slate-600 mb-4 md:mb-0 shadow-md">
            <FaPython size="100" color="yellow" />
            <h2 className="text-yellow-50">PYTHON</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <img
              src="https://img.icons8.com/fluency/240/c-programming.png"
              alt="Lenguaje C"
            />
            <h2 className="text-black-500">C</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <img
              src="https://img.icons8.com/color/480/c-plus-plus-logo.png"
              alt="Lenguaje C++"
            />
            <h2 className="text-black-500">C++</h2>
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
        <ul className="border-2 border-red-300 p-4 m-6 flex flex-col md:flex-row flex-wrap justify-between shadow-lg rounded-md">
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <BiLogoPostgresql size="100" color="blue" />
            <h2>POSTGRESQL</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <RiSupabaseFill size="100" color="green" />
            <h2>SUPABASE</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <GrMysql size="100" color="black" />
            <h2>MySql</h2>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row justify-center border-white border-2 bg-orange-300 m-4 rounded-md to-transparent">
          <BiCloud
            size="32"
            color="white"
            className="mt-3 bg-slate-600 rounded-md"
          />
          <h2 className="font-bold m-4 text-3xl text-center md:text-left">
            Cloud
          </h2>
        </div>
        <ul className="border-2 border-red-300 p-4 m-6 flex flex-col md:flex-row flex-wrap justify-between shadow-lg rounded-md">
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <IoLogoFirebase size="100" color="orange" />
            <h2>Firebase</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <SiGooglecloud size="100" color="skyblue" />
            <h2>GCP</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <AiOutlineKubernetes size="100" color="skyblue" />
            <h2>Kubernetes</h2>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row justify-center border-white border-2 bg-orange-300 m-4 rounded-md">
          <TerminalIcon
            size="32"
            color="white"
            className="mt-3 bg-slate-600 rounded-md"
          />
          <h2 className="font-bold m-4 text-3xl text-center md:text-left">
            Heramientas
          </h2>
        </div>
        <ul className="border-2 border-red-300 p-4 m-6 flex flex-col md:flex-row flex-wrap justify-between shadow-lg rounded-md">
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <IoLogoVercel size="100" color="black" />
            <h2>vercel</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <SiPostman size="100" color="orange" />
            <h2>Postman</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <SiGithubactions size="100" color="blue" />
            <h2>Gitub Actions</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <FaGitAlt size="100" color="orange" />
            <h2>Git</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-white mb-4 md:mb-0 shadow-md">
            <SiFastapi size="100" color="skyblue" />
            <h2>FastAPI</h2>
          </li>
          <li className="border-2 border-green-400 rounded-xl p-2 hover:scale-105 hover:transition-all cursor-pointer w-32 justify-items-center bg-violet-900 mb-4 md:mb-0 shadow-md">
            <SiVite size="100" color="yellow" />
            <h2 className="text-yellow-300">VITE</h2>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Barra_Tecnologias;
