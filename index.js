//------------------------------> REVISÃO <-------------------------------

//============================  Exercicío 1  ==============================

// const nomeDoProduto = prompt("Insira o nome do produto")
// let precoDoProduto = Number (prompt("Insira o preço do produto"))
// precoDoProduto = precoDoProduto -1

// console.log(`O produto ${nomeDoProduto} custa R$${precoDoProduto}`)

//============================  Exercicio 2 =================================

// let num1 = Number (prompt("Insira um número:"))
// let num2 = Number (prompt("Insira outro número:"))

// console.log(`Seus números são: num1 = ${num1} e num2 = ${num2}`)
// console.log("Soma =", num1 + num2)
// console.log("Subtração =", num1 - num2)
// console.log("Multiplicação =", num1 * num2)
// console.log("Divisão =", num1 / num2)
// console.log("Resto da divisão =", num1 % num2)

//============================ Exercicio 3 =====================================

// const numeroSorteado = Math.floor(Math.random() * 10) + 1
// const numeroRecebido = Number (prompt("Inrira um número de 1 a 10:"))

// console.log(`O número sorteado foi: ${numeroSorteado}`)

// if (numeroRecebido === numeroSorteado) {
//     console.log("Seu número é igual ao número sorteado!")
// } else if (numeroRecebido > numeroSorteado) {
// console.log("Seu número é maior do que o número sorteado")
// } else {
//     console.log("Seu número é menor do que o sorteado!")
// }

//============================ Exercicio 4 =========================================

// const idade = Number (prompt("Digite sua idade:"))
// const altura = prompt("Digite sua altura em centímetros:")
// const problemaCardiaco = prompt("Você tem algum problema cardíaco? S/N")

// if (idade >= 18 && altura >= 160 && problemaCardiaco === "N") {
//     console.log("Pode entrar")
// } else {
//     console.log("Não pode entrar")
// }

//============================ Exercicio 5 ==============================

// const frase = "  Hoje eu vou comer cenoura ebaaa  "

// console.log(frase, frase.length) //conta quantas letras tem a frase/string
// console.log(frase.trim(), frase.length) // tira os espaços do inicio e fim
// console.log(frase.toLocaleLowerCase()) // deixa todas as letras em minúsculo
// console.log("Tem a palavra comer?", frase.includes("comer")) // retorna um booleano pra saber se a palavra existe ou não.
// console.log("Tem a palavra batata?", frase.includes("batata"))

// const novaFrase = frase.replaceAll("cenoura", "batata") // troca a palavra cenoura por batata
// console.log(novaFrase)
// console.log("Tem a palavra comer?", novaFrase.includes("comer")) 
// console.log("Tem a palavra batata?", novaFrase.includes("batata"))

//============================ Exercicio 6 ==============================

// const listaArray = ["batata", "cenoura", "beterraba"]

// console.log(listaArray[1]) // traz o indice do array
// console.log("Tamanho da lista:", listaArray.length) // tamanho de itens do array
// listaArray.push("mandioca") // adiciona o item entre parenteses a lista do array
// console.log(listaArray)
// listaArray.includes("cenoura")
// console.log("Tem cenoura?", listaArray.includes("cenoura")) // retorna um booleano
// listaArray.splice(1,1) // remove o item 1 e indice 1 do array
// console.log(listaArray)

//============================ Exercicio 7 ==============================

// const array = [2,10,5,9,22]

// let divideDois = (arrayDeNumeros) => {
//     const primeiro = arrayDeNumeros[0] / 2
//     const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
//     return arrayDeNumeros
// }

// console.log(divideDois(array))

//============================ Exercicio 8 ==============================

// const person = {
//      name: "Bruno Alves",
//      age: 34,
//      musicalGenre: "Sertanejo"
// }

// console.log(`the person's name is: ${person.name}, he has ${person.age} years and likes a lot ${person.musicalGenre} `)

// const anotherPerson = {
//     ...person,
//     name: "Jennifer Profirio",
//     age: 26,
//     musicalGenre: "Rock"
// }

// console.log(anotherPerson)

//============================ Exercicio 9 ==============================

// const numero = Number (prompt("Digite um numero:"))

// if (numero % 2 === 0 ) {
//     console.log("Esse número é par!")
// } else {
//     console.log("Esse número é ímpar!")
// }


//============================ Exercicio 10 ==============================

// se todas as suas condições forem de igualdade usa o switch

// const bichinho = prompt("Digite um bichinho:")

// switch (bichinho) {
//     case "cachorro":
//         console.log("Au au")
//     case "gato":
//             console.log("Miau")
//             break;
//     case "vaca":
//         console.log("Muuuu")
//         break;
//     default:
//         console.log("Barulho não encontrado")
// }


//============================ Exercicio 11 ==============================

const numeros = [11, 15, 18, 14, 12, 13]

let i = 0
let maior = -Infinity
while(i < numeros.length) {
    if(numeros[i] > maior) {
        maior = numeros[i]
    }
    i++
}

console.log(`O maior número é ${maior}`)