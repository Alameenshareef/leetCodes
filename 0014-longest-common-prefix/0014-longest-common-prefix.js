/**
 * @param {string[]} strs
 * @return {string}
 */
let strings = ["kile", "kitten", "kitchen","kit"] 

const longestCommonPrefix = (str) => {

    let mostFrequent = "";


    let minlength = str[0].length
    for (let i = 1; i < str.length; i++) {
        minlength = Math.min(minlength, str[i].length)

    }

    for (i = 0; i < minlength; i++) {
        let current = (str[0][i]);

        for (j = 0; j < str.length; j++) {
            if (str[j][i] !== current) {
                return mostFrequent
            }
        }
        mostFrequent += current
    }
    return mostFrequent
}

console.log(longestCommonPrefix(strings))




