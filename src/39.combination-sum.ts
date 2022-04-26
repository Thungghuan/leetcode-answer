/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []
  const path: number[] = []

  function backtracking(start: number, sum: number) {
    if (sum > target) return

    if (sum === target) {
      result.push(path.slice())
      return
    }

    for (let i = start; i < candidates.length; ++i) {
      if (sum + candidates[i] > target) continue

      path.push(candidates[i])
      sum += candidates[i]

      backtracking(i, sum)

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

  it('39.combination-sum', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toMatchInlineSnapshot(`
      [
        [
          2,
          2,
          3,
        ],
        [
          7,
        ],
      ]
    `)

    expect(combinationSum([2, 7, 6, 3, 5, 1], 9)).toHaveLength(21)

    expect(combinationSum([1, 2, 3, 5, 6, 7], 9)).toEqual([
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 2],
      [1, 1, 1, 1, 1, 1, 3],
      [1, 1, 1, 1, 1, 2, 2],
      [1, 1, 1, 1, 2, 3],
      [1, 1, 1, 1, 5],
      [1, 1, 1, 2, 2, 2],
      [1, 1, 1, 3, 3],
      [1, 1, 1, 6],
      [1, 1, 2, 2, 3],
      [1, 1, 2, 5],
      [1, 1, 7],
      [1, 2, 2, 2, 2],
      [1, 2, 3, 3],
      [1, 2, 6],
      [1, 3, 5],
      [2, 2, 2, 3],
      [2, 2, 5],
      [2, 7],
      [3, 3, 3],
      [3, 6]
    ])
  })
}
