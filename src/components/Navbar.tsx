import { HouseIcon } from "lucide-react";
import { GrProjects } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar bg-white p-4 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-black text-2xl font-bold">
            Manuxxrsb Portafolio
          </h1>
          <button className="block md:hidden text-black" onClick={toggleMenu}>
            ☰
          </button>
          <ul
            className={`flex-col md:flex-row md:flex space-x-4 items-start md:items-center space-between ${
              isOpen ? "flex" : "hidden"
            } md:space-y-0 space-y-4 md:space-x-4`}
          >
            <li className="m-4 p-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition duration-300 flex flex-row items-center cursor-pointer">
              <HouseIcon size={24} />
              <Link to="/" className="ml-1">
                Home
              </Link>
            </li>
            <li className="m-4 p-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition duration-300 flex flex-row items-center cursor-pointer">
              <GrProjects size={24} />
              <Link to="/projects" className="ml-1.5">
                Proyectos
              </Link>
            </li>
            <li className="m-4 p-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition duration-300 flex flex-row items-center cursor-pointer">
              <IoPersonOutline size={24} />
              <Link to="/aboutme" className="ml-1">
                Sobre mi
              </Link>
            </li>
            <li className="m-4 p-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition duration-300 flex flex-row items-center cursor-pointer">
              <LiaToolsSolid />
              <Link to="/barra_tecnologias" className="ml-1">
                Tecnologías
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-16">{/* Contenido principal aquí */}</div>
    </>
  );
};

export default Navbar;
