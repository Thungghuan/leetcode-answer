export {}
/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      let start = i + 1

      while (start < nums.length && nums[start] !== 0) {
        start++
      }
      let temp = nums[i]
      nums[i] = nums[start]
      nums[start] = temp
    }
  }
}
// @lc code=end

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('move-zeroes', () => {
    const array = [0, 1, 0, 3, 12]

    expect(array).toMatchInlineSnapshot(`
      [
        0,
        1,
        0,
        3,
        12,
      ]
    `)
  })
}
