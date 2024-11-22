/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

      let filtered = ""
    let filter = ""
    let j = 0
    for (let i = s.length - 1; i >= 0; i--) {
        let char = s[i].toLowerCase()
        let fillCahr = s[j].toLowerCase()
        if ((char >= 'a' && char <= 'z')||(char >= '0' && char <= '9')) {
            filtered += char

        }
        j += 1

        if ((fillCahr >= 'a' && fillCahr <= 'z')||(char >= '0' && char <= '9')) {
            filter += fillCahr
        }

    }
    return filter === filtered
};