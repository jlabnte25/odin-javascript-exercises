


const repeatString = function(stringInput, i = 0) {
    let stringRepeat = [];
    let j = 0;
    
    if (i==0) {
        stringRepeat = "";
        return stringRepeat;
    } else if (i<0){
        stringRepeat = "ERROR";
        return stringRepeat;
    } else if (j<i) {for(j = 0 ; j < i ; j++){
        stringRepeat.push(stringInput);
        } return stringRepeat.join('');
    } else if (j==i) {let repeatString = ""};
}

// Do not edit below this line
module.exports = repeatString;

//if (j<i) {for(j = 0 ; j < i ; j++){
    //stringRepeat.push(stringInput);
    //} return stringRepeat.join('');
//} else if (j==i) {let repeatString = ""};
//}