let con = document.getElementById('inicioinfo');
let con2 = document.getElementById('contatoinfo');
let con3 = document.getElementById('portfolioinfo');
let con4 = document.getElementById('sobreinfo');

function aftercontato() {
 con.classList.add("opacity");
 con2.classList.remove("opacity");
 con3.classList.add("opacity");
 con4.classList.add("opacity");
}

function backcontato() {
    con.classList.remove("opacity");
    con2.classList.add("opacity");
    con3.classList.add("opacity");
    con4.classList.add("opacity");
   }
   function afterport() {
    con.classList.add("opacity");
    con2.classList.add("opacity");
    con3.classList.remove("opacity");
    con4.classList.add("opacity");
   }
   function backport() {
    con.classList.add("opacity");
    con2.classList.add("opacity");
    con3.classList.add("opacity");
    con4.classList.remove("opacity");
   }