/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
 */

/**
 * 二叉树前序遍历（中左右）
 *
 * 1. 递归
 * 先访问根节点，递归左节点，然后递归右节点
 *
 * 2. 存取遍历栈
 * 从根节点开始
 * 栈弹出标记为根节点，存入结果
 * 先压入右节点，再压入左节点
 *
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

function preorderTraversal(root: TreeNode | null): number[] {
  /** Answer2: Stack */
  const result: number[] = []
  const treeNodeStack: TreeNode[] = []

  root && treeNodeStack.push(root)

  while (treeNodeStack.length > 0) {
    const node = treeNodeStack.pop()

    node?.val && result.push(node.val)
    node?.right && treeNodeStack.push(node.right)
    node?.left && treeNodeStack.push(node.left)
  }

  return result

  /** Answer1: Recursion */
  // if (!root) return []

  // const result: number[] = []
  // result.push(root.val)

  // result.push(...preorderTraversal(root.left))
  // result.push(...preorderTraversal(root.right))

  // return result
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

    expect(preorderTraversal(createTree([]))).toMatchInlineSnapshot('[]')
  })
}
