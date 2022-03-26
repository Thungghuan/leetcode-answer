/*
 * @lc app=leetcode id=113 lang=typescript
 *
 * [113] Path Sum II
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return []

  const findSum = (
    root: TreeNode,
    nodes: number[],
    sum: number = 0
  ): number[][] => {
    sum += root.val
    nodes = [...nodes, root.val]

    const result: number[][] = []

    if (!root.left && !root.right) {
      return sum === targetSum ? [nodes] : []
    }

    root.left && result.push(...findSum(root.left, nodes, sum))
    root.right && result.push(...findSum(root.right, nodes, sum))

    return result
  }

  return findSum(root, [])
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('113.path-sum-ii', () => {
    expect(
      pathSum(
        createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]),
        22
      )
    ).toMatchInlineSnapshot(`
      [
        [
          5,
          4,
          11,
          2,
        ],
        [
          5,
          8,
          4,
          5,
        ],
      ]
    `)

    expect(pathSum(createTree([1, 2, 3]), 5)).toMatchInlineSnapshot('[]')
    expect(pathSum(createTree([1, 2]), 0)).toMatchInlineSnapshot('[]')
  })
}
