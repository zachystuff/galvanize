function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (score > 100 || score < 0) {
        return "INVALID SCORE"
    }

    if (score <= 59) {
        return "F"
    }
    if (score <= 69) {
        if (score < 63) {
            return "D-"
        } else if ( score > 67){
            return "D+"
        } else {
            return "D"}
    }

    if (score <= 79) {
        if (score < 73) {
            return "C-"
        } else if (score > 77) {
            return "C+"
        } else {
            return "C"
        }
    }
    
    if (score <= 89) {
        if (score < 83) {
            return "B-"
        } else if (score > 87) {
            return "B+"
        } else {
            return "B"
        }
    }  
    if (score > 89) {
        if (score < 93) {
            return "A-"
        } else if (score > 97) {
            return "A+"
        } else {
            return "A"
        }
    }  
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'