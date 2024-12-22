import Barra_Tecnologias from "./components/Barra_Tecnologias";
import About_me from "./components/About_me";
import Header from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GitHubProjects from "./components/Github-proyects";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About_me />} />
          <Route path="/barra_tecnologias" element={<Barra_Tecnologias />} />
          <Route path="/projects" element={<GitHubProjects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
