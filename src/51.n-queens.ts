/*
 * @lc app=leetcode id=51 lang=typescript
 *
 * [51] N-Queens
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
  const result: string[][] = []
  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => '.')
  )

  const cols = new Set<number>()
  const rightDiag = new Set<number>()
  const leftDiag = new Set<number>()

  function backtracing(row: number) {
    if (row === n) {
      const answer: string[] = []
      for (let i = 0; i < n; i++) {
        answer.push(board[i].join(''))
      }
      result.push(answer)
      return
    }

    for (let col = 0; col < n; ++col) {
      if (
        !cols.has(col) &&
        !rightDiag.has(row + col) &&
        !leftDiag.has(row - col)
      ) {
        board[row][col] = 'Q'
        cols.add(col)
        rightDiag.add(row + col)
        leftDiag.add(row - col)

        backtracing(row + 1)

        board[row][col] = '.'
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

  it('51.n-queens', () => {
    expect(solveNQueens(5)).toMatchInlineSnapshot(`
      [
        [
          "Q....",
          "..Q..",
          "....Q",
          ".Q...",
          "...Q.",
        ],
        [
          "Q....",
          "...Q.",
          ".Q...",
          "....Q",
          "..Q..",
        ],
        [
          ".Q...",
          "...Q.",
          "Q....",
          "..Q..",
          "....Q",
        ],
        [
          ".Q...",
          "....Q",
          "..Q..",
          "Q....",
          "...Q.",
        ],
        [
          "..Q..",
          "Q....",
          "...Q.",
          ".Q...",
          "....Q",
        ],
        [
          "..Q..",
          "....Q",
          ".Q...",
          "...Q.",
          "Q....",
        ],
        [
          "...Q.",
          "Q....",
          "..Q..",
          "....Q",
          ".Q...",
        ],
        [
          "...Q.",
          ".Q...",
          "....Q",
          "..Q..",
          "Q....",
        ],
        [
          "....Q",
          ".Q...",
          "...Q.",
          "Q....",
          "..Q..",
        ],
        [
          "....Q",
          "..Q..",
          "Q....",
          "...Q.",
          ".Q...",
        ],
      ]
    `)
  })
}
