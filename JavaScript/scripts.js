imprime("Boa", true)
imprime("Noite")

let nome = "Zuleika"
let idade = 48
let altura = 1.50
let casada = false

imprime(nome, true)
imprime("Idade: " + idade)

let sobrenome = "Farias" 

imprime(nome + " " + sobrenome)


function imprime(texto, limpar) {

    let caixa = document.getElementById("caixa")

    if (limpar==true) {
        caixa.innerHTML = ""
    }

    caixa.innerHTML += texto + "<br />"
}

function programa {}