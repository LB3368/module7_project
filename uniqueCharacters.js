/**Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

For example:

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False */

const hasUniqueChars = (word) => {
    const charSet = new Set()
    for (const char of word) {
        if (charSet.has(char)) {
            return false
        }
        charSet.add(char)
    } 
    return true
}

console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moonday'))