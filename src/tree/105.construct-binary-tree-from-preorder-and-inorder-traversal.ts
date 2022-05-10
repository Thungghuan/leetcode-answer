/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null

  const rootVal = preorder.shift()!
  const rootIdx = inorder.indexOf(rootVal)

  const root = new TreeNode(rootVal)
  root.left = buildTree(preorder.slice(0, rootIdx), inorder.slice(0, rootIdx))
  root.right = buildTree(preorder.slice(rootIdx), inorder.slice(rootIdx + 1))

  return root
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('105.construct-binary-tree-from-preorder-and-inorder-traversal', () => {
    expect(
      buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
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
