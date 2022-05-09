/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []

  const result: number[] = []
  const nodeQueue: TreeNode[] = [root]

  while (nodeQueue.length > 0) {
    const nextLevel: TreeNode[] = []
    let rightSide: number

    while (nodeQueue.length > 0) {
      const node = nodeQueue.shift()!

      rightSide = node.val

      node.left && nextLevel.push(node.left)
      node.right && nextLevel.push(node.right)
    }

    result.push(rightSide!)
    nodeQueue.push(...nextLevel)
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('199.binary-tree-right-side-view', () => {
    expect(rightSideView(createTree([1, 2, 3, null, 5, null, 4])))
      .toMatchInlineSnapshot(`
      [
        1,
        3,
        4,
      ]
    `)
  })

  it('199.binary-tree-right-side-view', () => {
    expect(rightSideView(createTree([1, 2, 3, 4, 5, null, 6, null, 7])))
      .toMatchInlineSnapshot(`
      [
        1,
        3,
        6,
        7,
      ]
    `)
  })
}
