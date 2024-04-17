const Modal = ({ modal, setModal }) => {
  if (modal === true) {
    return (
      <div>
        Este é um modal!
        <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
