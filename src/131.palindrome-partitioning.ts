/*
 * @lc app=leetcode id=131 lang=typescript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
function isPalindrom(s: string) {
  let start = 0
  let end = s.length - 1

  while (start < end) {
    if (s[start] !== s[end]) return false

    start++
    end--
  }

  return true
}

function partition(s: string): string[][] {
  const result: string[][] = []
  const path: string[] = []

  function backtracking(s: string, start: number) {
    if (start >= s.length) {
      result.push(path.slice())
      return
    }

    for (let i = start; i < s.length; ++i) {
      if (isPalindrom(s.slice(start, i + 1))) {
        path.push(s.slice(start, i + 1))
        backtracking(s, i + 1)
        path.pop()
      }
    }
  }

  backtracking(s, 0)

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('isPalindrom', () => {
    expect(isPalindrom('a')).toMatchInlineSnapshot('true')
    expect(isPalindrom('aa')).toMatchInlineSnapshot('true')
    expect(isPalindrom('aaa')).toMatchInlineSnapshot('true')
    expect(isPalindrom('aab')).toMatchInlineSnapshot('false')
  })

  it('131.palindrome-partitioning', () => {
    expect(partition('aab')).toMatchInlineSnapshot(`
    [
      [
        "a",
        "a",
        "b",
      ],
      [
        "aa",
        "b",
      ],
    ]
    `)
    expect(partition('ababa')).toMatchInlineSnapshot(`
      [
        [
          "a",
          "b",
          "a",
          "b",
          "a",
        ],
        [
          "a",
          "b",
          "aba",
        ],
        [
          "a",
          "bab",
          "a",
        ],
        [
          "aba",
          "b",
          "a",
        ],
        [
          "ababa",
        ],
      ]
    `)
  })
}
