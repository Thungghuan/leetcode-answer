/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [[]]
  const path: number[] = []

  nums.sort((a, b) => a - b)

  function backtracking(start: number) {
    if (start >= nums.length) return

    for (let i = start; i < nums.length; ++i) {
      if (i !== start && nums[i] === nums[i - 1]) continue

      path.push(nums[i])
      result.push(path.slice())

      backtracking(i + 1)

      path.pop()
    }
  }

  backtracking(0)

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('90.subsets-ii', () => {
    expect(subsetsWithDup([1, 2, 2])).toMatchInlineSnapshot(`
      [
        [],
        [
          1,
        ],
        [
          1,
          2,
        ],
        [
          1,
          2,
          2,
        ],
        [
          2,
        ],
        [
          2,
          2,
        ],
      ]
    `)
  })
}
