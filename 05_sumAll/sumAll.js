

const sumAll = function(a=0,b=0) {
    
    if (a>=0 && b>=0 && (a- Math.floor(a))===0 && (b - Math.floor(b))===0 && typeof a !== 'string' && typeof b !== 'string') {
    let smaller = (a < b) ? a : b;
    let bigger = (a > b) ? a : b;

    function sumEquation (smaller,bigger) {
        let sum = (((bigger - smaller + 1) / 2)*(bigger+smaller));{
        return sum;}    

    }return sumEquation(smaller,bigger);}

    else {
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = sumAll;
