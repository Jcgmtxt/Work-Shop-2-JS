let listSouvenirs = []

let souvenirs = {
    name: undefined,
    price: undefined,
    availability: undefined,
}

function ingresarSouvenirs(){
    alert("Ahora vamos a crear souvenirs")

    souvenirs.name = prompt("Ingrese el nombre del souvenir")
    souvenirs.price = Number(prompt("Ingrese el precio del souvenir"))
    souvenirs.availability = confirm("¿Esta disponible el souvenir?")

    verificadorDatos(souvenirs)

    listSouvenirs.push(souvenirs)

    tryAgain = confirm("¿Deseas ingresar otro souvenir?")
    if(tryAgain){
        ingresarSouvenirs()
    }
}

function verificadorDatos(objeto){
    let text = " "
    let num = 1.0
    let bool = true

    if ( typeof(objeto.name)===typeof(text) && typeof(objeto.price)==typeof(num) && typeof(objeto.availability)===typeof(bool)){
        alert("El objeto fue creado correctamente")
    }
    else{
        alert("El objeto no es valido")
        // resetSouvenirs(souvenirs)
    }
}

// resetSouvenirs()

ingresarSouvenirs()