/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length < 1) return null

  const mid = Math.floor(nums.length / 2)

  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))

  return root
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('108.convert-sorted-array-to-binary-search-tree', () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toMatchInlineSnapshot(`
      TreeNode {
        "left": TreeNode {
          "left": TreeNode {
            "left": null,
            "right": null,
            "val": -10,
          },
          "right": null,
          "val": -3,
        },
        "right": TreeNode {
          "left": TreeNode {
            "left": null,
            "right": null,
            "val": 5,
          },
          "right": null,
          "val": 9,
        },
        "val": 0,
      }
    `)
  })
}
