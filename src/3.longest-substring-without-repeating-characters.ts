/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let length = 0
  const chars = new Set<string>()

  let start = 0
  let end = 0

  for (let i = 0; i < s.length; ++i) {
    while (chars.has(s[i])) {
      chars.delete(s[start])
      start++
    }

    chars.add(s[i])
    length = Math.max(length, end - start + 1)
    end++
  }

  return length
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('3.longest-substring-without-repeating-characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toMatchInlineSnapshot('3')

    expect(lengthOfLongestSubstring('bbbbb')).toMatchInlineSnapshot('1')

    expect(lengthOfLongestSubstring('pwwkew')).toMatchInlineSnapshot('3')
  })

  it('string-slice', () => {
    expect('abcdefg'.slice(1)).toMatchInlineSnapshot('"bcdefg"')
  })
}
