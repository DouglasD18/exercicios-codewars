function sumTwoSmallestNumbers(numbers) {  
    let sum = 0;
    let int = [];
    for (const i of numbers) {
        if (int.length < 2) {
            int.push(i);
        } else {
            if (i < int[0] && i != int[1]) {
                int[1] = int[0];
                int[0] = i;
            } else if (i < int[1]) {
                int[1] = i;
            }
        }
    }
    sum = int[0] + int[1];
    return sum;
}

let lista = [3, 87, 45, 12, 7];
let resultado = sumTwoSmallestNumbers(lista);
console.log(resultado);
