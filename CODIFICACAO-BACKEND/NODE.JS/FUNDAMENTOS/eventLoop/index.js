function a() {
  console.log("Executamos a função A()");
}
function b() {
  console.log("Executamos a função B()");
}
function c() {
  console.log("Executamos a função C()");
  a();
  b();
}

a();
b();
c();
