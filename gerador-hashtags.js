function generateHashtag (str) {
    var capitalize = (str) => str[0].toUpperCase() + str.slice(1);
    let semEspaco = str.trim();
    for (let i = 0; i < semEspaco.length; i++) {
        if (semEspaco[i] == ' ') {
            let j = i + 1;
            while (semEspaco[j] == ' ') {
                semEspaco = semEspaco.replace(' ', '');
            }
        }
    }
    let palavras = semEspaco.split(' ').map(capitalize);
    let sentence = palavras.join('');
    if (str.length == 0) {
        return false;
    } else if (sentence.length > 140) {
        return false;
    } else {
        let hashtag = '#' + sentence;
        return hashtag;
    }
}

let str = ("code" + "           " + "wars");
console.log(generateHashtag(str));