/**
 * A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False
 */

const isPangram = (sentence) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetSet = new Set()
    const sentenceLowerCase = sentence.toLowerCase()
    
    for (const char of sentenceLowerCase) {
        if (char >= 'a' && char <= 'z') {
            alphabetSet.add(char)
        }
    }
    return alphabetSet
}

console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
console.log(isPangram('I like dogs, but not cats'))