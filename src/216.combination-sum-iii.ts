/*
 * @lc app=leetcode id=216 lang=typescript
 *
 * [216] Combination Sum III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  /**
   * Edge case (Not faster)
   *
   * k = 1  => 9 = 9 * 1 - 0
   * k = 2  => 8 + 9 = 9 * 2 - 1
   * k = 3  => 7 + 8 + 9 = 9 * 3 - (1 + 2) =  9 * 3 - (1 + (3 - 1)) * (3 - 1) / 2
   * k = 4  => 6 + 7 + 8 + 9 = 9 * 3 - (1 + 2 + 3)
   * k = 5  => 5 + 6 + 7 + 8 + 9
   *
   */
  if (n > 9 * k - (k * (k - 1)) / 2) return []

  const result: number[][] = []
  const path: number[] = []

  function backtracking(k: number, n: number, start: number, sum: number) {
    if (sum > n) return

    if (path.length === k) {
      if (sum === n) result.push(path.slice())

      return
    }

    for (let i = start; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i)
      sum += i

      backtracking(k, n, i + 1, sum)

      path.pop()
      sum -= i
    }
  }

  backtracking(k, n, 1, 0)

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('216.combination-sum-iii', () => {
    expect([1, 2, 3].reduce((prev, curr) => prev + curr)).toBe(6)

    expect(combinationSum3(4, 1)).toEqual([])
    expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]])
    expect(combinationSum3(3, 9)).toEqual([
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4]
    ])
  })

  it('edge case', () => {
    expect(
      Array.from({ length: 9 }, (_, i) => i + 1).map(
        (v) => 9 * v - (v * (v - 1)) / 2
      )
    ).toMatchInlineSnapshot(`
      [
        9,
        17,
        24,
        30,
        35,
        39,
        42,
        44,
        45,
      ]
    `)
  })
}
