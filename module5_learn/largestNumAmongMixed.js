function getLargestNumberAmongMixedElements(arr) {
    // your code here

    if (arr.length === 0) {
        return 0
    }

    let numArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            numArr.push(arr[i])
        }
    }

    if (numArr.length === 0) {
        return 0
    }

    let largestNum = numArr[0];
    for (let j = 0; j < numArr.length; j++) {
        if (numArr[j] > largestNum) {
            largestNum = numArr[j]
        }
    }

    return largestNum
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5