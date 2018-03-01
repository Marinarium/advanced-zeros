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
  if (arrayOfPrimes[0] == arrayOfPrimes[1]) {
    var counter = 0;
    for (let i = 0; i < arrayOfPrimes.length; i++){
      if (arrayOfPrimes[0] == arrayOfPrimes[i]){
        counter++;
      }
  }
	largestPrime = arrayOfPrimes[0] * counter - (counter - 1);
}
  return largestPrime;
}

function compareNumbers(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
}

