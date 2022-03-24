/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  const nodeQueue: TreeNode[] = [root]
  const result: number[][] = []

  while (nodeQueue.length > 0) {
    const levelNodes: number[] = []
    const tempNodes: TreeNode[] = []

    while (nodeQueue.length > 0) {
      const node = nodeQueue.shift()!

      levelNodes.push(node.val)

      node.left && tempNodes.push(node.left)
      node.right && tempNodes.push(node.right)
    }

    result.push(levelNodes)
    nodeQueue.push(...tempNodes)
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('102.binary-tree-level-order-traversal', () => {
    expect(levelOrder(createTree([3, 9, 20, null, null, 15, 7]))).toEqual([
      [3],
      [9, 20],
      [15, 7]
    ])
  })

  it('102.binary-tree-level-order-traversal', () => {
    expect(
      levelOrder(createTree([0, 2, 4, 1, null, 3, -1, 5, 1, null, 6, null, 8]))
    ).toEqual([[0], [2, 4], [1, 3, -1], [5, 1, 6, 8]])
  })
}
