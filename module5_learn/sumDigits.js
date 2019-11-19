function sumDigits(num) {
    
    // this converts number into string;
    let numString = num.toString();
    let sum = 0;
    // iterate through the string
    for (let i =0; i < numString.length; i++) {
        // check if the number is negative
        if (numString[i] === '-') {
            // convert fist number to neg and add to sum
            let char = numString[0] + numString[1];
            sum += Number(char);
            i++;
        } else {
            sum += Number(numString[i]);
        }
    }

    return sum

}

var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4