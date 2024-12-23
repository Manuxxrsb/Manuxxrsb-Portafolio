import {
  FaReact,
  FaHtml5,
  FaGolang,
  FaGitAlt,
  FaNodeJs,
  FaFileCode,
} from "react-icons/fa6";
import {
  IoBrushOutline,
  IoLogoFirebase,
  IoLogoJavascript,
  IoLogoVercel,
} from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiVite,
  SiTypescript,
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
import { CiCloudOn } from "react-icons/ci";
import { FiDatabase } from "react-icons/fi";
import { LiaToolsSolid } from "react-icons/lia";

const Barra_Tecnologias = () => {
  return (
    <>
      <div className="mt-36 items-center">
        <h1 className="text-7xl font-bold items-center text-center mb-12">
          Tecnologias
        </h1>
        <div className="flex flex-row md:flex-row justify-center border-white  bg-orange-300 m-4 shadow-md shadow-orange-200 rounded-md to-transparent">
          <IoBrushOutline
            size="36"
            color="white"
            className="mt-5 p-1 bg-slate-600 rounded-md"
          />
          <h2 className="font-bold m-4 text-3xl text-center md:text-left">
            FrontEnd
          </h2>
        </div>
        <ul className=" py-4 mx-6 flex flex-col md:flex-row flex-wrap justify-between shadow-lg shadow-orange-200 rounded-md">
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <FaHtml5 size="100" color="orange" />
            <h2>HTML</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <FaCss3Alt size="100" color="blue" />
            <h2>CSS</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <RiTailwindCssFill size="100" color="skyblue" />
            <h2>TAILWIND</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <IoLogoJavascript size="100" color="yellow" />
            <h2>JAVASCRIPT</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center  mb-4 md:mb-0 shadow-md shadow-or">
            <FaReact size="100" color="skyblue" />
            <h2>REACT</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-whithe mb-4 md:mb-0 shadow-md shadow-or">
            <SiTypescript size="100" color="blue" />
            <h2>TYPESCRIPT</h2>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row justify-center border-white  bg-orange-300 m-4 shadow-md shadow-orange-200 rounded-md to-transparent">
          <FaFileCode
            size="36"
            color="white"
            className="mt-5 p-1 bg-slate-600 rounded-md"
          />
          <h2 className="font-bold m-4 text-3xl text-center md:text-left">
            BackEnd
          </h2>
        </div>
        <ul className=" py-4 mx-6 flex flex-col md:flex-row flex-wrap justify-between shadow-lg shadow-orange-200 rounded-md">
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <FaGolang size="100" color="skyblue" />
            <h2>GO</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <SiNestjs size="100" color="red" />
            <h2>NestJS</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <FaNodeJs size="100" color="green" />
            <h2>Node.js</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center  mb-4 md:mb-0 shadow-md shadow-or">
            <FaPython size="100" color="yellow" />
            <h2>PYTHON</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <img
              src="https://img.icons8.com/fluency/240/c-programming.png"
              alt="Lenguaje C"
            />
            <h2 className="text-black-500">C</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <img
              src="https://img.icons8.com/color/480/c-plus-plus-logo.png"
              alt="Lenguaje C++"
            />
            <h2 className="text-black-500">C++</h2>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row justify-center border-white  bg-orange-300 m-4 rounded-md">
          <FiDatabase
            size="36"
            color="white"
            className="mt-5 p-1 bg-slate-600 rounded-md"
          />
          <h2 className="font-bold m-4 text-3xl text-center md:text-left">
            Base de Datos
          </h2>
        </div>
        <ul className=" py-4 mx-6 flex flex-col md:flex-row flex-wrap justify-between shadow-lg shadow-orange-200 rounded-md">
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <BiLogoPostgresql size="100" color="blue" />
            <h2>POSTGRESQL</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <RiSupabaseFill size="100" color="green" />
            <h2>SUPABASE</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <GrMysql size="100" color="black" />
            <h2>MySql</h2>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row justify-center border-white  bg-orange-300 m-4 shadow-md shadow-orange-200 rounded-md to-transparent">
          <BiCloud
            size="36"
            color="white"
            className="mt-5 p-1 bg-slate-600 rounded-md"
          />
          <h2 className="font-bold m-4 text-3xl text-center md:text-left">
            Cloud
          </h2>
        </div>
        <ul className=" py-4 mx-6 flex flex-col md:flex-row flex-wrap justify-between shadow-lg shadow-orange-200 rounded-md">
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <IoLogoFirebase size="100" color="orange" />
            <h2>Firebase</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <CiCloudOn size="100" color="blue" />
            <h2>GCP</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <AiOutlineKubernetes size="100" color="skyblue" />
            <h2>Kubernetes</h2>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row justify-center border-white  bg-orange-300 m-4 rounded-md">
          <LiaToolsSolid
            size="36"
            color="white"
            className="mt-5 p-1 bg-slate-600 rounded-md"
          />
          <h2 className="font-bold m-4 text-3xl text-center md:text-left">
            Heramientas
          </h2>
        </div>
        <ul className=" py-4 mx-6 flex flex-col md:flex-row flex-wrap justify-between shadow-lg shadow-orange-200 rounded-md">
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <IoLogoVercel size="100" color="black" />
            <h2>vercel</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <SiPostman size="100" color="orange" />
            <h2>Postman</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <SiGithubactions size="100" color="blue" />
            <h2>Gitub Actions</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <FaGitAlt size="100" color="orange" />
            <h2>Git</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center bg-white mb-4 md:mb-0 shadow-md shadow-or">
            <SiFastapi size="100" color="skyblue" />
            <h2>FastAPI</h2>
          </li>
          <li className="  rounded-xl mx-2 py-2 hover:scale-105 hover:transition-all cursor-pointer w-32 hover:shadow-lg hover:shadow-orange-200 shadow-orange-200 justify-items-center  mb-4 md:mb-0 shadow-md shadow-or">
            <SiVite size="100" color="purple" />
            <h2>VITE</h2>
          </li>
        </ul>
        º
      </div>
    </>
  );
};

export default Barra_Tecnologias;
