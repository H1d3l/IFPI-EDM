function letexto() {
    var string = prompt("Insira uma string");
    console.log(string.length);

}

function leifpicharat() {

    let str = prompt("Insira uma string");
    let len = str.length;

    for (let i = 0; i < len * 2 - 1; i++) {
        let output = "";
        let j = i < len ? i : len - (i % len) - 2;
        for (let k = 0; k <= j; k++) {
            output += str.charAt(k);
        }
        console.log(output);
    }

}

function leifpisubstring() {

    var string = prompt("Insira uma string");
    let length = string.length;

    for (let i = 0; i < length * 2 - 1; i++) {
        let output = "";
        if (i < length) {
            output = string.substring(0, i + 1);
        } else {
            output = string.substring(0, length * 2 - i - 1);
        }
        console.log(output);
    }

}

function toLowerCasetoUpperCase() {

    let stringtoLowerCase = prompt("Insira uma palavra")

    console.log(stringtoLowerCase.toLowerCase());

    let stringtoUpperCase = prompt("Insira uma palavra")

    console.log(stringtoUpperCase.toUpperCase());
}

function replacestring() {
    let frase = prompt("Insira uma frase");
    let stringparasubstituir = prompt("Insira uma palavra para ser substituidar");
    let stringsubstitura = prompt("Insira uma palavra nova");

    let novafrase = frase.replace(stringparasubstituir, stringsubstitura);

    console.log("antiga frase: " + frase);
    console.log("nova frase", novafrase);

}

function quest06() {
    let numeros = [3, 14, 12, 15, 20, 19, 1, 4, 14, 17];
    let palavra = numeros.join("");
    let letraCorrespondente = {
        "1": "a",
        "2": "b",
        "3": "c",
        "4": "d",
        "5": "e",
        "6": "f",
        "7": "g",
        "8": "h",
        "9": "i",
        "10": "j",
        "11": "l",
        "12": "m",
        "13": "n",
        "14": "o",
        "15": "p",
        "16": "q",
        "17": "r",
        "18": "s",
        "19": "t",
        "20": "u",
        "21": "v",
        "22": "x",
        "23": "z"
    };

    for (let key in letraCorrespondente) {
        let numero = parseInt(key);
        let letra = letraCorrespondente[key];
        palavra = palavra.replace(new RegExp(numero, "g"), letra);
    }

    console.log(palavra);


}

function quest07() {
    let numero = prompt("Digite um número inteiro:");
    let digitos = numero.split("");

    let digitosPorExtenso = {
        "0": "zero",
        "1": "um",
        "2": "dois",
        "3": "três",
        "4": "quatro",
        "5": "cinco",
        "6": "seis",
        "7": "sete",
        "8": "oito",
        "9": "nove"
    };

    let resultado = digitos.map(digito => digitosPorExtenso[digito]).join(", ");

    console.log(resultado);

}

function quest08() {
    let texto = prompt("Digite um texto:");
    let caracteres = texto.length;
    let palavras = texto.split(/\s+/).length;

    console.log(`O texto digitado tem ${caracteres} caracteres e ${palavras} palavras.`);

}
quest08();