/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  // nums.splice(0, nums.length, ...new Set(nums))

  // return nums.length

  let slow = 0
  let fast = 0
  const len = nums.length

  while (fast < len) {
    while (fast !== len - 1 && nums[fast] === nums[fast + 1]) {
      fast++
    }
    nums[slow] = nums[fast]

    slow++
    fast++
  }

  return slow
}
// @lc code=end

// const testArray = [1, 1, 2]
// console.log(removeDuplicates(testArray))
// console.log(testArray)

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('26.remove-duplicates-from-sorted-array', () => {
    expect(removeDuplicates([1, 1, 2])).toMatchInlineSnapshot('2')
    expect(
      removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
    ).toMatchInlineSnapshot('5')
  })
}
