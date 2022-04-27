/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
 */

import { ListNode, createLinkList, getLinkListValue } from './types'

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

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null

  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next!
    fast = fast.next.next!

    if (slow === fast) {
      slow = head

      while (slow !== fast) {
        slow = slow.next!
        fast = fast.next!
      }

      return slow
    }
  }

  return null
}
// @lc code=end
