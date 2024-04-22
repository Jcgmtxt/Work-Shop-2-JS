//Funcion validafroa
function validarNumero(valor) {
    return typeof valor === "number" && !isNaN(valor) && valor > 0;
}


//Caputura de datos.
const presupuestoDiario = Number(prompt("Ingrese su presupuesto diario"))
const comida = Number(prompt("Ingrese el valor diario de la comida"))
const libros = Number(prompt("Ingrese del libro deseado"))
const valorAhorro = Number(prompt("Ingrese el valor que desea ahorrar"))

if (validarNumero(presupuestoDiario) && validarNumero(comida) && validarNumero(libros) && validarNumero(valorAhorro)) {
    console.log("Todos los datos son válidos.");
} else {
    console.log("Hay un número incorrecto.");
    location.reload(true)
}

const ingresoDisponible = presupuestoDiario - valorAhorro

if (ingresoDisponible > comida && ingresoDisponible > libros){
    alert("Puedes hacer ambos gastos y ahorrar")
} else if (ingresoDisponible > comida || ingresoDisponible > libros){
    if(ingresoDisponible > comida){
        alert("Puedes comprar comida y ahorrar")
    } else {
        alert("Puedes comprar comida y ahorrar")
    }
} else {
    alert("No alcanza para nada :c, la inflacion esta muy dura mano")
}