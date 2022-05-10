/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
 */

/** 
 * 二叉树最大深度
 * 
 * 1. 层序遍历
 * 
 * depth从0开始，遍历一次加一
 * 结果为层数
 * 
 * 2. 递归
 * 递归到最后一层时，
 * 从最后一层往上回溯，每层+1
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

function maxDepth(root: TreeNode | null): number {
  /** Answer2: recursion
   * Runtime: 122ms / 31.21%
   * Memory: 46.4MB / 70.4%
   */
  if (!root) return 0

  const left = maxDepth(root.left)
  const right = maxDepth(root.right)

  return 1 + Math.max(left, right)

  /** Answer1: queue
   * Runtime: 105ms / 56.99%
   * Memory: 47MB / 18.96%
   */
  // if (!root) return 0

  // const nodeQueue: TreeNode[] = [root]
  // let depth = 0

  // while (nodeQueue.length > 0) {
  //   const nextLevel: TreeNode[] = []

  //   while (nodeQueue.length > 0) {
  //     const node = nodeQueue.shift()!

  //     node.left && nextLevel.push(node.left)
  //     node.right && nextLevel.push(node.right)
  //   }

  //   nodeQueue.push(...nextLevel)
  //   depth++
  // }

  // return depth
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('104.maximum-depth-of-binary-tree', () => {
    expect(maxDepth(createTree([3, 9, 20, null, null, 15, 7]))).toBe(3)
  })

  it('104.maximum-depth-of-binary-tree', () => {
    expect(maxDepth(createTree([1, null, 2]))).toBe(2)
  })
}
