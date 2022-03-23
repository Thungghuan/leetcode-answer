/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
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

function postorderTraversal(root: TreeNode | null): number[] {
  /** Answer2: Stack */
  const result: number[] = []
  const treeNodeStack: TreeNode[] = []

  root && treeNodeStack.push(root)

  while (treeNodeStack.length > 0) {
    const node = treeNodeStack.pop()

    node?.val && result.push(node.val)

    node?.left && treeNodeStack.push(node.left)
    node?.right && treeNodeStack.push(node.right)
  }

  return result.reverse()

  /** Answer1: Recursion */
  // if (!root) return []

  // const result: number[] = []

  // result.push(...postorderTraversal(root.left))
  // result.push(...postorderTraversal(root.right))

  // result.push(root.val)

  // return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('145.binary-tree-postorder-traversal', () => {
    expect(postorderTraversal(createTree([1, null, 2, 3])))
      .toMatchInlineSnapshot(`
        [
          3,
          2,
          1,
        ]
      `)
  })
}
