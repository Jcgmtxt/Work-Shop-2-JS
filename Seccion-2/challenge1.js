
// Captura de datos
const nivelEnergia = Number(prompt("¿Cuál es tu nivel de energía? (Ingresa un número o deja vacío para null)"))
const clima = Number(prompt("¿Cómo está el clima hoy? (Ingresa 1 para bueno y 0 o deja vacio para malo )"))
const cargaDeTrabajo = Number(prompt("¿Cuál es tu carga de trabajo actual? (Ingresa un número o cualquier otro valor)"))

// Evaluar condiciones
if (!clima && !nivelEnergia && !cargaDeTrabajo) {
    alert("Hoy es el dia perfecto para descansar")
} else if (!nivelEnergia && !clima) {
    alert("Hoy tomaré un día libre.")
} else if (!clima && nivelEnergia && cargaDeTrabajo) {
    alert("Deberiamos trabajar")
} else if (clima && nivelEnergia) {
    alert ("Debes ir a correr")
} else {
    alert("No se que poner")
}