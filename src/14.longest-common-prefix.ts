/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {

  /** WTF Runtime: 27.76% ?? */
  for (let i = 0; i < strs[0].length; ++i) {
    for (let j = 1; j < strs.length; ++j) {
      if (strs[j].length < i + 1 || strs[j][i] !== strs[0][i]) {
        return strs[0].slice(0, i)
      }
    }
  }

  return strs[0]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('14.longest-common-prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
  })
}
