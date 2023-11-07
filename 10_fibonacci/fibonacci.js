const fibonacci = function(num) {
    num = Number.parseInt(num);
    if (Number.isNaN(num) || num <= 0) {
        return "OOPS";
    }
    let num1 = 1;
    let num2 = 1;
    for (let i = 1; i < num; i++) {
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
