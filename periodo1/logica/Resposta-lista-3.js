function quatro_digitos(number) {
    var unidade, dezena, centena, milhar;

    unidade = (number / 1) % 10;
    dezena = (number / 10) % 10;
    centena = (number / 100) % 10;
    milhar = (number / 1000) % 10;

    console.log(Math.round(milhar));
    console.log(Math.round(unidade));
}

function numero_perfeito(number) {
    var soma = 0;

    for (let index = 1; index < number; index++) {
        if (number % index === 0) {
            soma += index;
        }
    }

    if (number === soma) {
        console.log('é perfeito');
        return true;
    }
    else {
        console.log('nao é perfeito');
        return false;
    }

}

function inverte_numero() {
    var num1 = parseInt(prompt("Insira o numero"));

    if (isNaN(num1)) {
        alert('Você não digitou um número válido');
    } else {
        var resultado = 0;
        while (num1 > 0) {
            resultado = 10 * resultado + num1 % 10;
            num1 = Math.floor(num1 / 10);
        }

        alert("O resultado da inversão é: " + resultado);
    }

}

function palíndromo(number) {
    var resultado = 0;
    var number1 = number;

    if (isNaN(number)) {
        alert('Você não digitou um número válido');
    } else {
        while (number > 0) {
            resultado = 10 * resultado + number % 10;
            number = Math.floor(number / 10);
        }
    }

    if (number1 === resultado) {
        console.log('é palíndromo');
    }
    else {
        console.log('nao é palíndromo');
    }
}

function dona_lesma(altura, subida, descida) {
    var distancia_liquida, dias;

    distancia_liquida = subida - descida;
    dias = altura / distancia_liquida;

    console.log(dias);

}

function controle_de_pagamentos_do_pedrinho(V,P) {
    let valor_parcela = Math.floor(V / P);
    let resto = V % P;

    let parcelas = new Array(P).fill(valor_parcela);

    for (let i = 0; i < resto; i++) {
        parcelas[i] += 1;
    }

    console.log("Valores das parcelas:", parcelas);
}
