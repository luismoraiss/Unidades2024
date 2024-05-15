import { styled } from "styled-components";
import "./App.css";



const Titulo = styled.h1`
  color: hsl(158, 36%, 37%);
  width: 200px;
`;

const Section = styled.form`
  width: 800px;
  height: 600px;
  display: flex;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
`;

const DivImg = styled.div`
  width: 400px;
  height: 600px;
  background-image: url(../../images/image-product-desktop.jpg);
  overflow: hidden;
  background-size: cover;
  border-radius: 10px 0 0 10px;
`;

const Form = styled.form`
  width: 300px;
  height: 500px;
  border: 2px solid black;
  border-radius: 0 10px 10px 0;
  margin: 50px;
  display: flex;
  flex-direction: column;
 
`;

const P = styled.p`
  font-family: "Montserrat", sans-serif;
  color: hsl(228, 12%, 48%);
  
`;

const Perfume = styled.p`
letter-spacing: 7px;
font-family: "Montserrat", sans-serif;
  color: hsl(228, 12%, 48%);
  
`

const Paragrafo = styled.p`

  font-family: "Montserrat", sans-serif;
  color: hsl(228, 12%, 48%);
  font-size: 18px;
  width: 240px;

`;

const DivValor = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
`;

const Button = styled.button`
  height: 60px;
  width: 100%;
  background-color: hsl(158, 36%, 37%); 
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border:none;
`;

const App = () => {
  return (
    <Section>
      <DivImg></DivImg>
      <Form>
        <Perfume>PERFUME</Perfume>
        <Titulo>Gabrielle Essence Eau De Parfum</Titulo>
        <Paragrafo>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL
        </Paragrafo>
        <DivValor>
          <Titulo>$149,99</Titulo>
          <P>
            <strike>$169,99</strike>
          </P>
        </DivValor>
        <Button><img src="../../images/icon-cart.svg"/> Add to card</Button>
      </Form>
    </Section>
  );
};

export default App;
