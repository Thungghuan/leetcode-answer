/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
function swap(nums: number[], i: number, j: number) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

function heapify(nums: number[], parent: number) {
  const left = parent * 2 + 1
  const right = parent * 2 + 2

  const length = nums.length
  let min = parent

  if (left < length && nums[left] < nums[min]) min = left
  if (right < length && nums[right] < nums[min]) min = right

  if (min !== parent) {
    swap(nums, min, parent)
    heapify(nums, min)
  }
}

function findKthLargest(nums: number[], k: number): number {
  /** Answer1: Heap Sort */
  const result = []

  for (let i = 0; i < nums.length; ++i) {
    if (i < k) {
      result.push(nums[i])
    } else if (nums[i] >= result[0]) {
      result[0] = nums[i]
    }

    for (let j = Math.floor(k / 2); j >= 0; j--) {
      heapify(result, j)
    }
  }

  return result[0]
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('215.kth-largest-element-in-an-array', () => {
    expect(
      findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
    ).toMatchInlineSnapshot('4')

    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toMatchInlineSnapshot('5')

    expect(findKthLargest([7, 6, 5, 4, 3, 2, 1], 5)).toMatchInlineSnapshot('3')
  })
}
