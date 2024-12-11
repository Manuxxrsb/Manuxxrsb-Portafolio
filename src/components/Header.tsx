const Header = () => {
  return (
    <header>
      <div className="border-2 border-red-500">
        <h1 className="border-2 border-black">Manuxxrsb Portafolio</h1>
        <nav>
          <ul className="flex flex-row-reverse">
            <li className="m-4 p-2 border-black border-2 rounded-md">
              <a href="#contact">Contactame</a>
            </li>
            <li className="m-4 p-2 border-black border-2 rounded-md">
              <a href="#projects">Proyectos</a>
            </li>

            <li className="m-4 p-2 border-black border-2 rounded-md">
              <a href="#about">Sobre mi</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
