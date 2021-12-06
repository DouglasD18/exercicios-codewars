function spinWords(string){
    let matriz = string.split(' ');
    let resultado = '';
    if (matriz.length > 1) {
        for (let i = 0; i < matriz.length; i++) {
            let words = matriz[i];
            if (words.length >= 5) {
                words = words.split(""). reverse().join("");
            }
            if (i == matriz.length - 1) {
                resultado += words;
            } else {
                resultado += words + ' ';
            }
        }
    } else {
        let word = matriz[0];
        if (word.length >= 5) {
            word = word.split(""). reverse().join("")
            resultado += word;
        } else {
            resultado += word;
        }
    }
    return resultado;
}
let teste = spinWords("Welcome");
console.log(teste);