function narcissistic(value) {
    let bases = value.toString().length;;
    let sum = 0;
    let num = value;
    for (let i = 0; i < bases; i++) {
        let resto = num % 10; 
        sum += resto ** bases;
        num = Math.trunc(num / 10);
    }
    if (sum === value) {
        return true
    } else {
        return false
    }
}
