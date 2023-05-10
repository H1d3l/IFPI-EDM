function Media(nota1, nota2, nota3, nota4) {

    let mediaNotas = nota1 + nota2 + nota3 + nota4 / 4;
    if (mediaNotas >= 7.0) {
        console.log(mediaNotas)
        console.log("Aprovado")
    } else {
        console.log(mediaNotas)
        console.log("Reprovado")
    }
}

function MultiploDeTres(numero) {
    if (numero % 3 === 0) {
        console.log("É multiplo de 3")
    } else {
        console.log("Não é multiplo de 3")
    }
}

function MenorDeDoisNumeros(numero1, numero2) {
    console.log(Math.min(numero1, numero2))
}

function MaiorDeTresNumeros(numero1, numero2, numero3) {
    console.log(Math.max(numero1, numero2, numero3))
}

function OperacoesLista() {
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));

    let opcao = parseInt(prompt("Escolha uma opção: \n1 - Média entre os números digitados\n2 - Diferença do maior pelo menor\n3 - Produtos entre os números digitados\n4 - Divisão do primeiro pelo segundo"));

    let maior = Math.max(num1, num2)
    let menor = Math.min(num1, num2)
    let diferenca = maior - menor


    switch (opcao) {
        case 1:
            console.log(`A soma de ${num1} e ${num2} é igual a ${num1 + num2 / 2}.`);
            break;
        case 2:
            console.log(`A subtração de ${maior} do número ${menor} é igual a ${diferenca}.`);
            break;
        case 3:
            console.log(`A multiplicação de ${num1} por ${num2} é igual a ${num1 * num2}.`);
            break;
        case 4:
            if (num2 === 0) {
                console.log("Não é possível dividir por zero.");
            } else {
                console.log(`A divisão de ${num1} pelo número ${num2} é igual a ${num1 / num2}.`);
            }
            break;
        default:
            console.log("Opção inválida.");
    }

}
function TabuadaSomar(numero) {
    for (let index = 1; index <= 10; index++) {
        console.log("%d + %d = %d", index, numero, index + numero)
    }
}

function QuadradoDeCadaNumero() {
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

function IdadeAlturaPeso() {
    let qtd_idade_maior_50 = 0;
    let soma_alturas = 0;
    let qtd_alturas_entre_10_20 = 0;
    let qtd_peso_inferior_40 = 0;

    for (let i = 1; i <= 25; i++) {
        let idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
        let altura = parseFloat(prompt(`Digite a altura da pessoa ${i} (em metros):`));
        let peso = parseFloat(prompt(`Digite o peso da pessoa ${i} (em quilos):`));

        if (idade > 50) {
            qtd_idade_maior_50++;
        }

        if (idade >= 10 && idade <= 20) {
            soma_alturas += altura;
            qtd_alturas_entre_10_20++;
        }

        if (peso < 40) {
            qtd_peso_inferior_40++;
        }
    }

    let percent_peso_inferior_40 = (qtd_peso_inferior_40 / 25) * 100;
    let media_alturas_entre_10_20 = soma_alturas / qtd_alturas_entre_10_20;

    console.log(`Quantidade de pessoas com idade superior a 50 anos: ${qtd_idade_maior_50}`);
    console.log(`Média das alturas das pessoas com idade entre 10 e 20 anos: ${media_alturas_entre_10_20.toFixed(2)} metros`);
    console.log(`Percentual de pessoas com peso inferior a 40 quilos: ${percent_peso_inferior_40.toFixed(2)}%`);


}

function ImparPar() {

    let somaPares = 0;
    let somaImpares = 0;

    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt("Digite um número: "));
        if (num % 2 === 0) {
            somaPares += num;
        } else {
            somaImpares += num;
        }
    }

    console.log("A soma dos números pares é:", somaPares);
    console.log("A soma dos números ímpares é:", somaImpares);
}

function RecebeIdadeAltura(params) {
    let somaAlturas = 0;
    let qtdPessoasMaisDe50 = 0;

    while (true) {
        let idade = parseInt(prompt("Digite a idade da pessoa (digite 0 ou um valor negativo para encerrar): "));

        if (idade <= 0) {
            break;
        }

        let altura = parseFloat(prompt("Digite a altura da pessoa (em metros): "));

        if (idade > 50) {
            somaAlturas += altura;
            qtdPessoasMaisDe50++;
        }
    }

    if (qtdPessoasMaisDe50 === 0) {
        console.log("Não há pessoas com mais de 50 anos.");
    } else {
        let mediaAlturasMaisDe50 = somaAlturas / qtdPessoasMaisDe50;
        console.log(`A média das alturas das pessoas com mais de 50 anos é ${mediaAlturasMaisDe50.toFixed(2)} metros.`);
    }

}