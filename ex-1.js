//Exercise #1 : Get Word Length

let words = ["hello", "world"];

function getWordLengths(words) {
  return words.map(word => word.length);
};

let result = getWordLengths(words);

console.log(result); // Output: [5, 5]
