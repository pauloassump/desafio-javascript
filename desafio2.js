/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
function sum(a, b) {
    return a + b
}
exports.sum = null

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
function fullname(nome, sobrenome) {
    return nome + sobrenome
}
exports.fullname = null;

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calculate (a, b, c) {
    if (a == undefined || b == undefined || c == undefined) {
        console.log("Preencha todos os valores corretamente!")
    } else {
        return (a * b * c) / 2
    }
}
exports.calculate = null

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
function calculatev2 (a, b, c) {
    if (a == true && b == undefined || c == undefined) {
        return a
    } else if(a == true && b == true && c == undefined) {
        return a + b
    } else if (a == true && b == true && c == true) {
        return (a + b) / c
    } else {
        false
    }
}
exports.calculatev2 = null

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
function isPair (a) {
    if (a % 2 == 0) {
        return true
    } else {
        return false
    }
}
exports.isPair = null
