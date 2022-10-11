const $ = (etiqueta) => document.querySelector(etiqueta)

let inputContraseña = $('#contraseña')
let botonGenerador = $('#generadorContraseña')


let arrayCaracteres = []

function numerosEnArray() {
    let arrayNumeros = []
    for (let index = 0; index < 10; index++) {
        arrayNumeros.push(index)
    }
    arrayCaracteres.push(arrayNumeros)
}

function letrasEnArray() {
    let minusculasArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let mayusculasArray = minusculasArray.map((a)=>a.toUpperCase()) //recorre el minusculasArray y las convierte en mayusculas

    arrayCaracteres.push(minusculasArray)
    arrayCaracteres.push(mayusculasArray)
}

function simbolosEnArray() {
    let simbolosArray = ['!', '#', '$', '%', '&', '*', '+', '-',  '/', ':', '<', '=', '>', '?', '@', '^', '_', '~', ]
    arrayCaracteres.push(simbolosArray)
}

function generadorContraseña(cantidadCaracteres = 10) {
    let contraseñaGenerada = ""
    console.log(cantidadCaracteres);

    for (let index = 0; index < cantidadCaracteres; index++) {
        let arrayAleatorio = Math.floor((Math.random() * (arrayCaracteres.length)))
        let caracterAleatorio = Math.floor((Math.random() * arrayCaracteres[arrayAleatorio].length))
        let digitoContraseña = arrayCaracteres[arrayAleatorio][caracterAleatorio]
        contraseñaGenerada+= `${digitoContraseña}`
    }
    inputContraseña.value = contraseñaGenerada
}


numerosEnArray()
letrasEnArray()
simbolosEnArray()

botonGenerador.addEventListener('click', ()=>generadorContraseña())


