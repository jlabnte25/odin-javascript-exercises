

const removeFromArray = function(a, ...userInput) {;   
    let filteredArray = a.filter(a => !userInput.includes(a));
    return filteredArray;
    }

module.exports = removeFromArray;


//npm test FromArray.spec.js