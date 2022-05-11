/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return false

  const m = matrix.length
  const n = matrix[0].length
  const len = m * n

  let left = 0
  let right = len - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const row = Math.floor(mid / n)
    const col = mid % n

    if (matrix[row][col] === target) return true

    if (matrix[row][col] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
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
  })
}
