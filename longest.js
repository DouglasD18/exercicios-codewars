function longest(s1, s2) {
    let alfa = 'abcdefghijklmnopqrstuvwxyz';
    let resultado = '';
    let tam = 0;
    if (s1.length >= s2.length) {
        tam = s1.length;
    } else {
        tam = s2.length;
    }
    for (let i = 0; i < alfa.length; i++) {
        for (let j = 0; j < tam; j++) {
            if (s1[j] == alfa[i] || s2[j] == alfa[i]) {
                resultado += alfa[i];
                break;
            }
        }
    }
    return resultado;
}

let a = 'xyaabbbccccdefww';
let b = 'xxxxyyyyabklmopq';
// abcdefklmopqwxy
let teste = longest(a, b);
console.log(teste);