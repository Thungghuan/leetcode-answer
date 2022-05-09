/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  /**
   * Answer1
   * Runtime 53.48%
   * Memory 25.07%
   *
   */
  // let left = 0
  // let right = nums.length - 1
  // while (left <= right) {
  //   const middle = Math.floor((left + right) / 2)
  //   if (nums[middle] === target) return middle
  //   if (right - left <= 2) {
  //     if (nums[middle] < target) {
  //       return target <= nums[right] ? right : right + 1
  //     } else {
  //       return target <= nums[left] ? left : middle
  //     }
  //   }
  //   if (nums[middle] < target) left = middle + 1
  //   else if (nums[middle] > target) right = middle - 1
  // }
  // return -1


  /** 
   * Answer2 runtime 69.34%
   */
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (nums[middle] === target) return middle

    if (nums[middle] < target) left = middle + 1
    else if (nums[middle] > target) right = middle - 1
  }

  return left
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('35.search-insert-position', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toMatchInlineSnapshot('2')

    expect(searchInsert([1, 3, 5, 6], 4)).toMatchInlineSnapshot('2')

    expect(searchInsert([1, 3, 5, 6], 2)).toMatchInlineSnapshot('1')

    expect(searchInsert([1, 3, 5], 1)).toMatchInlineSnapshot('0')

    expect(searchInsert([1, 3], 2)).toMatchInlineSnapshot('1')
  })
}
