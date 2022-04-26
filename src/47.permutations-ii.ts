/*
 * @lc app=leetcode id=47 lang=typescript
 *
 * [47] Permutations II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = []
  const path: number[] = []

  function backtracking(used: boolean[] = []) {
    if (path.length === nums.length) {
      result.push(path.slice())
      return
    }

    const uset = new Set<number>()

    for (let i = 0; i < nums.length; ++i) {
      if (used[i]) continue
      if (uset.has(nums[i])) continue

      uset.add(nums[i])

      used[i] = true
      path.push(nums[i])

      backtracking(used)

      used[i] = false
      path.pop()
    }
  }

  backtracking()

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('47.permutations-ii', () => {
    expect(permuteUnique([1, 1, 2])).toMatchInlineSnapshot(`
      [
        [
          1,
          1,
          2,
        ],
        [
          1,
          2,
          1,
        ],
        [
          2,
          1,
          1,
        ],
      ]
    `)
  })
}
