/*
 * @lc app=leetcode id=106 lang=typescript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 */

import { TreeNode } from '../types'

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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0) return null

  const rootVal = postorder.pop()!
  const rootIdx = inorder.indexOf(rootVal)

  const root = new TreeNode(rootVal)
  root.left = buildTree(inorder.slice(0, rootIdx), postorder.slice(0, rootIdx))
  root.right = buildTree(inorder.slice(rootIdx + 1), postorder.slice(rootIdx))

  return root
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('106.construct-binary-tree-from-inorder-and-postorder-traversal', () => {
    expect(
      buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
    ).toMatchInlineSnapshot(`
      TreeNode {
        "left": TreeNode {
          "left": null,
          "right": null,
          "val": 9,
        },
        "right": TreeNode {
          "left": TreeNode {
            "left": null,
            "right": null,
            "val": 15,
          },
          "right": TreeNode {
            "left": null,
            "right": null,
            "val": 7,
          },
          "val": 20,
        },
        "val": 3,
      }
    `)
  })
}
