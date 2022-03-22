/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const list = new ListNode(0, head)
  let begin: ListNode | null = list

  for (let i = 0; i < left - 1; ++i) {
    begin = begin!.next
  }

  // this node will be the last after reversing
  const end = begin!.next

  let current = begin!.next
  let prev = null

  for (let i = 0; current && i < right - left + 1; ++i) {
    const tempNode = current!.next
    current!.next = prev
    prev = current
    current = tempNode
  }

  begin!.next = prev
  console.log(list)
  end && (end!.next = current)

  return list.next
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('92.reverse-linked-list-ii', () => {
    expect(
      getLinkListValue(reverseBetween(createLinkList([1, 2, 3, 4, 5]), 2, 4))
    ).toEqual([1, 4, 3, 2, 5])
  })

  it('92.reverse-linked-list-ii', () => {
    expect(getLinkListValue(reverseBetween(createLinkList([5]), 1, 1))).toEqual(
      [5]
    )

    expect(
      getLinkListValue(reverseBetween(createLinkList([3, 5]), 1, 2))
    ).toEqual([5, 3])
  })
}
