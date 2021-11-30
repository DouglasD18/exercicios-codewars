function persistence(num) {
    function multiplica(num) {
        let sum = 1;
        while (num >= 10) {
            sum *= num % 10;
            num = Math.trunc(num / 10);
        }
        sum *= num;
        return sum;
    }

    if (num >= 10) {
        let cont = 0;
        while (num >= 10) {
            cont++
            num = multiplica(num);
        }
        return cont;
    } else {
        return 0;
    }
}

let resultado = 0;
resultado = persistence(10);
console.log(resultado);