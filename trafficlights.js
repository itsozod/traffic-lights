let restart = false;
let countRed = 5;
let countGreen = 6;
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let divRed = document.querySelector(".red");
let divGreen = document.querySelector(".green");
divRed.innerHTML = countRed;
divGreen.innerHTML = countGreen;
divRed.style.background = "red";
divGreen.style.background = "black";

startBtn.onclick = () => {
  count();
  restart = false;
  console.log("Go!!!");
  startBtn.disabled = true;
};
function count() {
  const countLights = setInterval(() => {
    if (restart) {
      clearInterval(countLights);
      return;
    }
    if (countRed === 0) {
      divRed.style.background = "black";
      divGreen.style.background = "green";
      greenLight();
      updateCarMovementsForward();
      if (countGreen === 0) {
        countGreen = 6;
        divGreen.innerHTML = countGreen;
        divGreen.style.background = "black";
        updateCarMovementsBack();

        countRed = 5;
        divRed.innerHTML = countRed;
        divRed.style.background = "red";
      }
    } else {
      redLight();
    }
  }, 1000);
}

stopBtn.onclick = () => {
  console.log("Yooo stop!");
  restart = true;

  countGreen = 6;
  divGreen.innerHTML = countGreen;
  divGreen.style.background = "black";

  countRed = 5;
  divRed.innerHTML = countRed;
  divRed.style.background = "red";
  updateCarMovementsBack();
  startBtn.disabled = false;
};

function redLight() {
  countRed--;
  divRed.innerHTML = countRed;
}
function greenLight() {
  countGreen--;
  divGreen.innerHTML = countGreen;
}

function updateCarMovementsForward() {
  let root = document.documentElement;

  setTimeout(() => {
    root.style.setProperty("--left", "-200px");
  }, 1000);
}

function updateCarMovementsBack() {
  let root = document.documentElement;

  setTimeout(() => {
    root.style.setProperty("--left", "60px");
  }, 1000);
}
