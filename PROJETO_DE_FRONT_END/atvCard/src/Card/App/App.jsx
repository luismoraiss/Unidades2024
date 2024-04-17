import SectionCar from "../SectionCar/SectionCar";
import IconSedan from "../../../image/icon-sedans.svg";
import IconSuv from "../../../image/icon-suvs.svg";
import IconLuxury from "../../../image/icon-luxury.svg";
import "./App.css";

const App = () => {
  return (
    <section className="container">
      <SectionCar
        titulo="SEDANS"
        texto="It is a long established fact that a reader will be 
        distracted by the readable content of a page when looking at 
        itslayout. "
        image={IconSedan}
        classe="sedan"
      />
      <SectionCar
        titulo="SUVS"
        texto="It is a long established fact that a reader will be 
        distracted by the readable content of a page when looking at 
        itslayout. "
        image={IconSuv}
        classe="suv"
      />
      <SectionCar
        titulo="LUXURY"
        texto="It is a long established fact that a reader will be 
        distracted by the readable content of a page when looking at 
        itslayout. "
        image={IconLuxury}
        classe="luxury"
      />
    </section>
  );
};
export default App;
