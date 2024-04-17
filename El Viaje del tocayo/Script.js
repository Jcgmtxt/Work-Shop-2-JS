const destino = prompt("Ingrese du desetino")

let diasViaje = parseInt(prompt("Ingrese el numero de dias que desea desea viajar"))
let presupuesto = parseFloat(prompt("Ingrese el presupuesto para su viaje"))
let valDiaComida = parseFloat(prompt("Ingrese el valor que sea va a tragar en un dia"))
let valDiaOcio = parseFloat(prompt("Ingrese el valor que sea gastar en parchar"))
let valorViaje = (diasViaje*valDiaComida)+(diasViaje*valDiaOcio);

if (valorViaje > presupuesto){
    alert("Viejo estas titando el chorro muy alto redefinamos algo")
    alert("Tenemos que redefinir algo sea disminuir dias aumentar presupuesto, o mover los gastos")
    bandera = confirm("Desea cambiar el numero los dias?")
    if(bandera){
        diasViaje = parseInt(prompt("Ingrese el numero de dias que desea desea viajar"))
    }

    bandera = confirm("Desea cambiar el numero el presupuesto?")
    if(bandera){
        presupuesto = parseFloat(prompt("Ingrese su nuevo presupuesto"))
    }

    bandera = confirm("Desea cambiar el gasto diario en comida?")
    if(bandera){
        valDiaComida = parseFloat(prompt("Ingrese su nuevo gasto diario en comida"))
    }

    bandera = confirm("Desea cambiar el gasto diario en cio?")
    if(bandera){
        valDiaOcio = parseFloat(prompt("Ingrese su nuevo gasto diario en Ocio"))
    }
    
}
else if (presupuesto > valorViaje){
    alert(`Su presupuesto es mayor al valor del viaje y eos es bueno`)
}

else if (presupuesto === valorViaje ){
    alert("Eres un maestro de la las finanzas y el presupuesto y el costo son iguales")
}
else{
    alert("Algo salio mal")
}