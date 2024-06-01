var nome = prompt('Digite seu nome :')
var altura = prompt('Digite sua altura em cetimetros :')
var peso = prompt('Digite seu peso :')

altura = parseFloat(altura)
peso = parseFloat(peso)

altura = altura/100

var imc = peso/(altura*altura)

var classificação

if (imc < 16){
    classificação = 'Baixo peso , muito grave'
} else if (imc >= 16 && imc <= 16.99) {
    classificação = 'Baixo peso , grave'   
} else if (imc >= 17 && imc <= 18.49) {
    classificação = 'Baixo Peso'
} else if (imc >= 18.50 && imc <= 24.99) {
    classificação = 'Peso Normal'
} else if (imc >= 25 && imc <= 29.99) {
    classificação = 'Sobrepeso'
} else if (imc >= 30 && imc <= 34.99) {
    classificação = 'Obesidade grau I'
} else if (imc >= 35 && imc <= 39.99) {
    classificação = 'Obesidade grau II'
} else {
    classificação = 'Obesidade grau III'
}


document.write(nome + ' possui índice de massa corporal igual a ' + imc.toFixed(1) + ' , sendo classificado como: ' + classificação + ' !' )