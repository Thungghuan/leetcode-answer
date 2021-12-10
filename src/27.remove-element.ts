export {}
/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  for (let i = nums.length - 1; i >= 0; --i) {
    if (nums[i] === val) nums.splice(i, 1)
  }

  return nums.length
}
// @lc code=end
const testArray = [0, 1, 2, 2, 3, 0, 4, 2]
const testVal = 2
console.log(removeElement(testArray, testVal))
console.log(testArray)
