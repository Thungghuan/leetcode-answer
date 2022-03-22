/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

import { createLinkList, getLinkListValue, ListNode } from './types'

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

function reverseList(head: ListNode | null): ListNode | null {
  /** Answer2: Recursion
   * Runtime: 83ms / 73.12%
   * Memory: 45.7MB / 12.67%
   */
  if (!head || !head.next) return head

  const list = reverseList(head.next)!

  // Fantastic step
  head.next.next = head
  head.next = null

  return list

  /** Answer1: Iteration
   * Runtime: 83ms / 73.12%
   * Memory: 44.6MB / 82.9%
   */
  // let prev: ListNode | null = null
  // let current: ListNode | null = head

  // while (current) {
  //   const tempNode = current.next
  //   current.next = prev
  //   prev = current
  //   current = tempNode
  // }

  // return prev
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('206.reverse-linked-list', () => {
    expect(
      getLinkListValue(reverseList(createLinkList([1, 2, 3, 4, 5])))
    ).toEqual([5, 4, 3, 2, 1])

    expect(getLinkListValue(reverseList(createLinkList([])))).toEqual([])

    expect(getLinkListValue(reverseList(createLinkList([1, 2])))).toEqual([
      2, 1
    ])
  })
}
