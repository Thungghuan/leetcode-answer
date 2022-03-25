/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0

  const nodeQueue: TreeNode[] = [root]
  let depth = 0

  while (nodeQueue.length > 0) {
    const nextLevel: TreeNode[] = []

    while (nodeQueue.length > 0) {
      const node = nodeQueue.shift()!

      node.left && nextLevel.push(node.left)
      node.right && nextLevel.push(node.right)
    }

    nodeQueue.push(...nextLevel)
    depth++
  }

  return depth
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('104.maximum-depth-of-binary-tree', () => {
    expect(maxDepth(createTree([3, 9, 20, null, null, 15, 7]))).toBe(3)
  })

  it('104.maximum-depth-of-binary-tree', () => {
    expect(maxDepth(createTree([1, null, 2]))).toBe(2)
  })
}
