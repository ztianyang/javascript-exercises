const palindromes = function (str) {
    let chars = str.split("");
    chars = chars.map((char) => char.toLowerCase())
                 .filter((char) => !(" !,.".includes(char)));
    let reversedChars = chars.slice().reverse();
    return chars.join("") === reversedChars.join("");
};

// Do not edit below this line
module.exports = palindromes;
