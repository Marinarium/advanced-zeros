module.exports = function getZerosCount(number, base) {
  var i = 0;
  var d = 5;
  if (base > 16) {
    d = Math.round(base / 2);
  }
  while (number > 0) {
    number = Math.floor(number / d);
    i = i + number;
  }
  return i;
}
