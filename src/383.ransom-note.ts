/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  /** Answer 2
   * Runtime: 70.07%
   * Memory: 45.26%
   */
  const magazineMap = Array.from({ length: 26 }, () => 0)

  for (let i = 0; i < magazine.length; ++i) {
    magazineMap[magazine[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  for (let i = 0; i < ransomNote.length; ++i) {
    magazineMap[ransomNote[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
  }

  for (let i = 0; i < magazineMap.length; i++) {
    if (magazineMap[i] < 0) return false
  }

  return true

  /** Answer1
   * Runtime: 82.48%
   * Memory: 39.42%
   */
  // const chars: string[] = magazine.split('')
  // let result = true
  // for (let i = 0; i < ransomNote.length; ++i) {
  //   let contains = false
  //   let j = 0
  //   while (j < chars.length) {
  //     if (chars[j] === ransomNote[i]) {
  //       contains = true
  //       chars.splice(j, 1)
  //       break
  //     } else {
  //       j++
  //     }
  //   }
  //   if (!contains) return false
  // }
  // return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('383.ransom-note', () => {
    expect(canConstruct('a', 'b')).toBe(false)
    expect(canConstruct('aa', 'ab')).toBe(false)
    expect(canConstruct('aa', 'aab')).toBe(true)
  })

  it('array.splice()', () => {
    const array = ['a', 'a', 'b']
    array.splice(0, 1)

    expect(array).toMatchInlineSnapshot(`
      [
        "a",
        "b",
      ]
    `)
  })

  it('char code', () => {
    expect('c'.charCodeAt(0)).toMatchInlineSnapshot('99')
    expect('a'.charCodeAt(0)).toMatchInlineSnapshot('97')
    expect('c'.charCodeAt(0) - 'a'.charCodeAt(0)).toBe(2)
  })
}
