/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  const operands: number[] = []

  for (let i = 0; i < tokens.length; ++i) {
    const token = tokens[i]

    if (token === '+' || token === '-' || token === '*' || token === '/') {
      const right = operands.pop()!
      const left = operands.pop()!

      switch (token) {
        case '+':
          operands.push(left + right)
          break
        case '-':
          operands.push(left - right)
          break
        case '*':
          operands.push(left * right)
          break
        case '/':
          const answer = left / right
          operands.push(answer >= 0 ? Math.floor(answer) : Math.ceil(answer))
          break
        default:
          break
      }
    } else {
      operands.push(parseInt(token))
    }
  }

  return operands[0]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('150.evaluate-reverse-polish-notation', () => {
    expect(
      evalRPN([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+'
      ])
    ).toMatchInlineSnapshot('22')
  })
}
