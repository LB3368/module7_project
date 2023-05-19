/**
 * Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

For example:

findLongestWord(["hi", "hello"]);
// -> 5
 */

const findTheLongestWord = (words) => {
    let longestWord = words[0]
    let longestWordLength = longestWord.longestWordLength
    for (const word of words) {
        if (word.length > longestWordLength) {
            longestWord = word
            longestWordLength = word.length
        }
    }
    return longestWordLength
}

console.log(findTheLongestWord(['hi', 'hello']))
console.log(findTheLongestWord(['this', 'is', 'a', 'long', 'word']))