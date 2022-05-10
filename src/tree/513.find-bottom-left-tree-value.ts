/*
 * @lc app=leetcode id=513 lang=typescript
 *
 * [513] Find Bottom Left Tree Value
 */

import { createTree, TreeNode } from '../types'

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

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) return 0

  let result = 0
  const treeNodeQueue: TreeNode[] = [root]

  while (treeNodeQueue.length > 0) {
    const len = treeNodeQueue.length
    for (let i = 0; i < len; ++i) {
      const node = treeNodeQueue.shift()!

      if (i === 0) result = node.val
      node.left && treeNodeQueue.push(node.left)
      node.right && treeNodeQueue.push(node.right)
    }
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('513.find-bottom-left-tree-value', () => {
    expect(findBottomLeftValue(createTree([2, 1, 3]))).toMatchInlineSnapshot(
      '1'
    )
    expect(
      findBottomLeftValue(createTree([1, 2, 3, 4, null, 5, 6, null, null, 7]))
    ).toMatchInlineSnapshot('7')
  })
}
