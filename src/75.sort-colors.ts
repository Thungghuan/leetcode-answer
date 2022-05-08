/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let red = 0
  let blue = nums.length - 1

  for (let i = 0; i <= blue; ++i) {
    while (nums[i] === 2 && i <= blue) {
      const temp = nums[i]
      nums[i] = nums[blue]
      nums[blue] = temp
      blue--
    }

    if (nums[i] === 0 && i >= red) {
      const temp = nums[i]
      nums[i] = nums[red]
      nums[red] = temp
      red++
    }
  }
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('75.sort-colors', () => {
    let nums = [2, 0, 2, 1, 1, 0]
    sortColors(nums)

    expect(nums).toMatchInlineSnapshot(`
      [
        0,
        0,
        1,
        1,
        2,
        2,
      ]
    `)

    nums = [0, 1, 0]
    sortColors(nums)

    expect(nums).toMatchInlineSnapshot(`
      [
        0,
        0,
        1,
      ]
    `)

    nums = [1, 2, 0]
    sortColors(nums)

    expect(nums).toMatchInlineSnapshot(`
      [
        0,
        1,
        2,
      ]
    `)
  })
}
