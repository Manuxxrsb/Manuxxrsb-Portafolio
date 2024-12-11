import Titulo from "./components/Titulo";
import Barra_Tecnologias from "./components/Barra_Tecnologias";
import About_me from "./components/About_me";

function App() {
  return (
    <>
      <Titulo texto="Manuel Developer Page" edad={34} />
      <About_me />
      <Barra_Tecnologias />
    </>
  );
}

export default App;
