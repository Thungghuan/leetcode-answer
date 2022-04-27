/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
 */

import { ListNode } from './types'

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

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false

  let slow = head
  let fast = head.next

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false
    }

    slow = slow.next!
    fast = fast.next.next!
  }

  return true
}
// @lc code=end
