function media(nota1, nota2, nota3, nota4) {

    let mediaNotas = nota1 + nota2 + nota3 + nota4 / 4;
    if (mediaNotas >= 7.0) {
        console.log(mediaNotas)
        console.log("Aprovado")
    } else {
        console.log(mediaNotas)
        console.log("Reprovado")
    }
}

function multiploDeTres(numero) {
    if (numero % 3 === 0) {
        console.log("É multiplo de 3")
    } else {
        console.log("Não é multiplo de 3")
    }
}

function menorDeDoisNumeros(numero1, numero2) {
    console.log(Math.min(numero1, numero2))
}

function maiorDeTresNumeros(numero1, numero2, numero3) {
    console.log(Math.max(numero1, numero2, numero3))
}

function tabuadaSomar(numero) {
    for (let index = 1; index <= 10; index++) {
        console.log("%d + %d = %d", index, numero, index + numero)
    }
}

function quadradoDeCadaNumero() {
    // Pedir ao usuário para inserir cinco números
    const numeros = [];
    for (let i = 1; i <= 5; i++) {
        const numero = Number(prompt(`Insira o ${i}º número:`));
        numeros.push(numero);
    }

    // Imprimir o quadrado de cada número
    for (let i = 0; i < numeros.length; i++) {
        const quadrado = numeros[i] ** 2;
        console.log(`O quadrado de ${numeros[i]} é ${quadrado}`);
    }

}

function quest8(params) {
    let listaidade = []
    let listaaltura = []
    let listamediaaltura = []
    let listapeso = []
    let qtd = 1;
    let somamedia = 0;
    let countIdadeSuperiorA50 = 0;
    let media = somamedia/listamediaaltura.length

    while (qtd <= 3) {
        const idade = Number(prompt("Qual é a sua idade?"));
        //const altura = Number(prompt("Qual é a sua altura?"));
        //const peso = Number(prompt("Qual é a sua peso?"));

        listaidade.push(idade);
        //listaaltura.push(altura);
        //listapeso.push(peso);
        console.log(qtd)
        console.log(listaidade)

        qtd++;

    }

    for (let index = 0; index <= listaidade.length; index++) {
        if (listaidade[index] > 50) {
            countIdadeSuperiorA50++;
        }
    }
    for (let index = 0; index <= listaidade.length; index++) {
        if (listaidade[index] >= 10 && listaidade[index] <= 20) {
            listamediaaltura.push(listaidade[index]);
        }
    }

    for (let index = 0; index <= listamediaaltura.length; index++) {
        somamedia+=listamediaaltura[index]        
    }



}

quest8()
