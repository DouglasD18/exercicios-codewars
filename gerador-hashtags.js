function generateHashtag (str) {
    var capitalize = (str) => str[0].toUpperCase() + str.slice(1);
    let semEspaco = str.trim();
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
// Não está funcionando para o caso de vários espaços internos.

let str = ("code" + " " + "wars");
console.log(generateHashtag(str));