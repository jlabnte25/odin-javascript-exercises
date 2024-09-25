const add = function(...a) {
  const arr = [...a];
  const result = arr.reduce((total, currentItem) => total + currentItem, 0);
  return result;
};

const subtract = function(a = 0, b=0) {
	const arr = [a, b];
  const result = arr.reduce((total, currentItem) => total - currentItem);
  return result;
};


const sum = function (array) {
  return array.reduce((total, currentItem) => total + currentItem, 0);
};


const multiply = function(array) {
  return array.reduce((total, currentItem) => total * currentItem, 1);
};

const power = function(a,b) {
  const arr = [a,b];
	return arr.reduce((total, currentItem) => Math.pow(total,currentItem));
};

const factorial = function(a) {
  const num = [];
  function spreadNumber (a) { 
    if (a>0) {
      for (let i = a; i > 0 ; i--) {
      num.push(i)};
    } else {
      num.push(1);
    }
  } 
  
  spreadNumber(a);
  
  return num.reduce ((total, currentItem) => total * currentItem,1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
