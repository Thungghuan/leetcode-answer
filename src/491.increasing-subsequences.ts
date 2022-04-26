/*
 * @lc app=leetcode id=491 lang=typescript
 *
 * [491] Increasing Subsequences
 */

// @lc code=start
function findSubsequences(nums: number[]): number[][] {
  const result: number[][] = []
  const path: number[] = []

  function backtracking(start: number) {
    if (start >= nums.length) return

    const uset = new Set<number>()

    for (let i = start; i < nums.length; ++i) {
      if (nums[i] < path[path.length - 1]) continue
      if (uset.has(nums[i])) continue

      path.push(nums[i])
      uset.add(nums[i])

      if (path.length >= 2 && path.length <= nums.length) {
        result.push(path.slice())
      }

      backtracking(i + 1)

      path.pop()
    }
  }

  backtracking(0)

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('491.increasing-subsequences', () => {
    expect(findSubsequences([4, 6, 7, 7])).toEqual([
      [4, 6],
      [4, 6, 7],
      [4, 6, 7, 7],
      [4, 7],
      [4, 7, 7],
      [6, 7],
      [6, 7, 7],
      [7, 7]
    ])

    expect(findSubsequences([4, 4, 3, 2, 1])).toMatchInlineSnapshot(`
      [
        [
          4,
          4,
        ],
      ]
    `)

    expect(findSubsequences([4, 7, 6])).toMatchInlineSnapshot(`
      [
        [
          4,
          7,
        ],
        [
          4,
          6,
        ],
      ]
    `)
  })
}
