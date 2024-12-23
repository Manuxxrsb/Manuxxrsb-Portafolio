const About_me = () => {
  return (
    <section>
      <img
        src="dist/image-perfil.png" // Asegúrate de que esta ruta sea correcta
        alt="Mi imagen"
        className="mx-auto rounded-lg w-50 h-50 shadow-2xl m-8"
      />
      <h1 className="text-center font-bold text-3xl">Sobre mi</h1>
      <div className="text-center m-20 shadow-md rounded-md">
        <p>
          Mi nombre es Manuel, y soy un programador en constante crecimiento,
          apasionado por transformar ideas en soluciones tecnológicas que
          impacten positivamente. Cada día, me esfuerzo por perfeccionar mis
          habilidades, explorar nuevas herramientas y afrontar retos que me
          permitan evolucionar tanto profesional como personalmente.
        </p>
      </div>
      <div className="text-center m-20 shadow-md rounded-md">
        <p>
          Desde mis primeros pasos en el mundo de la programación, he encontrado
          en el código una forma de expresión creativa. Para mí, cada proyecto
          es una oportunidad para innovar, desde diseñar arquitecturas
          eficientes hasta crear interfaces intuitivas que conecten con los
          usuarios. Mi compromiso con la mejora continua me lleva a aprender
          nuevas tecnologías y metodologías, manteniéndome siempre un paso
          adelante en un sector en constante cambio
        </p>
      </div>
      <div className="text-center m-20 shadow-md rounded-md">
        <p>
          Creo firmemente que la creatividad es el motor que impulsa las
          soluciones más impactantes. En mi trabajo, combino el análisis lógico
          con una visión fuera de lo común, buscando no solo resolver problemas,
          sino también aportar valor y originalidad a cada desarrollo. Además,
          disfruto colaborando con equipos multidisciplinarios, donde las ideas
          diversas convergen para crear algo único
        </p>
      </div>
    </section>
  );
};
export default About_me;
