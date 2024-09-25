const fibonacci = function(a) {

    let n = Number(a);

    if (n>=0) {
    let fibonacciSequence = [0,1];

    function getSequence () {
        for (let i = 2; i <= n ; i++)
        {
            fibonacciSequence.push(fibonacciSequence[i-1]+ fibonacciSequence[i-2]); 
        }
    } 
    
    getSequence ();

    return fibonacciSequence[n];}

    else {return "OOPS"};

};

// Do not edit below this line
module.exports = fibonacci;
