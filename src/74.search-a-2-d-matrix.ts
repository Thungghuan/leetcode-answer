/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return false

  let row = matrix.length - 1
  let col = 0

  while(row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) return true

    if (matrix[row][col] > target) row--
    else col++
  }

  return false
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('74.search-a-2-d-matrix', () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60]
        ],
        3
      )
    ).toMatchInlineSnapshot('true')
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60]
        ],
        13
      )
    ).toMatchInlineSnapshot('false')

    expect(
      searchMatrix(
        [
          [1, 4],
          [2, 5]
        ],
        2
      )
    ).toMatchInlineSnapshot('true')
  })
}
