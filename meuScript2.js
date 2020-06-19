let rs = require('readline-sync')

console.log ("Olá, usuário!")

let pergunta = rs.question("")

console.log("Beleza! Qual o seu peso?")
let peso = rs.questionFloat()

console.log("E a sua altura?")
let altura = rs.questionFloat()


let imc= peso / (altura*altura)
console.log("Seu imc é de:"+ imc)

if (imc < 18.5){
    console.log("Abaixo do peso.")
}
    else if(imc > 18.5 && imc < 24.9){
    console.log("Peso normal.")
    }
    else if(imc > 25 && imc < 29.9){
    console.log("Sobrepeso.")
    }
    else if(imc > 30 && imc < 39.9){
    console.log("Obesidade.")
    }
    else if(imc > 40){
    console.log("Obesidade grave.")
    }

    


