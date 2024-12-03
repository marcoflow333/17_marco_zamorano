function calcularNotaFinal() {
    var notaPrimeraEv = document.getElementById("nota_primera_ev").value;
    console.log("Nota primer input: " + notaPrimeraEv);

    var notaSegundaEv = document.getElementById("nota_segunda_ev").value;
    console.log("Nota segundo input: " + notaSegundaEv);

    var nombre = document.getElementById("nombre").value;

    var divResultado = document.getElementById("resultado");

    var notaFinal = calcularMedia(notaPrimeraEv, notaSegundaEv)
    console.log("Nota media: " + notaFinal)
    if (notaFinal >= 5) {
        divResultado.innerHTML = "APROBADO :)" + nombre + "Tu nota es: " + notaFinal;
        divResultado.style.backgroundColor = "green";
    }

    else {
        divResultado.innerHTML = "Suspenso amego :(" + nombre + "Tu nota es: " + notaFinal;
        divResultado.style.backgroundColor = "red";
    }
}

function calcularMedia(valor1, valor2) {
    return (parseInt(valor1) + parseInt(valor2))/2;
}