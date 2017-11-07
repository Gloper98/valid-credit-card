var cardNumber = prompt('Insert your credit card number');
function isValidCard(cardNumber) {
  var arrayOfNumbers = Array.from(cardNumber);
  var allNumbers = [ ];
  var result = 0;
  var stringArray = [ ];
  arrayOfNumbers.reverse();
  for (var i = 0; i < arrayOfNumbers.length ; i++) {
    if (arrayOfNumbers.indexOf(arrayOfNumbers[i]) % 2 !== 0) {
      allNumbers.push(arrayOfNumbers[i] * 2);
    } else {
      allNumbers.push(arrayOfNumbers[i] * 1);
    }
  }

  return allNumbers;
}

isValidCard(cardNumber);

/* const n = 123456;
Array.from(n.toString()).map(Number);
// [1, 2, 3, 4, 5, 6]*/
