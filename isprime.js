function isPrime(num) {
    if (num > 1) {
        let resposta = true;
        let cont = Math.trunc(num / 2);
        let otimizador = 1;
        while (cont > otimizador) {
            otimizador += 1;
            if (num % cont === 0 || num % otimizador === 0) {
                resposta = false;
                break;
            }
            cont -= 1;
        }
        return resposta;
    } else {
        return false;
    }
}