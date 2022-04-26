/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const result: number[][] = [[]]
  const path: number[] = []

  function backtracking(start: number) {
    if (start >= nums.length) return

    for (let i = start; i < nums.length; ++i) {
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

  it('78.subsets', () => {
    expect(subsets([1, 2, 3])).toMatchInlineSnapshot(`
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
          3,
        ],
        [
          1,
          3,
        ],
        [
          2,
        ],
        [
          2,
          3,
        ],
        [
          3,
        ],
      ]
    `)

    expect(subsets([0])).toMatchInlineSnapshot(`
      [
        [],
        [
          0,
        ],
      ]
    `)
  })
}
