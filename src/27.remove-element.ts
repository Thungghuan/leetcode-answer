/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // for (let i = nums.length - 1; i >= 0; --i) {
  //   if (nums[i] === val) nums.splice(i, 1)
  // }

  // return nums.length

  let slow = 0
  let fast = 0
  const len = nums.length

  while (fast < len) {
    while (nums[fast] === val) fast++

    if (fast !== len) {
      nums[slow] = nums[fast]

      slow++
      fast++
    }
  }

  return slow
}
// @lc code=end

// const testArray = [0, 1, 2, 2, 3, 0, 4, 2]
// const testVal = 2
// console.log(removeElement(testArray, testVal))
// console.log(testArray)

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('27.remove-element', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toMatchInlineSnapshot('2')
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toMatchInlineSnapshot(
      '5'
    )
    expect(removeElement([0], 0)).toMatchInlineSnapshot('0')
  })
}
