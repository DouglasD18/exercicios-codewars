function deleteNth(arr,n){
    let cont = 0;
    for (let i = 0; i < arr.length; i++) {
        cont = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                cont += 1;
                if (cont > n) {
                    arr.splice(j, 1);
                    j -= 1;
                }
            }
        }
    }
    return arr;
}

let lista = [];
lista = deleteNth([31, 29, 5, 23, 29, 31, 18, 31, 5, 31, 31, 5, 16, 5, 18, 29, 6, 5, 18, 18, 29, 31, 6, 5, 6, 29, 6, 5, 5, 23, 5, 5, 29, 18, 6, 6, 5, 31, 31, 6, 5, 31, 6, 29, 5, 18, 5, 6, 29, 5, 31, 29, 6, 18, 5], 2);
console.log(lista);