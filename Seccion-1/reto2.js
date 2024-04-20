let listSouvenirs = []

let souvenirs = {
    name: undefined,
    price: undefined,
    availability: undefined,
}

function ingresarSouvenirs(){
    alert("Ahora vamos a crear souvenirs")

    souvenirs.name = prompt("Ingrese el nombre del souvenir")
    souvenirs.price = parseFloat(prompt("Ingrese el precio del souvenir"))
    souvenirs.availability = confirm("¿Esta disponible el souvenir?")

    verificadorDatos()

    listSouvenirs.push(souvenirs)

    tryAgain = confirm("¿Deseas ingresar otro souvenir?")
    if(tryAgain){
        ingresarSouvenirs()
    }
}

function verificadorDatos(){
    let text = " "
    let num = 1.0
    let bool = true

     let recipiente = souvenirs.price

    if(isNaN(recipiente)){
        alert("El objeto no es valido")
        restSouvenirs()
    }
    else if ( typeof(souvenirs.name)===typeof(text) && typeof(souvenirs.price)==typeof(num) && typeof(souvenirs.availability)===typeof(bool)){
        alert("El objeto fue creado correctamente")
    }
    else{
        alert("El objeto no es valido")
        restSouvenirs()
    }
}

function restSouvenirs (){
    souvenirs.name = undefined
    souvenirs.price= undefined
    souvenirs.availability = undefined
    return ingresarSouvenirs()
}

ingresarSouvenirs()
console.log(listSouvenirs)