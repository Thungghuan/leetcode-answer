/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
  /** Answer2: Stack */
  const result: number[] = []
  const treeNodeStack: TreeNode[] = []
  let current: TreeNode | null = root

  while(current || treeNodeStack.length > 0) {
    if (current) {
      treeNodeStack.push(current)
      current = current.left
    } else {
      current = treeNodeStack.pop()!
      result.push(current.val)
      current = current.right
    }
  }

  return result

  /** Answer1: Recursion */
  // if(!root) return []

  // const result: number[] = []

  // result.push(...inorderTraversal(root.left))

  // result.push(root.val)

  // result.push(...inorderTraversal(root.right))

  // return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('94.binary-tree-inorder-traversal', () => {
    expect(inorderTraversal(createTree([1, null, 2, 3]))).toMatchInlineSnapshot(
      `
      [
        1,
        3,
        2,
      ]
    `
    )
  })
}
