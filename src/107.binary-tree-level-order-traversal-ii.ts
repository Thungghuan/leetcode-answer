/*
 * @lc app=leetcode id=107 lang=typescript
 *
 * [107] Binary Tree Level Order Traversal II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) return []

  const nodeQueue: (TreeNode | null)[] = [root]
  const result: number[][] = []

  while (nodeQueue.length > 0) {
    const levelNodes: number[] = []
    const tempNodes: TreeNode[] = []

    while(nodeQueue.length > 0) {
      const node = nodeQueue.shift()!

      levelNodes.push(node.val)

      node.left && tempNodes.push(node.left)
      node.right && tempNodes.push(node.right)
    }

    result.unshift(levelNodes)
    nodeQueue.push(...tempNodes)
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('107.binary-tree-level-order-traversal-ii', () => {
    expect(
      levelOrderBottom(createTree([3, 9, 20, null, null, 15, 7]))
    ).toMatchInlineSnapshot(`
      [
        [
          15,
          7,
        ],
        [
          9,
          20,
        ],
        [
          3,
        ],
      ]
    `)
  })
}
