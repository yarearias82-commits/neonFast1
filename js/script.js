function toggleMenu(){
    document.getElementById("menu").classList.toggle("activo");
}

function mostrarPromo(){
    alert("¡Promoción especial! Compra hoy y recibe descuento.");
}

function seleccionarBoleto(tipo){
    document.getElementById("boletoSeleccionado").innerHTML =
    "Seleccionaste el boleto: " + tipo;
}

function enviarFormulario(){

    let nombre = document.getElementById("nombre").value;

    let tipo = document.getElementById("tipo").value;

    document.getElementById("respuesta").innerHTML =
    "Gracias " + nombre + ", tu registro para boleto " + tipo + " fue exitoso.";
}
