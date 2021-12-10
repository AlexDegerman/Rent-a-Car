function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = Object.fromEntries(data.entries());
  const myJSON = JSON.stringify(value);
  console.log(myJSON);
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function audi() {
  document.getElementById("autonnimi").classList.remove("hidden");
  document.getElementById("auditable").classList.remove("hidden");
  document.getElementById("bmwtable").classList.add("hidden");
  document.getElementById("genesistable").classList.add("hidden");
  document.getElementById("lexustable").classList.add("hidden");
  document.getElementById("benztable").classList.add("hidden");
  document.getElementById("volvotable").classList.add("hidden");
  document.getElementById("detail").style = "display: none";
  var nimi = (document.getElementById("autonnimi").innerHTML = "2021 Audi A6");
  var info = (document.getElementById("autoinfot").innerHTML = "infoa");
  var klass = (document.getElementById("autoinfo").style = "display: block");
  var bmw = (document.getElementById("bmw").style = "opacity: 50%");
  var genesis = (document.getElementById("genesis").style = "opacity: 50%");
  var lexus = (document.getElementById("lexus").style = "opacity: 50%");
  var benz = (document.getElementById("benz").style = "opacity: 50%");
  var volvo = (document.getElementById("volvo").style = "opacity: 50%");
  var audi = (document.getElementById("audi").style = "opacity: 100%");
}
function bmw() {
  document.getElementById("autonnimi").classList.remove("hidden");
  document.getElementById("auditable").classList.add("hidden");
  document.getElementById("bmwtable").classList.remove("hidden");
  document.getElementById("genesistable").classList.add("hidden");
  document.getElementById("lexustable").classList.add("hidden");
  document.getElementById("benztable").classList.add("hidden");
  document.getElementById("volvotable").classList.add("hidden");
  var nimi = (document.getElementById("autonnimi").innerHTML =
    "2021 BMW 5 Series");
  var info = (document.getElementById("autoinfot").innerHTML = "infoa");
  document.getElementById("detail").style = "display: none";
  var klass = (document.getElementById("autoinfo").style = "display: block");
  var bmw = (document.getElementById("bmw").style = "opacity: 100%%");
  var genesis = (document.getElementById("genesis").style = "opacity: 50%");
  var lexus = (document.getElementById("lexus").style = "opacity: 50%");
  var benz = (document.getElementById("benz").style = "opacity: 50%");
  var volvo = (document.getElementById("volvo").style = "opacity: 50%");
  var audi = (document.getElementById("audi").style = "opacity: 50%");
}
function genesis() {
  document.getElementById("autonnimi").classList.remove("hidden");
  document.getElementById("auditable").classList.add("hidden");
  document.getElementById("bmwtable").classList.add("hidden");
  document.getElementById("genesistable").classList.remove("hidden");
  document.getElementById("lexustable").classList.add("hidden");
  document.getElementById("benztable").classList.add("hidden");
  document.getElementById("volvotable").classList.add("hidden");
  document.getElementById("detail").style = "display: none";
  var nimi = (document.getElementById("autonnimi").innerHTML =
    "2021 Genesis G80");
  var info = (document.getElementById("autoinfot").innerHTML = "infoa");
  var klass = (document.getElementById("autoinfo").style = "display: block");
  var bmw = (document.getElementById("bmw").style = "opacity: 50%");
  var genesis = (document.getElementById("genesis").style = "opacity: 100%");
  var lexus = (document.getElementById("lexus").style = "opacity: 50%");
  var benz = (document.getElementById("benz").style = "opacity: 50%");
  var volvo = (document.getElementById("volvo").style = "opacity: 50%");
  var audi = (document.getElementById("audi").style = "opacity: 50%");
}
function lexus() {
  document.getElementById("autonnimi").classList.remove("hidden");
  document.getElementById("auditable").classList.add("hidden");
  document.getElementById("bmwtable").classList.add("hidden");
  document.getElementById("genesistable").classList.add("hidden");
  document.getElementById("lexustable").classList.remove("hidden");
  document.getElementById("benztable").classList.add("hidden");
  document.getElementById("volvotable").classList.add("hidden");
  document.getElementById("detail").style = "display: none";
  var nimi = (document.getElementById("autonnimi").innerHTML =
    "2021 Lexus ES350");
  var info = (document.getElementById("autoinfot").innerHTML = "infoa");
  var klass = (document.getElementById("autoinfo").style = "display: block");
  var bmw = (document.getElementById("bmw").style = "opacity: 50%");
  var genesis = (document.getElementById("genesis").style = "opacity: 50%");
  var lexus = (document.getElementById("lexus").style = "opacity: 100%");
  var benz = (document.getElementById("benz").style = "opacity: 50%");
  var volvo = (document.getElementById("volvo").style = "opacity: 50%");
  var audi = (document.getElementById("audi").style = "opacity: 50%");
}
function benz() {
  document.getElementById("autonnimi").classList.remove("hidden");
  document.getElementById("auditable").classList.add("hidden");
  document.getElementById("bmwtable").classList.add("hidden");
  document.getElementById("genesistable").classList.add("hidden");
  document.getElementById("lexustable").classList.add("hidden");
  document.getElementById("benztable").classList.remove("hidden");
  document.getElementById("volvotable").classList.add("hidden");
  document.getElementById("detail").style = "display: none";
  var nimi = (document.getElementById("autonnimi").innerHTML =
    "2021 Mercedes Benz E450");
  var info = (document.getElementById("autoinfot").innerHTML = "infoa");
  var klass = (document.getElementById("autoinfo").style = "display: block");
  var bmw = (document.getElementById("bmw").style = "opacity: 50%");
  var genesis = (document.getElementById("genesis").style = "opacity: 50%");
  var lexus = (document.getElementById("lexus").style = "opacity: 50%");
  var benz = (document.getElementById("benz").style = "opacity: 100%");
  var volvo = (document.getElementById("volvo").style = "opacity: 50%");
  var audi = (document.getElementById("audi").style = "opacity: 50%");
}
function volvo() {
  document.getElementById("autonnimi").classList.remove("hidden");
  document.getElementById("auditable").classList.add("hidden");
  document.getElementById("bmwtable").classList.add("hidden");
  document.getElementById("genesistable").classList.add("hidden");
  document.getElementById("lexustable").classList.add("hidden");
  document.getElementById("benztable").classList.add("hidden");
  document.getElementById("volvotable").classList.remove("hidden");
  document.getElementById("detail").style = "display: none";
  var nimi = (document.getElementById("autonnimi").innerHTML =
    "2021 Volvo S90");
  var info = (document.getElementById("autoinfot").innerHTML = "infoa");
  var klass = (document.getElementById("autoinfo").style = "display: block");
  var bmw = (document.getElementById("bmw").style = "opacity: 50%");
  var genesis = (document.getElementById("genesis").style = "opacity: 50%");
  var lexus = (document.getElementById("lexus").style = "opacity: 50%");
  var benz = (document.getElementById("benz").style = "opacity: 50%");
  var volvo = (document.getElementById("volvo").style = "opacity: 100%");
  var audi = (document.getElementById("audi").style = "opacity: 50%");
}
