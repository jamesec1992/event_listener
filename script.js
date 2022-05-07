const paraA = document.getElementById("paraA");
const paraB = document.getElementById("paraB");
const paraC = document.getElementById("paraC");
const paraD = document.getElementById("paraD");


paraA.addEventListener("click", AcceptClick);

paraB.addEventListener("mousemove", AcceptMousemove);

paraC.addEventListener("mousedown", AcceptMousedown);

paraD.addEventListener("mouseover", AcceptMouseover);


function AcceptClick() {
  document.getElementById("paraA").innerHTML = ("this", 'Ooops!');
}

function AcceptMousemove() {
  document.getElementById("paraB").innerHTML = ("this", 'Thank You');
}

function AcceptMousedown() {
  document.getElementById("paraC").innerHTML = ("this", 'Release Me');
}

function AcceptMouseover() {
  document.getElementById("paraD").innerHTML = ("this", 'Take the Mouse Out');
}



