// Exercise #2 : Get 5 Characters Word

let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
    return words.filter(word => word.length >= 5);
};

let result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
