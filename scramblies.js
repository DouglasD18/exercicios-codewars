function scramble(str1, str2) {
    let resultado = true;
    let cont = 0;
    if (str1.length >= str2.length) {
        for (const letra of str2) {
            let otimizador = cont;
            for (let i = 0; i < str1.length; i++) {
                if (str1[i] == letra) {
                    cont += 1;
                    if (i === 0) {
                        str1 = str1.slice(1);
                    } else {
                        str1 = str1.slice(0, i) + str1.slice(i + 1);
                    }
                    
                    break;
                }
            }
            if (otimizador == cont) {
                resultado = false;
                break;
            }
        }
        if (cont != str2.length) {
            resultado = false;
        }
    } else {
        resultado = false;
    }
    return resultado;
}

console.log(scramble('jscripts','javascript'));
