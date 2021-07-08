const circleArea = function (yaricap) {
  return `Dairenin alanı : ${Math.PI * yaricap ** 2}`;
};

const circleCircumference = function (yaricap) {
  return `Dairenin çevresi : ${Math.PI * yaricap * 2}`;
};

module.exports = {
  circleArea,
  circleCircumference,
};
