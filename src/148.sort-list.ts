/*
 * @lc app=leetcode id=148 lang=typescript
 *
 * [148] Sort List
 */

import { createLinkList, ListNode } from './types'

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: ListNode | null): ListNode | null {
  /** Answer 2 Merge sort
   * 
   * Runtime: 182ms / 74.26%
   * Memory: 58.1MB / 55.8%
   */
  if (!head || !head.next) return head

  let slow = head
  let fast: ListNode | null = head.next
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next.next
  }

  const mid = slow.next
  slow.next = null

  let l1 = sortList(head)
  let l2 = sortList(mid)

  const list = new ListNode()
  let current = list

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }
  current.next = l1 || l2

  return list.next

  /** Answer 1: Using the fucking insertion sort from question 147
   * time O(n^2) memory O(1)
   * Runtime: 1046ms / 17.39%
   * Memory: 54MB / 97.83%
   */
  // if (!head || !head.next) return head

  // let list = new ListNode(head.val, head)
  // let prev: ListNode | null = list
  // let cur: ListNode | null = head

  // while (cur) {
  //   if (prev.val <= cur.val) {
  //     prev = cur
  //     cur = cur.next
  //     continue
  //   }

  //   let p = list
  //   while (p.next && p.next.val <= cur!.val) {
  //     p = p.next
  //   }

  //   const tempNode = cur.next

  //   cur.next = p.next
  //   p.next = cur

  //   prev.next = tempNode
  //   cur = tempNode
  // }

  // return list.next
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('147.insertion-sort-list', () => {
    expect(sortList(createLinkList([4, 2, 1, 3]))).toMatchInlineSnapshot(
      `
      ListNode {
        "next": ListNode {
          "next": ListNode {
            "next": ListNode {
              "next": null,
              "val": 4,
            },
            "val": 3,
          },
          "val": 2,
        },
        "val": 1,
      }
    `
    )
  })
}
