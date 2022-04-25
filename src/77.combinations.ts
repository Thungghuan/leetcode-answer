/*
 * @lc app=leetcode id=77 lang=typescript
 *
 * [77] Combinations
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const result: number[][] = []
  const path: number[] = []

  function backtracking(n: number, k: number, start: number) {
    if (path.length === k) {
      result.push(path.slice())
      return
    }

    // for (let i = start; i <= n; ++i) {
    for (let i = start; i <= n - (k - path.length) + 1; ++i) {
      path.push(i)
      backtracking(n, k, i + 1)
      path.pop()
    }
  }

  backtracking(n, k, 1)

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('77.combinations', () => {
    expect(combine(4, 2)).toMatchInlineSnapshot(`
      [
        [
          1,
          2,
        ],
        [
          1,
          3,
        ],
        [
          1,
          4,
        ],
        [
          2,
          3,
        ],
        [
          2,
          4,
        ],
        [
          3,
          4,
        ],
      ]
    `)
  })
}
