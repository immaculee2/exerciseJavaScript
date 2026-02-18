function myReduce(array, callback, initialValue) {
  let accumulator = initialValue; // start with initialValue

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
let arr = [1, 2, 3, 4, 5];

let sum = myReduce(arr, function(acc, current) {
  return acc + current;
}, 0);

console.log("Sum:", sum);
let words = ["Hello", "World"];
let sentence = myReduce(words, function(acc, current) {
  return acc + " " + current;
}, "");

console.log(sentence); // " Hello World"


