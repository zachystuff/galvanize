function computeSummationToN(n) {
    
    let reduce = n;
    let sum = 0;
    while (reduce > 0) {
        sum += reduce;
        reduce--;
    }
    return sum
}

var output = computeSummationToN(6);
console.log(output); // --> 21