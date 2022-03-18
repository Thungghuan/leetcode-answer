/*
 * @lc app=leetcode id=18 lang=typescript
 *
 * [18] 4Sum
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) return []

  nums.sort((a, b) => a - b)

  const result: number[][] = []

  for (let i = 0; i < nums.length - 3; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    for (let j = i + 1; j < nums.length - 2; ++j) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      let start = j + 1
      let end = nums.length - 1
      while (start < end) {
        const sum = nums[i] + nums[j] + nums[start] + nums[end]
        if (sum === target) {
          result.push([nums[i], nums[j], nums[start], nums[end]])

          start++
          while (nums[start] === nums[start - 1]) start++
          end--
          while (nums[end] === nums[end + 1]) end--
        } else if (sum < target) {
          start++
          while (nums[start] === nums[start - 1]) start++
        } else {
          end--
          while (nums[end] === nums[end + 1]) end--
        }
      }
    }
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('four-sum', () => {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toMatchInlineSnapshot(`
      [
        [
          -2,
          -1,
          1,
          2,
        ],
        [
          -2,
          0,
          0,
          2,
        ],
        [
          -1,
          0,
          0,
          1,
        ],
      ]
    `)

    expect(fourSum([2, 2, 2, 2, 2], 8)).toMatchInlineSnapshot(`
      [
        [
          2,
          2,
          2,
          2,
        ],
      ]
    `)
  })
}
