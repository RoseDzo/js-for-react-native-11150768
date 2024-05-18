function processArray(arr){
  return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);

}
const result = processArray([1, 2, 5, 6, 9])
console.log(result)