function computeFactorialOfN(n) {
    var number = n;
    var product = 1;
    while (number > 0) {
        product *= number;
        number--;
    }
    return product
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24