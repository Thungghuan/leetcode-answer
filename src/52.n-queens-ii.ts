/*
 * @lc app=leetcode id=52 lang=typescript
 *
 * [52] N-Queens II
 */

// @lc code=start

function totalNQueens(n: number): number {
  let result = 0
  const cols = new Set<number>()
  const rightDiag = new Set<number>()
  const leftDiag = new Set<number>()

  function backtracing(row: number) {
    if (row === n) {
      result++
      return
    }

    for (let col = 0; col < n; ++col) {
      if (
        !cols.has(col) &&
        !rightDiag.has(row + col) &&
        !leftDiag.has(row - col)
      ) {
        cols.add(col)
        rightDiag.add(row + col)
        leftDiag.add(row - col)

        backtracing(row + 1)

        cols.delete(col)
        rightDiag.delete(row + col)
        leftDiag.delete(row - col)
      }
    }
  }

  backtracing(0)

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('52.n-queens-ii', () => {
    expect(totalNQueens(1)).toBe(1)
    expect(totalNQueens(2)).toBe(0)
    expect(totalNQueens(3)).toBe(0)
    expect(totalNQueens(4)).toBe(2)
    expect(totalNQueens(5)).toBe(10)
    expect(totalNQueens(6)).toBe(4)
    expect(totalNQueens(7)).toBe(40)
    expect(totalNQueens(8)).toBe(92)
    expect(totalNQueens(9)).toBe(352)
  })
}
