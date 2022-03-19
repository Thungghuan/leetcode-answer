/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  /** Answer2: Stack
   * Runtime: 84.51%
   * Memory: 33.8%
   */

  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const result: (string | null)[] = []
  const vowelStack: string[] = []

  for (let i = 0; i < s.length; ++i) {
    if (!vowels.includes(s[i])) {
      result.push(s[i])
    } else {
      result.push(null)
      vowelStack.push(s[i])
    }
  }

  return result.map((c) => (c === null ? vowelStack.pop() : c)).join('')

  /** Answer1: Two pointers
   * Runtime: 85.77%
   * Memory: 69.01%
   */
  // const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  // const chars = s.split('')

  // let start = 0
  // let end = s.length - 1

  // while (start < end) {
  //   if (vowels.includes(chars[start]) && vowels.includes(chars[end])) {
  //     const temp = chars[start]
  //     chars[start] = chars[end]
  //     chars[end] = temp

  //     start++
  //     end--
  //   } else {
  //     while (!vowels.includes(chars[start]) && start < end) start++
  //     while (!vowels.includes(chars[end]) && start < end) end--
  //   }
  // }

  // return chars.join('')
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('345.reverse-vowels-of-a-string', () => {
    expect(reverseVowels('hello')).toEqual('holle')
    expect(reverseVowels('leetcode')).toEqual('leotcede')

    expect(reverseVowels('.,')).toMatchInlineSnapshot('".,"')
  })
}
