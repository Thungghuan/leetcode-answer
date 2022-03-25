/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  let depth = 0
  const nodeQueue: TreeNode[] = [root]

  while (nodeQueue.length > 0) {
    const nextLevel: TreeNode[] = []

    depth++

    while (nodeQueue.length > 0) {
      const node = nodeQueue.shift()!

      if (!node.left && !node.right) return depth

      node.left && nextLevel.push(node.left)
      node.right && nextLevel.push(node.right)
    }

    nodeQueue.push(...nextLevel)
  }

  return depth
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('111.minimum-depth-of-binary-tree', () => {
    expect(minDepth(createTree([3, 9, 20, null, null, 15, 7]))).toBe(2)
  })

  it('111.minimum-depth-of-binary-tree', () => {
    expect(minDepth(createTree([2, null, 3, null, 4, null, 5, null, 6]))).toBe(
      5
    )
  })
}
