const getTheTitles = function(array) {
    let titles = [];
    array.forEach(book => titles.push(book.title));
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

// const getTheTitles = function (array) {
//     return array.map((book) => book.title);
//   };
  
//   module.exports = getTheTitles;
  