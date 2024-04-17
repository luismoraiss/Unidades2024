const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const Subtitulo = ({ texto, cor }) => {
  return <p style={{ color: cor }}>{texto}</p>;
};

const Cabecalho = (props) => {
  return <h1>{props.children}</h1>;
};

const App = () => {
  return (
    <>
      <Cabecalho>
        <p>Esse é o meu Cabecalho</p>
      </Cabecalho>
      <Titulo cor="blue" texto="Meu Título" />
      <Subtitulo cor="purple" texto="Esse é o subtítulo do meu título" />
      <Titulo cor="red" texto="Esse é o meu outro título" />
      <Titulo texto="Esse é o terceiro título" />
    </>
  );
};

export default App;
