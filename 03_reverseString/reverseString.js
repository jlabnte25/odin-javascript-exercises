let string = "";

const reverseString = function(string = "") {{
    let stringArray = []; 
        for (let i=0; i < string.length; i++) {
        stringArray.push(string.charAt(i));
        }
    
    function reverseArray() {
        let newString = [];
        for (let j=string.length-1 ; j>=0 ; j--) {
            newString.push(stringArray[j]);
        }
        return newString.join("");}
    }
    return reverseArray();
}


// Do not edit below this line
module.exports = reverseString;