/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const result: number[][] = []
  const path: number[] = []

  function backtracking(used: boolean[] = []) {
    if (path.length === nums.length) {
      result.push(path.slice())
      return
    }

    for (let i = 0; i < nums.length; ++i) {
      if (used[i]) continue

      used[i] = true
      path.push(nums[i])

      backtracking(used)

      path.pop()
      used[i] = false
    }
  }

  backtracking()

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('46.permutations', () => {
    expect(permute([1, 2, 3])).toMatchInlineSnapshot(`
      [
        [
          1,
          2,
          3,
        ],
        [
          1,
          3,
          2,
        ],
        [
          2,
          1,
          3,
        ],
        [
          2,
          3,
          1,
        ],
        [
          3,
          1,
          2,
        ],
        [
          3,
          2,
          1,
        ],
      ]
    `)

    expect(permute([1])).toMatchInlineSnapshot(`
      [
        [
          1,
        ],
      ]
    `)

    expect(permute([1, 0])).toMatchInlineSnapshot(`
      [
        [
          1,
          0,
        ],
        [
          0,
          1,
        ],
      ]
    `)
  })
}
