/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []

  let rows = matrix.length
  if (rows === 0) return []

  let columns = matrix[0].length

  let top = 0,
    bottom = rows - 1,
    left = 0,
    right = columns - 1

  while (left < right && top < bottom) {
    for (let x = left; x < right; ++x) result.push(matrix[top][x])
    for (let y = top; y < bottom; ++y) result.push(matrix[y][right])
    for (let x = right; x > left; --x) result.push(matrix[bottom][x])
    for (let y = bottom; y > top; --y) result.push(matrix[y][left])

    left++
    right--
    top++
    bottom--
  }

  if (left === right) {
    for (let y = top; y <= bottom; ++y) {
      result.push(matrix[y][left])
    }
  } else if (top === bottom) {
    for (let x = left; x <= right; ++x) {
      result.push(matrix[top][x])
    }
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('spiral-matrix', () => {
    expect(
      spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ])
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])

    expect(
      spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
      ])
    ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])

    expect(
      spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
        [17, 18, 19, 20]
      ])
    ).toMatchInlineSnapshot(`
      [
        1,
        2,
        3,
        4,
        8,
        12,
        16,
        20,
        19,
        18,
        17,
        13,
        9,
        5,
        6,
        7,
        11,
        15,
        14,
        10,
      ]
    `)
  })
}
