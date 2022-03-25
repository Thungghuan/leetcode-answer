/*
 * @lc app=leetcode id=637 lang=typescript
 *
 * [637] Average of Levels in Binary Tree
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

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return []

  const nodeQueue: TreeNode[] = [root]
  const result: number[] = []

  while (nodeQueue.length > 0) {
    const nextLevel: TreeNode[] = []
    let sum = 0
    const length = nodeQueue.length

    while (nodeQueue.length > 0) {
      const node = nodeQueue.shift()!

      sum += node.val
      node.left && nextLevel.push(node.left)
      node.right && nextLevel.push(node.right)
    }

    result.push(sum / length)
    nodeQueue.push(...nextLevel)
  }

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('637.average-of-levels-in-binary-tree', () => {
    expect(averageOfLevels(createTree([3, 9, 20, null, null, 15, 7])))
      .toMatchInlineSnapshot(`
      [
        3,
        14.5,
        11,
      ]
    `)

    expect(averageOfLevels(createTree([3, 9, 20, 15, 7])))
      .toMatchInlineSnapshot(`
      [
        3,
        14.5,
        11,
      ]
    `)
  })
}
