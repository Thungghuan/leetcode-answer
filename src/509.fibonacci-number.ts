/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number): number {
  /** Answer2: Recursion
   *  Runtime: 84ms / 69.8%
   *  Memory:  43.4MB / 17.84%
   */
  if (n <= 1) return n

  return fib(n - 1) + fib(n - 2)

  /** Answer1: Iteration
   *  Runtime: 82ms /  70.98%
   *  Memory:  42.6MB / 83.14%
   */
  // if (n === 0) return 0
  // if (n === 1) return 1

  // const dp: number[] = [0, 1]
  // for (let i = 2; i <= n; ++i) {
  //   const sum = dp[0] + dp[1]
  //   dp[0] = dp[1]
  //   dp[1] = sum
  // }

  // return dp[1]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('509.fibonacci-number', () => {
    expect(fib(2)).toBe(1)
    expect(fib(3)).toBe(2)
    expect(fib(4)).toBe(3)
  })
}
