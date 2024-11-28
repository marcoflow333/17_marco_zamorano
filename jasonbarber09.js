/*var nombre = prompt("Dime tu nombre tete");
var instituto = prompt("Nombre del instituto");
document.write("<table border=\"1\"><tr><th>Nombre</th><th>Instituto</th></tr>");
console.log(nombre);
document.write("<tr><td>" + nombre + "</td><td>" + instituto + "</td></tr></table>");

var nota1 = 5;
var nota2 = 4;
var nototal1= nota1 + nota2;
var notamedia = (nota1 + nota2) / 2;*/

/* function mostrarfecha(){
    var now = Date();
    console.log("Ahora son:"+ now);
    alert("Ahora son las:"+ now);
    document.write("<h1>" + now + "<h1>");
}
document.getElementById("yoyas").onclick = () => {
    console.log("Click sobre el boton yoyas...");
    mostrarfecha();
}
var micaja = document.getElementById("micaja");
micaja.onmouseover = () => {
micaja.style.backgroundColor = "Red";
micaja.style.fontSize = "40px";
}

micaja.onmouseleave = () => {
    micaja.innerHTML = "Hasta luego";
} */


document.getElementById("micaja").style.fontSize = "10px";


function changeFontSize() {
    var micaja = document.getElementById("micaja");
    var fontsizemicaja = micaja.style.fontSize;
    console.log("mi caja font size" + fontsizemicaja);

    if (fontsizemicaja == "10px") 
    {
        micaja.style.fontSize = "12px";
    }
    else if (fontsizemicaja == "12px")
    {
        micaja.style.fontSize = "14px";
    } 
    else {
        micaja.style.fontSize = "10px";
    }
}

var cambiotamaño = document.getElementById("cambiotamaño");
cambiotamaño.onclick = () => {
    changeFontSize();
}