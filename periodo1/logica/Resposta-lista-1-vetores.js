function quest01() {
    let vetor = [7.9, 6.7, 10.0, 1.0, 8.0, 5.0, 4.0, 9.0, 4.5, 7.0]

    for (const iterator of vetor) {
        if (iterator > 5.0) {
            console.log(iterator)
        }
    }

}

function quest02() {
    let count = 0
    let listaNomeAlunos = []
    let listaNotaAlunos = []

    while (count < 5) {
        let nomeAluno = prompt("Digite o nome do aluno:");
        let NotaAluno = prompt("Digite a nota do aluno:");

        listaNomeAlunos.push(nomeAluno);
        listaNotaAlunos.push(NotaAluno);

        count++;
    }

    for (let index = 0; index < listaNotaAlunos.length; index++) {
        if (listaNotaAlunos[index] > 5.0) {
            for (let iterator = 0; iterator < listaNomeAlunos.length; iterator++) {
                if (index === iterator) {
                    console.log(listaNotaAlunos[index], listaNomeAlunos[iterator])
                }

            }
        }

    }

}

function quest03() {
    let alunos = [];

    for (let i = 0; i < 5; i++) {
        let nome = prompt("Digite o nome do aluno:");
        let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
        let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));


        let media = (nota1 + nota2) / 2;

        let aluno = {
            nome: nome,
            nota1: nota1,
            nota2: nota2,
            media: media
        };


        alunos.push(aluno);
    }

    for (let i = 0; i < alunos.length; i++) {
        console.log("Nome:", alunos[i].nome);
        console.log("Nota 1:", alunos[i].nota1);
        console.log("Nota 2:", alunos[i].nota2);
        console.log("Média:", alunos[i].media);
        console.log();
    }

}
function quest04(params) {
    let notas = [];

    for (let i = 0; i < 80; i++) {
        let nota = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + ":"));
        notas.push(nota);
    }

    console.log("Notas dos alunos:");
    for (let i = 0; i < 80; i++) {
        console.log("Aluno " + (i + 1) + ": " + notas[i]);
    }

    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let mediaTurma = soma / notas.length;

    console.log("Média da turma: " + mediaTurma);

}

function quest05() {
    let count = 0;
    let vetor = []
    while (count < 3) {
        let numero = parseFloat(prompt("Digite um numero :"));
        vetor.push(numero);
        count++;
    }
    console.log(vetor.reverse());

}

function quest06() {
    let count = 0
    let vetor = []
    let numero = parseFloat(prompt("Digite quantos numeros deseja inverter?"));

    while (count < numero) {
        let valor = parseFloat(prompt("Digite um numero"));
        vetor.push(valor)
        count++;
    }
    let vetorInvertido = vetor.slice(0).reverse();

    console.log(vetor);
    console.log(vetorInvertido);

}

function quest07(vetor, numero) {
    for (let index = 0; index < vetor.length; index++) {
        if (numero === vetor[index]) {
            console.log(index)
        }
    }
}

function quest08(vetor) {
    for (let index = 0; index < vetor.length; index++) {
        if (vetor[index] < 0) {
            console.log(index);
            break;
        }
    }
}