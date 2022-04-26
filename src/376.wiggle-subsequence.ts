/*
 * @lc app=leetcode id=376 lang=typescript
 *
 * [376] Wiggle Subsequence
 */

// @lc code=start
function wiggleMaxLength(nums: number[]): number {
  /** Answer 1: Greedy
   *
   * Runtime: 69ms / 78.57%
   * Memory: 43.2MB / 50%
   *
   */

  if (nums.length <= 1) return nums.length

  let result = 1

  let pervDiff = 0
  let currDiff = 0

  for (let i = 0; i < nums.length - 1; ++i) {
    currDiff = nums[i + 1] - nums[i]
    if ((pervDiff <= 0 && currDiff > 0) || (pervDiff >= 0 && currDiff < 0)) {
      result++
      pervDiff = currDiff
    }
  }

  return result

  /** Answer 2: Dynamic-progamming */
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('376.wiggle-subsequence', () => {
    expect(wiggleMaxLength([0, 0])).toMatchInlineSnapshot('1')
    expect(wiggleMaxLength([3, 3, 3, 2, 5])).toMatchInlineSnapshot('3')

    expect(wiggleMaxLength([1, 7, 4, 9, 2, 5])).toMatchInlineSnapshot('6')
    expect(
      wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])
    ).toMatchInlineSnapshot('7')
    expect(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9])).toMatchInlineSnapshot(
      '2'
    )
  })
}
