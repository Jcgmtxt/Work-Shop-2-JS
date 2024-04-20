

//Caputamos las variables

let presupuesto = parseFloat(prompt("Igrese el monto presuspuestado para su viaje"))

let alojamiento = parseFloat(prompt("Igrese el monto que desea gastar en entretenimiento"))
let comida = parseFloat(prompt("Igrese el monto que desea gastar en comida"))
let transporte = parseFloat(prompt("Igrese el monto que desea gastar en transporte"))
let entretenimiento = parseFloat(prompt("Igrese el monto que desea gastar en entretenimiento"))
let gastosTotales = alojamiento+comida+transporte+entretenimiento

alert("El umbral del 10% de presumpiesto")

const umbral = presupuesto*0.1

if ( gastosTotales > presupuesto){
    alert("Aprende a cuadrar presupuestos")
}
else if((presupuesto-gastosTotales)>0){
    alert("Puedes incluir un regalo en tu maleta")
}


// listaSouvenirs = []

// while(true){

// }