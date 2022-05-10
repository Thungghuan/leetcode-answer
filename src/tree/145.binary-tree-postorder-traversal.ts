/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
 */

/**
 * 二叉树后序遍历（左右中）
 *
 * 1. 递归
 * 先递归左节点，然后递归右节点，最后访问根节点
 *
 * 2. 存取遍历栈
 * 从根节点开始
 * 栈弹出标记为根节点，存入结果
 * 先压入左节点，再压入右节点
 * 此时为中右左顺序
 * 反转数组
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
