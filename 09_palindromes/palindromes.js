const palindromes = function (input) {
    let punctuation = /[\.,?!]/g;
    let toEvaluate = input.toLowerCase().replace(punctuation, "").replaceAll(/\s+/g, "");
    let toEvaluateReversed = toEvaluate.split('').reverse().join('');
    return toEvaluate === toEvaluateReversed;
};

    // if (toEvaluate === toEvaluateReversed) {
    //     return true;
    // } else 
    //     return false;

// Do not edit below this line
module.exports = palindromes;
