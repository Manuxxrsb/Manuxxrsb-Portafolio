import { HouseIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-white p-4 shadow-lg fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-black text-2xl font-bold">
            Manuxxrsb Portafolio
          </h1>
          <ul className="flex space-x-4">
            <li className="m-4 p-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition duration-300">
              <Link to="/">
                <HouseIcon size={24} />
              </Link>
            </li>
            <li className="m-4 p-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition duration-300">
              <Link to="/projects">Proyectos</Link>
            </li>
            <li className="m-4 p-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition duration-300">
              <Link to="/aboutme">Sobre mi</Link>
            </li>
            <li className="m-4 p-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition duration-300">
              <Link to="/barra_tecnologias">Conoce mis tecnologías</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-16">{/* Contenido principal aquí */}</div>
    </>
  );
};

export default Navbar;
