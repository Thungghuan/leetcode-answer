/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
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

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []

  const result: number[] = []
  result.push(root.val)

  result.push(...preorderTraversal(root.left))
  result.push(...preorderTraversal(root.right))

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('144.binary-tree-preorder-traversal', () => {
    expect(preorderTraversal(createTree([1, null, 2, 3])))
      .toMatchInlineSnapshot(`
      [
        1,
        2,
        3,
      ]
    `)
  })
}
