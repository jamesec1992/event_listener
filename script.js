const paraA = document.getElementById("paraA");
const paraB = document.getElementById("paraB");
const paraC = document.getElementById("paraC");



paraA.addEventListener("click", RespondClick);

paraB.addEventListener("mousemove", RespondMousemove);

paraC.addEventListener("mousedown", RespondMousedown);

paraD.addEventListener("mouseover", RespondMouseover);


function RespondClick() {
  document.getElementById("paraA").innerHTML = ("this, 'Ooops!'");
}

function RespondMousemove() {
  document.getElementById("paraB").innerHTML = ("this, 'Thank You'");
}

function RespondMousedown() {
  document.getElementById("paraC").innerHTML = ("this, 'Release Me'");
}

function RespondMouseover() {
  document.getElementById("paraD").innerHTML = ("this, 'Take the Mouse Out'");
}

