import Titulo from "./components/Titulo";
import Barra_Tecnologias from "./components/Barra_Tecnologias";
import About_me from "./components/About_me";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Titulo texto="Manuel Developer Page" edad={34} />
      <About_me />
      <Barra_Tecnologias />
    </>
  );
}

export default App;
