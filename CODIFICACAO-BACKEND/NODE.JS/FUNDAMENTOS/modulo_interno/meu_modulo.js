module.exports = {
  soma(a, b) {
    console.log(`${a + b}`);
  },
  aoQuadrado(a) {
    console.log(`${a * a}`);
  },
  subtracaoc(a, b) {
    console.log(`${a - b}`);
  },
  divisao(a, b) {    
    if (b <= 0) {
      console.log("O divisor tem que ser maior que 0");
      return;
    } else {
      console.log(`${a / b}`);
    }
  },
  mult(a, b) {
    console.log(`${a * b}`);
  },
};
