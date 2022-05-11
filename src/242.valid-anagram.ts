/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const vocabulary = new Map<string, number>()

  for (let i = 0; i < s.length; ++i) {
    if (vocabulary.has(s[i])) {
      vocabulary.set(s[i], vocabulary.get(s[i])! + 1)
    } else {
      vocabulary.set(s[i], 1)
    }
  }

  for (let i = 0; i < t.length; ++i) {
    if (!vocabulary.has(t[i]) || vocabulary.get(t[i])! < 1) return false

    vocabulary.set(t[i], vocabulary.get(t[i])! - 1)
  }

  return true
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('242.valid-anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toMatchInlineSnapshot('true')
    expect(isAnagram('rat', 'car')).toMatchInlineSnapshot('false')
    expect(isAnagram('ab', 'ba')).toMatchInlineSnapshot('true')
  })
}
