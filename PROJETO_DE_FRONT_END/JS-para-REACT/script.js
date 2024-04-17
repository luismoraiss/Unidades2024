//Destructuring

function MouseMove(event) {
  const clientY = event.clientY;
  const clientX = event.clientX;
  console.log(clientX, clientY);
}

const MouseMoving = (event) => {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
};

const MouseHandle = ({ clientX, clientY }) => console.log(clientX, clientY);

document.documentElement.addEventListener("mousemove", MouseMove);
