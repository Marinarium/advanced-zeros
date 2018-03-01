module.exports = function getZerosCount(number, base) {
  var i = 0; 
  while (number > 0) {
    number = Math.floor(number / getLargestPrime(base));
    i = i + number;
  }
  return i;
}

function getLargestPrime(base) {
  var arrayOfPrimes = [];
  var largestPrime;
  for (let i = 2; i <= base; i++) {
      while ((base % i) === 0) {
        arrayOfPrimes.push(i);
        base /= i;
      }
      arrayOfPrimes.sort(compareNumbers);
      largestPrime = arrayOfPrimes[0];      
  }
  return largestPrime;
}

function compareNumbers(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
}

