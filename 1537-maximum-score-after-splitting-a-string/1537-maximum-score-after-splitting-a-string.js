/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let leftString = ""
    let arr = []
    for (let i = 0; i < s.length - 1; i++) {
        leftString += s[i]
        let add1 = leftString.split("0").length-1;
        let rightString = s.substring(i + 1)
        let add2 = rightString.split("1").length - 1;
        let sumValue = add1 + add2
          arr.push(sumValue)

    }
    return Math.max(...arr)
};