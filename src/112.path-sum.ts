/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
 */

import { createTree, TreeNode } from './types'

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false

  const findSum = (root: TreeNode, sum: number): boolean => {
    sum += root.val

    if (!root.left && !root.right) return sum === targetSum

    const leftSum = root.left ? findSum(root.left, sum) : false
    const rightSum = root.right ? findSum(root.right, sum) : false

    return leftSum || rightSum
  }

  return findSum(root, 0)
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('112.path-sum', () => {
    expect(
      hasPathSum(
        createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
        22
      )
    ).toBeTruthy()

    expect(hasPathSum(createTree([1, 2, 3]), 5)).toBeFalsy()

    expect(hasPathSum(createTree([]), 0)).toBeFalsy()
  })
}
