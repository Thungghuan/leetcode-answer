/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return []

  const letterMap = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ]

  const result: string[] = []
  const path: string[] = []

  function backtracking(index: number = 0) {
    if (index === digits.length) {
      result.push(path.join(''))
      return
    }

    const letters = letterMap[+digits[index]]
    for (let i = 0; i < letters.length; ++i) {
      path.push(letters[i])
      backtracking(index + 1)
      path.pop()
    }
  }

  backtracking()

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('17.letter-combinations-of-a-phone-number', () => {
    expect(letterCombinations('23')).toMatchInlineSnapshot(`
      [
        "ad",
        "ae",
        "af",
        "bd",
        "be",
        "bf",
        "cd",
        "ce",
        "cf",
      ]
    `)

    expect(letterCombinations('')).toMatchInlineSnapshot('[]')

    expect(letterCombinations('2')).toMatchInlineSnapshot(`
      [
        "a",
        "b",
        "c",
      ]
    `)
  })
}
