function calcularIMC() {

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");

    if (peso === "" || altura === "") {
        resultado.innerHTML = "Ingrese todos los datos";
        return;
    }

    let imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    let estado = "";

    if (imc < 18.5) {
        estado = "Bajo peso";
    } 
    else if (imc >= 18.5 && imc < 25) {
        estado = "Peso normal";
    } 
    else if (imc >= 25 && imc < 30) {
        estado = "Sobrepeso";
    } 
    else if (imc >= 30 && imc < 40) {
        estado = "Obesidad";
    } 
    else {
        estado = "Obesidad mórbida";
    }

    resultado.innerHTML = `Tu IMC es ${imc} - ${estado}`;
}
