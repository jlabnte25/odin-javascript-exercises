const leapYears = function(year=0) {

    let result = 0;

    if ((year % 400 == 0) && (year % 4 == 0)) {
        result = true;
    } else if (year % 100 == 0) {
        result = false;
    } else if (year % 4 == 0) {
        result = true;
    } else {
        result= false;
    }return result;

}
// Do not edit below this line
module.exports = leapYears;
