/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2

  while (i >= 0) {
    if (nums[i] < nums[i + 1]) break
    i--
  }

  if (i >= 0) {
    let j = nums.length - 1 

    while(j > 0) {
      if (nums[j] > nums[i]) break
      j--
    }

    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  // reverse
  let left = i + 1
  let right = nums.length - 1
  
  while(left < right) {
    const temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp

    left++
    right--
  }
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  function getNextPermutation(nums: number[]) {
    nextPermutation(nums)
    return nums
  }

  it('31.next-permutation', () => {
    expect(getNextPermutation([1, 2, 3])).toMatchInlineSnapshot(`
      [
        1,
        3,
        2,
      ]
    `)

    expect(getNextPermutation([1, 1, 5])).toMatchInlineSnapshot(`
      [
        1,
        5,
        1,
      ]
    `)

    expect(getNextPermutation([3, 2, 1])).toMatchInlineSnapshot(`
      [
        1,
        2,
        3,
      ]
    `)
  })
}
