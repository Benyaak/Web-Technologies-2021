let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c', 'd', 'e'];

let result = array1.map(
  (element, index) => [element, array2[index]]
).flat();

console.log(result);