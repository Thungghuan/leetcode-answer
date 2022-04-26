/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = []
  const path: number[] = []

  candidates.sort((a, b) => a - b)

  function backtracking(start: number, sum: number) {
    if (sum > target) return

    if (sum === target) {
      result.push(path.slice())
      return
    }

    for (
      let i = start;
      i <= candidates.length && sum + candidates[i] <= target;
      ++i
    ) {
      if (i > start && candidates[i] === candidates[i - 1]) continue

      path.push(candidates[i])
      sum += candidates[i]

      backtracking(i + 1, sum)

      path.pop()
      sum -= candidates[i]
    }
  }

  backtracking(0, 0)

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('40.combination-sum-ii', () => {
    expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toMatchInlineSnapshot(
      `
      [
        [
          1,
          1,
          6,
        ],
        [
          1,
          2,
          5,
        ],
        [
          1,
          7,
        ],
        [
          2,
          6,
        ],
      ]
    `
    )
  })
}
