/*
 * @lc app=leetcode id=442 lang=typescript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
function findDuplicates(nums: number[]): number[] {
  const duplicates: number[] = []

  nums.forEach((num) => {
    if (nums[Math.abs(num) - 1] < 0) {
      duplicates.push(Math.abs(num))
    } else {
      nums[Math.abs(num) - 1] *= -1
    }
  })

  return duplicates
}
// @lc code=end

function findOneDuplicate(nums: number[]): number {
  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i]

    if (nums[Math.abs(num) - 1] < 0) {
      return Math.abs(num)
    } else {
      nums[Math.abs(num) - 1] *= -1
    }
  }

  return NaN
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('find-duplicates', () => {
    const array1 = [4, 3, 2, 7, 8, 2, 3, 1]
    expect(findDuplicates(array1)).toEqual([2, 3])
  })

  it('find-one-duplicate', () => {
    const array1 = [4, 3, 2, 7, 8, 2, 3, 1]
    expect([2, 3].includes(findOneDuplicate(array1))).toBeTruthy()
  })
}
