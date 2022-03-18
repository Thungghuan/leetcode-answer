/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  /** Answer2: use Map:
   * Runtime: 97ms - 77.08%
   * Memory Usage: 45.2 MB
   */
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; ++i) {
    if (map.has(nums[i])) {
      return [map.get(nums[i])!, i]
    } else {
      map.set(target - nums[i], i)
    }
  }

  return []

  /**  Answer1: use array:
   * Runtime: 108ms - 67.42%
   * Memory Usage: 44.9 MB
   */
  // const result: number[] = []

  // for (let i = 0; i < nums.length; ++i) {
  //   let resultIdx = result.indexOf(nums[i])
  //   if (resultIdx > -1) {
  //     return [resultIdx, i]
  //   } else {
  //     result.push(target - nums[i])
  //   }
  // }

  // return []
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('two-sum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
}
