/*
 * @lc app=leetcode id=73 lang=typescript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  /**
   * Answer 1
   *
   * runtime O(mn)
   * memory O(m+n)
   *
   */
  // const rows = new Set<number>()
  // const columns = new Set<number>()

  // for (let i = 0; i < matrix.length; ++i) {
  //   for (let j = 0; j < matrix[0].length; ++j) {
  //     if (matrix[i][j] === 0) {
  //       rows.add(i)
  //       columns.add(j)
  //     }
  //   }
  // }

  // for (let i = 0; i < matrix.length; ++i) {
  //   for (let j = 0; j < matrix[0].length; ++j) {
  //     if (rows.has(i) || columns.has(j)) matrix[i][j] = 0
  //   }
  // }

  /**
   * Answer 2
   *
   * runtime O(mn)
   * memory O(1)
   *
   */

  let firstRowZero = false
  let firstColZero = false

  for (let i = 0; i < matrix[0].length; ++i) {
    if (matrix[0][i] === 0) firstRowZero = true
  }

  for (let i = 0; i < matrix.length; ++i) {
    if (matrix[i][0] === 0) firstColZero = true
  }

  for (let i = 1; i < matrix.length; ++i) {
    for (let j = 1; j < matrix[0].length; ++j) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  for (let i = 1; i < matrix.length; ++i) {
    for (let j = 1; j < matrix[0].length; ++j) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  for (let i = 0; i < matrix.length; ++i) {
    if (firstColZero) {
      matrix[i][0] = 0
    }
  }

  for (let i = 0; i < matrix[0].length; ++i) {
    if (firstRowZero) {
      matrix[0][i] = 0
    }
  }
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('73.set-matrix-zeroes', () => {
    function getZerosMatrix(matrix: number[][]) {
      setZeroes(matrix)
      return matrix
    }

    expect(
      getZerosMatrix([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ])
    ).toMatchInlineSnapshot(`
      [
        [
          1,
          0,
          1,
        ],
        [
          0,
          0,
          0,
        ],
        [
          1,
          0,
          1,
        ],
      ]
    `)

    expect(
      getZerosMatrix([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
      ])
    ).toMatchInlineSnapshot(`
      [
        [
          0,
          0,
          0,
          0,
        ],
        [
          0,
          4,
          5,
          0,
        ],
        [
          0,
          3,
          1,
          0,
        ],
      ]
    `)
  })
}
