function convertScoreToGrade(score) {
    // your code here
    if (score > 100 || score < 0) {
        return "INVALID SCORE"
    }
    
    if ( score <= 59) {
        return "F"
    }else if (score <= 69) {
        return "D"
    }else if (score <= 79) {
        return "C"
    }else if (score <= 89) {
        return "B"
    } else {
        return "A"
    }
}

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'