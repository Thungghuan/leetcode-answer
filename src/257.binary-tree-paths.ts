/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) return []

  const findPaths = (root: TreeNode, path: string): string[] => {
    const currentPath = path + root.val

    if (!root.left && !root.right) return [currentPath]

    const paths: string[] = []

    root.left && paths.push(...findPaths(root.left, currentPath + '->'))
    root.right && paths.push(...findPaths(root.right, currentPath + '->'))

    return paths
  }

  return findPaths(root, '')
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('257.binary-tree-paths', () => {
    expect(binaryTreePaths(createTree([1, 2, 3, null, 5])))
      .toMatchInlineSnapshot(`
        [
          "1->2->5",
          "1->3",
        ]
      `)

    expect(binaryTreePaths(createTree([1]))).toMatchInlineSnapshot(`
        [
          "1",
        ]
      `)

    expect(binaryTreePaths(createTree([1, 2, 3, 3, 4, null, 5])))
      .toMatchInlineSnapshot(`
        [
          "1->2->3",
          "1->2->4",
          "1->3->5",
        ]
      `)
  })
}
