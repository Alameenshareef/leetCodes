/**
 * @param {string} s
 * @return {boolean}
 */

 let parathesis = {
    "(": ")",
    "[": "]",
    "{": "}"

}
var isValid = function(s) {
 let stack = []

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (parathesis[char]) {
            stack.push(parathesis[char])
        } else if (stack.pop() !== char) {
          return false
        }
    };
    return stack.length === 0    
};