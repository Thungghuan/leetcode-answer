export {}
/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const duplicateLimit = 2
  let maxIndex = 0,
    maxCount = 0

  for (let i = 0; i < nums.length; ++i) {
    maxCount++
    if (maxCount <= duplicateLimit) {
      nums[maxIndex++] = nums[i]
    }

    // clear count when the next one is not duplicate
    if (nums[i + 1] !== nums[i]) maxCount = 0
  }

  return maxIndex
}
// @lc code=end
const testArray = [0, 0, 1, 1, 1, 1, 2, 3, 3]
console.log(removeDuplicates(testArray))
console.log(testArray)
