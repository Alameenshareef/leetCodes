/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
let prefixArr = []
prefixArr[0] = nums[0]

for(let i=1;i<nums.length;i++){
    prefixArr[i] = prefixArr[i-1] + nums[i]
}
return prefixArr


    
};