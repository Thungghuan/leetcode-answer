/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
const directions = [
  [0, 1], // right
  [1, 0], // bottom
  [0, -1], // left
  [-1, 0] // top
]

function exist(board: string[][], word: string): boolean {
  const rows = board.length
  const cols = board[0].length

  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => false)
  )

  function dfs(row: number, col: number, wordIdx: number): boolean {
    if (board[row][col] !== word[wordIdx]) return false

    if (wordIdx === word.length - 1) return true

    visited[row][col] = true

    for (const direction of directions) {
      const [dx, dy] = direction
      const nextRow = row + dy
      const nextCol = col + dx

      if (
        nextRow < 0 ||
        nextRow >= rows ||
        nextCol < 0 ||
        nextCol >= cols ||
        visited[nextRow][nextCol]
      ) 
        continue

      if (dfs(nextRow, nextCol, wordIdx + 1)) return true
    }

    visited[row][col] = false

    return false
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true
    }
  }

  return false
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('79.word-search', () => {
    expect(
      exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E']
        ],
        'ABCCFSA'
      )
    ).toMatchInlineSnapshot('true')
  })
}
