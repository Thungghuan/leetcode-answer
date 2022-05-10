/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 */

/**
 * 对称二叉树
 * 
 * 左节点压入左、右节点
 * 右节点压入右、左节点
 * 
 * 弹出节点并对比
 * 
 * 继续压栈
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false

  const left: TreeNode | null = root.left
  const right: TreeNode | null = root.right

  const treeNodeStack: (TreeNode | null)[] = [left, right]

  while (treeNodeStack.length > 0) {
    const leftNode = treeNodeStack.pop()
    const rightNode = treeNodeStack.pop()

    // both are null
    if (!leftNode && !rightNode) {
      continue
    } else if (!leftNode || !rightNode) {
      // only one is null
      return false
    }

    if (leftNode.val !== rightNode.val) return false

    treeNodeStack.push(leftNode.left)
    treeNodeStack.push(rightNode.right)

    treeNodeStack.push(leftNode.right)
    treeNodeStack.push(rightNode.left)
  }

  return true
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('101.symmetric-tree', () => {
    expect(
      isSymmetric(createTree([1, 2, 2, 3, 4, 4, 3]))
    ).toMatchInlineSnapshot('true')
  })

  it('101.symmetric-tree', () => {
    expect(
      isSymmetric(createTree([1, 2, 2, null, 3, null, 3]))
    ).toMatchInlineSnapshot('false')
  })

  it('101.symmetric-tree', () => {
    expect(isSymmetric(createTree([1]))).toMatchInlineSnapshot('true')
  })
}
