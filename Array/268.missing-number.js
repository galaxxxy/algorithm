/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let missingNum = 0;
    for (let i = 0; i < nums.length; i++) {
      missingNum += i - nums[i];
    }
  return missingNum + nums.length;
};
// @lc code=end

