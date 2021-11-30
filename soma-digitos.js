function digital_root(n) {
    let sum = 0;
    while (n > 10) {
        sum += n % 10
        n = Math.trunc(n / 10) 
    }
    sum += n;
    return sum
}

let resultado = digital_root(252);
console.log(resultado);