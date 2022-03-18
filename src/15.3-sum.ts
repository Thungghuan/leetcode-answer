/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return []
  }

  nums.sort((a, b) => a - b)

  const result: number[][] = []
  for (let i = 0; i < nums.length - 2 && nums[i] <= 0; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let start = i + 1
    let end = nums.length - 1

    while (start < end) {
      if (nums[i] + nums[start] + nums[end] === 0) {
        result.push([nums[i], nums[start], nums[end]])
        start++
        end--

        while (nums[start] === nums[start - 1]) start++
        while (nums[end] === nums[end + 1]) end--
      } else if (nums[i] + nums[start] + nums[end] < 0) {
        start++
        while (nums[start] === nums[start - 1]) start++
      } else {
        end--
        while (nums[end] === nums[end + 1]) end--
      }
    }
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('three-sum', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1]
    ])

    expect(threeSum([0, 0, 0, 0])).toMatchInlineSnapshot(`
      [
        [
          0,
          0,
          0,
        ],
      ]
    `)

    expect(threeSum([])).toEqual([])
    expect(threeSum([0])).toEqual([])
  })
}
