import Button from "../Button/Button";
import "./SectionCar.css"

const SectionCar = ({ titulo, texto, image,classe}) => {
  return (
    <article className={classe}>
      <img src={image} alt="" />
      <h1>{titulo}</h1>
      <p>{texto}</p>
      <Button nome="Learn More" />
    </article>
  );
};

export default SectionCar;
