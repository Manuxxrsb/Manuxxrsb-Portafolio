interface TituloProps {
  texto: string;
  edad?: number; //El signo de interrogacion indica que es opcional
}

const Titulo = (contenido: TituloProps) => {
  //Podemos destructurarlo para saber que contiene el proops
  const { texto, edad } = contenido;

  //Otra forma de hacerlo es directamente en el return como si fuese un objeto en la linea 13
  return (
    <div>
      <h1>{texto}</h1>
      <h2>{contenido.texto}</h2>
      <p>edad: {edad}</p>
    </div>
  );
};

export default Titulo;
