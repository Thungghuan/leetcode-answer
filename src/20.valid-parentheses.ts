/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const parenStack: string[] = []

  for (let i = 0; i < s.length; ++i) {
    switch (s[i]) {
      case '(':
      case '[':
      case '{':
        parenStack.push(s[i])
        break

      case ')':
        if (parenStack.pop() !== '(') return false
        break
      case ']':
        if (parenStack.pop() !== '[') return false
        break
      case '}':
        if (parenStack.pop() !== '{') return false
        break

      default:
        break
    }
  }

  return parenStack.length === 0
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('20.valid-parentheses', () => {
    expect(isValid('()[]{}')).toBeTruthy()
    expect(isValid('([({})])')).toBeTruthy()
    expect(isValid('[(])')).toBeFalsy()
  })
}
