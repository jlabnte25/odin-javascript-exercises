const convertToCelsius = function(F) {
   let C = (5/9) * (F -32);
   let CRounded = Math.round(C*10)/10;
   return CRounded;

};

const convertToFahrenheit = function(C) {
  let F = (9/5 * (C)) +32;
  let FRounded = Math.round(F*10)/10;
  return FRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
