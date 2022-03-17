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
  let zeroCount = 0
  let idx = 0

  while (idx < nums.length) {
    if (nums[idx] == 0) {
      zeroCount++
      nums.splice(idx, 1)
    } else {
      idx++
    }
  }

  nums.push(...Array.from({ length: zeroCount }, () => 0))
}
// @lc code=end

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('array-splice', () => {
    const array = [0, 1, 0, 3, 12]

    array.splice(1, 1)

    expect(array).toEqual([0, 0, 3, 12])
  })

  it('array-from', () => {
    const length = 3

    expect(Array.from({ length }, () => 0)).toEqual([0, 0, 0])
  })

  it('move-zeroes', () => {
    const array1 = [0, 1, 0, 3, 12]
    moveZeroes(array1)

    expect(array1).toEqual([1, 3, 12, 0, 0])

    const array2 = [0]
    moveZeroes(array2)

    expect(array2).toEqual([0])
  })
}
