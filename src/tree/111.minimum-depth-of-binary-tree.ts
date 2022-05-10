/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
 */

/** 
 * 二叉树最小深度
 * 
 * 1. 层序遍历
 * 
 * 按层序遍历每层元素，并逐层计算depth
 * 当遍历到一个没有子节点的元素时
 * 即到达最小深度
 * 
 * 2. 递归
 * 递归到无左子节点或右节点时
 * 递归另一边子节点并 + 1
 * 
 * 否则返回左右子树层数最小值并+1
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

function minDepth(root: TreeNode | null): number {
  /** Answer2: recursion
   * Runtime: 454ms / 6.21%
   * Memory: 100.9MB / 7.91%å
   */

  const dfs = (root: TreeNode | null): number => {
    if (!root) return 0
    if (!root.left) return 1 + dfs(root.right)
    if (!root.right) return 1 + dfs(root.left)
    return Math.min(dfs(root.left), dfs(root.right)) + 1
  }

  return dfs(root)

  /** Answer1: queue
   * Runtime: 320ms / 63.28%
   * Memory: 97.4MB / 81.92%
   */
  // if (!root) return 0

  // let depth = 0
  // const nodeQueue: TreeNode[] = [root]

  // while (nodeQueue.length > 0) {
  //   const nextLevel: TreeNode[] = []

  //   depth++

  //   while (nodeQueue.length > 0) {
  //     const node = nodeQueue.shift()!

  //     if (!node.left && !node.right) return depth

  //     node.left && nextLevel.push(node.left)
  //     node.right && nextLevel.push(node.right)
  //   }

  //   nodeQueue.push(...nextLevel)
  // }

  // return depth
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('111.minimum-depth-of-binary-tree', () => {
    expect(minDepth(createTree([3, 9, 20, null, null, 15, 7]))).toBe(2)
  })

  it('111.minimum-depth-of-binary-tree', () => {
    expect(minDepth(createTree([2, null, 3, null, 4, null, 5, null, 6]))).toBe(
      5
    )
  })
}
