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

// function letrasEnArray() {
//     let minusculasArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     let mayusculasArray = minusculasArray.map((a)=>a.toUpperCase()) //recorre el minusculasArray y las convierte en mayusculas

//     arrayCaracteres.push(minusculasArray)
//     arrayCaracteres.push(mayusculasArray)
// }

function minusculasEnArray() {
    let minusculasArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    arrayCaracteres.push(minusculasArray)
}
function mayusculasEnArray() {
    let minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let mayusculasArray = minusculas.map((a)=>a.toUpperCase()) //recorre el minusculasArray y las convierte en mayusculas

    arrayCaracteres.push(mayusculasArray)
}

function simbolosEnArray() {
    let simbolosArray = ['!', '#', '$', '%', '&', '*', '+', '-',  '/', ':', '<', '=', '>', '?', '@', '^', '_', '~', ]
    arrayCaracteres.push(simbolosArray)
}

function generadorContraseña({cantidadCaracteres, numeros, minusculas, mayusculas, simbolos}) {
    arrayCaracteres = []

    if (cantidadCaracteres > 25) {
        cantidadCaracteres = 12
    }
    if (numeros) {
        numerosEnArray()
    }
    if (minusculas) {
        minusculasEnArray()
    }
    if (mayusculas) {
        mayusculasEnArray()
    }
    if (simbolos) {
        simbolosEnArray()
    }

    if (arrayCaracteres.length === 0) { //En caso de no tener nincun checkbox usar las letras 
        minusculasEnArray()
        mayusculasEnArray()
    }

    let contraseñaGenerada = ""

    for (let index = 0; index < cantidadCaracteres; index++) {
        let arrayAleatorio = Math.floor((Math.random() * (arrayCaracteres.length)))
        let caracterAleatorio = Math.floor((Math.random() * arrayCaracteres[arrayAleatorio].length))
        let digitoContraseña = arrayCaracteres[arrayAleatorio][caracterAleatorio]
        contraseñaGenerada+= `${digitoContraseña}`
    }
    inputContraseña.value = contraseñaGenerada
}





botonGenerador.addEventListener('click', ()=>{
    let cantidadCaracteres = $('.cantidad-caracteres').value
    let isNumerosOk = $('.numerosOK').checked
    let isMinusculasOk = $('.minusculasOK').checked
    let isMayusculasOk = $('.mayusculasOK').checked
    let isSimbolosOk = $('.simbolosOK').checked
    generadorContraseña({
        cantidadCaracteres: cantidadCaracteres,
        numeros:isNumerosOk,
        minusculas: isMinusculasOk,
        mayusculas: isMayusculasOk,
        simbolos: isSimbolosOk,
    })}
    )


