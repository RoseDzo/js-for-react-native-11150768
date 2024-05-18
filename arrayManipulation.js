function processArray(arr) {
  return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

function formatArrayStrings(stringArray, numberArray) {
  const result = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      result.push(stringArray[i].toUpperCase());
    } else {
      result.push(stringArray[i].toLowerCase());
    }
  }
  return result;
}
const numbers = [4, 1, 8, 7, 10];
const processedNumbers = processArray(numbers);
const strings = ['ramen', 'teddy', 'bear', 'koala', 'lizard'];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);