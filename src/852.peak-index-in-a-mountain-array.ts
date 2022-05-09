/*
 * @lc app=leetcode id=852 lang=typescript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
function peakIndexInMountainArray(arr: number[]): number {
  /** Answer 1  86ms/49.4% */
  // let i = 0
  // while (i < arr.length) {
  //   if (arr[i] > arr[i + 1]) return i

  //   i++
  // }

  /** Answer 2 */
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid

    if (arr[mid] > arr[mid - 1]) left = mid
    else if (arr[mid] > arr[mid + 1]) right = mid
  }

  return 0
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('852.peak-index-in-a-mountain-array', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toMatchInlineSnapshot('1')
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toMatchInlineSnapshot('1')
    expect(peakIndexInMountainArray([3, 5, 3, 2, 0])).toMatchInlineSnapshot('1')
  })
}
