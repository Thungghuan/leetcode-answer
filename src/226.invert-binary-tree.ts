/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  const tempNode = root.left
  root.left = root.right
  root.right = tempNode

  invertTree(root.left)
  invertTree(root.right)

  return root
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('226.invert-binary-tree', () => {
    expect(invertTree(createTree([4, 2, 7, 1, 3, 6, 9]))).toMatchInlineSnapshot(`
      TreeNode {
        "left": TreeNode {
          "left": TreeNode {
            "left": null,
            "right": null,
            "val": 9,
          },
          "right": TreeNode {
            "left": null,
            "right": null,
            "val": 6,
          },
          "val": 7,
        },
        "right": TreeNode {
          "left": TreeNode {
            "left": null,
            "right": null,
            "val": 3,
          },
          "right": TreeNode {
            "left": null,
            "right": null,
            "val": 1,
          },
          "val": 2,
        },
        "val": 4,
      }
    `)
  })
}
