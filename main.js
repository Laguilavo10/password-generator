const $ = (etiqueta) => document.querySelector(etiqueta)

let inputContraseña = $('#contraseña')
let botonGenerador = $('#generadorContraseña')
let arrayCaracteres = []

let inputRango = $('#input-rango')
let recargar = $('#recargar-pass')
let btnCopiado = $('.copiar-pass')
let msjCopiado = $('.copiado')

btnCopiado.onclick = ()=>{

    console.log(inputContraseña.value)
    inputContraseña.select()
    document.execCommand('copye')
    msjCopiado.classList.add('visible')
    setTimeout(() => {
        msjCopiado.classList.remove('visible')
    }, 5000);
}

inputRango.onchange = ()=>{
    let cantidadCaracteres = $('#valor-rango')
    cantidadCaracteres.innerText = inputRango.value
}

inputRango.onchange()


function numerosEnArray() {
    let arrayNumeros = []
    for (let index = 0; index < 10; index++) {
        arrayNumeros.push(index)
    }
    arrayCaracteres.push(arrayNumeros)
}

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
    let simbolosArray = ['!', '#', '$', '%', '&', '*', '+', '-', '=', '?', '@', '_' ]
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
    console.log(arrayCaracteres);
}


botonGenerador.addEventListener('click', ()=>{
    let cantidadCaracteres = $('#input-rango').value
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





