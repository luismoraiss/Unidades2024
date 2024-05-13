import { styled } from "styled-components";
import "./App.css";

const Titulo = styled.h1`
  color: hsl(179, 62%, 43%);
`;
const Subtitulo = styled.h3`
  color: hsl(71, 73%, 54%);
`;

const App = () => {
  return (
    <section className="container">
        <div className="img">
            
        </div>
      <form>
       <p>PERFUME</p>
       <h1>Gabrielle Essence Eau De Parfum</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi, ab assumenda necessitatibus, animi.</p>
       <div id="valor">
       <h1>$149,99</h1>
       <p><strike>$galeguinho pao com ovo</strike></p>
       </div>

      </form>
    </section>
  );
};

export default App;
