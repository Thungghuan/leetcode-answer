/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let result = 0

  nums.map((n) => (result ^= n))

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('XOR', () => {
    expect(10 ^ 12).toMatchInlineSnapshot('6')
    expect(2 ^ 2 ^ 1).toMatchInlineSnapshot('1')

    expect(Number(10).toString(2)).toMatchInlineSnapshot('"1010"')
    expect(Number(12).toString(2)).toMatchInlineSnapshot('"1100"')
    expect(parseInt('0110', 2)).toMatchInlineSnapshot('6')
  })

  it('136.single-number', () => {
    expect(singleNumber([2, 1, 2])).toMatchInlineSnapshot('1')
    expect(singleNumber([4, 1, 2, 1, 2])).toMatchInlineSnapshot('4')
    expect(singleNumber([2])).toMatchInlineSnapshot('2')
  })
}
