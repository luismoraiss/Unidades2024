import ButtonModal from "../ButtonModal/ButtonModal";
import Modal from "../Modal/Modal";
import Container from "../container/Container";
import "./app.css";
import React from "react";

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Container>
        <ButtonModal text={"Botão"} setModal={setModal} modal={modal} />
        <Modal modal={modal} texto={"Botão Modal"} />
      </Container>
    </>
  );
};

export default App;
