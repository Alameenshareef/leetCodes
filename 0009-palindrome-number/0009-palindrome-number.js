/**
 * @param {number} x
 * @return {boolean}
 */
function  isPalindrome(num){
let str = num.toString()
let split = str.split('')
let reverse = split.reverse()
let reverseStr = reverse.join('')
if(str === reverseStr){
    return true
} else{
   return false
}
}
console.log(isPalindrome(124));