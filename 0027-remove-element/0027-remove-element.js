/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
  let high = nums.length - 1
    for (let j = nums.length - 1; j >= 0; j--) {
        if (nums[j] == val) {
            temp = nums[high]
            nums[high] = nums[j]
            nums[high] = nums[j]
            nums[j] = temp
            high -= 1



        }


    }
    return high + 1

    
};