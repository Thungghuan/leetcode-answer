/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  nums.splice(0, nums.length, ...new Set(nums))

  return nums.length
}
// @lc code=end

const testArray = [1, 1, 2]
console.log(removeDuplicates(testArray))
console.log(testArray)
