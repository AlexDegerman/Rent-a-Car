$(function () {
  $('#datetimepicker1').datetimepicker();
});
$(function () {
  $('#datetimepicker2').datetimepicker();
});

function audi() {
  var nimi = document.getElementById("autonnimi");
  var info = document.getElementById("autoinfot");
  var detail = document.getElementById("detail");
  var klass = document.getElementById("autoinfo");
  var bmw = document.getElementById("bmw");
  var genesis = document.getElementById("genesis");
  var lexus = document.getElementById("lexus");
  var benz = document.getElementById("benz");
  var volvo = document.getElementById("volvo");
  var audi = document.getElementById("audi");
  audi.style = "opacity: 100%"
  bmw.style = "opacity: 50%"
  genesis.style = "opacity: 50%"
  lexus.style = "opacity: 50%"
  benz.style = "opacity: 50%"
  volvo.style = "opacity: 50%"
  detail.style = "display: none"
  klass.style = "display: block"
  nimi.innerHTML = "2021 Audi A6";
  info.innerHTML = "infoa"
}
function bmw() {
  var nimi = document.getElementById("autonnimi");
  var info = document.getElementById("autoinfot");
  var detail = document.getElementById("detail");
  var klass = document.getElementById("autoinfo");
  var audi = document.getElementById("audi");
  var genesis = document.getElementById("genesis");
  var lexus = document.getElementById("lexus");
  var benz = document.getElementById("benz");
  var volvo = document.getElementById("volvo");
  var bmw = document.getElementById("bmw");
  bmw.style = "opacity: 100%"
  audi.style = "opacity: 50%"
  genesis.style = "opacity: 50%"
  lexus.style = "opacity: 50%"
  benz.style = "opacity: 50%"
  volvo.style = "opacity: 50%"
  detail.style = "display: none"
  klass.style = "display: block"
  nimi.innerHTML = "2021 BMW 5 Series";
  info.innerHTML = "infoa"
}
function genesis() {
  var nimi = document.getElementById("autonnimi");
  var info = document.getElementById("autoinfot");
  var detail = document.getElementById("detail");
  var klass = document.getElementById("autoinfo");
  var bmw = document.getElementById("bmw");
  var audi = document.getElementById("audi");
  var lexus = document.getElementById("lexus");
  var benz = document.getElementById("benz");
  var volvo = document.getElementById("volvo");
  var genesis = document.getElementById("genesis");
  genesis.style = "opacity: 100%"
  bmw.style = "opacity: 50%"
  audi.style = "opacity: 50%"
  lexus.style = "opacity: 50%"
  benz.style = "opacity: 50%"
  volvo.style = "opacity: 50%"
  detail.style = "display: none"
  klass.style = "display: block"
  nimi.innerHTML = "2021 Genesis G80";
  info.innerHTML = "infoa"
}
function lexus() {
  var nimi = document.getElementById("autonnimi");
  var info = document.getElementById("autoinfot");
  var detail = document.getElementById("detail");
  var klass = document.getElementById("autoinfo");
  var bmw = document.getElementById("bmw");
  var genesis = document.getElementById("genesis");
  var audi = document.getElementById("audi");
  var benz = document.getElementById("benz");
  var volvo = document.getElementById("volvo");
  var lexus = document.getElementById("lexus");
  lexus.style = "opacity: 100%"
  bmw.style = "opacity: 50%"
  genesis.style = "opacity: 50%"
  audi.style = "opacity: 50%"
  benz.style = "opacity: 50%"
  volvo.style = "opacity: 50%"
  detail.style = "display: none"
  klass.style = "display: block"
  nimi.innerHTML = "2021 Lexus ES350";
  info.innerHTML = "infoa"
}
function benz() {
  var nimi = document.getElementById("autonnimi");
  var info = document.getElementById("autoinfot");
  var detail = document.getElementById("detail");
  var klass = document.getElementById("autoinfo");
  var bmw = document.getElementById("bmw");
  var genesis = document.getElementById("genesis");
  var lexus = document.getElementById("lexus");
  var audi = document.getElementById("audi");
  var volvo = document.getElementById("volvo");
  var benz = document.getElementById("benz");
  bmw.style = "opacity: 50%"
  genesis.style = "opacity: 50%"
  lexus.style = "opacity: 50%"
  audi.style = "opacity: 50%"
  volvo.style = "opacity: 50%"
  detail.style = "display: none"
  klass.style = "display: block"
  nimi.innerHTML = "2021 Mercedes Benz E450";
  info.innerHTML = "infoa"
  benz.style = "opacity: 100%"
}
function volvo() {
  var nimi = document.getElementById("autonnimi");
  var info = document.getElementById("autoinfot");
  var detail = document.getElementById("detail");
  var klass = document.getElementById("autoinfo");
  var bmw = document.getElementById("bmw");
  var genesis = document.getElementById("genesis");
  var lexus = document.getElementById("lexus");
  var benz = document.getElementById("benz");
  var audi = document.getElementById("audi");
  var volvo = document.getElementById("volvo");
  bmw.style = "opacity: 50%"
  genesis.style = "opacity: 50%"
  lexus.style = "opacity: 50%"
  benz.style = "opacity: 50%"
  audi.style = "opacity: 50%"
  detail.style = "display: none"
  klass.style = "display: block"
  nimi.innerHTML = "2021 Volvo S90";
  info.innerHTML = "infoa"
  volvo.style = "opacity: 100%"
}