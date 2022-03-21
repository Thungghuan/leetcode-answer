/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let current = head
  while (current && current.val === val) {
    head = current.next
    current = current.next
  }

  while (current) {
    while (current.next && current.next.val === val) {
      current.next = current.next.next
    }

    current = current.next
  }

  return head
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('203.remove-linked-list-elements', () => {
    expect(
      getLinkListValue(removeElements(createLinkList([1, 2, 6, 3, 4, 5, 6]), 6))
    ).toEqual([1, 2, 3, 4, 5])
  })

  it('203.remove-linked-list-elements', () => {
    expect(getLinkListValue(removeElements(createLinkList([]), 1))).toEqual([])
  })

  it('203.remove-linked-list-elements', () => {
    expect(
      getLinkListValue(removeElements(createLinkList([7, 7, 7, 7]), 7))
    ).toEqual([])
  })

  it('203.remove-linked-list-elements', () => {
    expect(
      getLinkListValue(removeElements(createLinkList([1, 2, 2, 1]), 2))
    ).toEqual([1, 1])
  })
}
