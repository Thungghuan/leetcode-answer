/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const result: number[] = []

  /** Answer 2
   *  Runtime: 74.42%
   *  Memory: 21.99%
   */
  let left = 1
  for (let i = 0; i < nums.length; ++i) {
    result.push(left)
    left *= nums[i]
  }

  let right = 1
  for (let i = nums.length - 1; i >= 0; --i) {
    result[i] *= right
    right *= nums[i]
  }

  /** Answer1
   *  Runtime: 5%, huh?
   */
  // for (let i = 0; i < nums.length; ++i) {
  //   let product = 1

  //   for (let j = 0; j < nums.length; ++j) {
  //     if (j === i) continue
  //     product *= nums[j]
  //   }

  //   result.push(product)
  // }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('238.product-of-array-except-self', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])

    expect(productExceptSelf([-1, 1, 0, -3, 3])).toMatchInlineSnapshot(`
      [
        -0,
        0,
        9,
        -0,
        0,
      ]
    `)
  })

  it('negative-zero', () => {
    expect(-0).not.toBe(0)
    expect(Math.abs(-0)).toBe(0)
  })
}
