/*
 * @lc app=leetcode id=455 lang=typescript
 *
 * [455] Assign Cookies
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  let result = 0

  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)

  for (let gi = 0, si = 0; gi < g.length; gi++) {
    if (s[si] >= g[gi]) {
      si++
      result++
    }
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('455.assign-cookies', () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toMatchInlineSnapshot('1')
  })
}
