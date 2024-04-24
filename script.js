var defaultBtn = document.getElementById("default-btn");
var pythBtn = document.getElementById("pyth-btn");
var tempBtn = document.getElementById("temp-btn");
var trapeBtn = document.getElementById("trape-btn");
var colourBtn = document.getElementById("colour-btn");
var physicsBtn = document.getElementById("physics-btn");
var calcMessage = document.getElementById("pick");

defaultBtn.addEventListener("click", deFault);

function deFault() {
  document.documentElement.style.background = `url(images/math.jpg)`;
  calcMessage.innerHTML = `CHOOSE YOUR CALCULATOR`;
}

pythBtn.addEventListener("click", pythagoream);

function pythagoream() {
  document.documentElement.style.background = `url(images/pythagoras.jpg) no-repeat`;
  document.documentElement.style.backgroundSize = `cover`;
  calcMessage.innerHTML = `Oh my god it's him!`;
}

tempBtn.addEventListener("click", temperature);

function temperature() {
  document.documentElement.style.background = `url(images/temperature.jpg)`;
  document.documentElement.style.backgroundSize = `cover`;
  calcMessage.innerHTML = `I perfer Winter over Summer imao`;
}

trapeBtn.addEventListener("click", trapezoid);

function trapezoid() {
  document.documentElement.style.background = `url(images/trapezoid.png)`;
  calcMessage.innerHTML = `A trapezoid is just a semi-hexagon`;
}

colourBtn.addEventListener("click", colour);

function colour() {
  document.documentElement.style.background = `url(images/UV.jpg)`;
  calcMessage.innerHTML = `POV you're playing earthbound:`;
}

physicsBtn.addEventListener("click", physics);

function physics() {
  document.documentElement.style.background = `url(images/physics.jpg) no-repeat`;
  document.documentElement.style.backgroundSize = `cover`;
  calcMessage.innerHTML = `I'm gonna lose braincells after this`;
}
