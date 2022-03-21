/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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

function swapPairs(head: ListNode | null): ListNode | null {
  const list = new ListNode(0, head)
  let current: ListNode | null = list

  while (current) {
    // At lease 2 elements in the list
    if (current.next && current.next.next) {
      const tempNode = current.next
      current.next = current.next.next
      tempNode.next = tempNode.next!.next
      current.next.next = tempNode

      current = current.next
    }

    current = current.next
  }

  return list.next
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('24.swap-nodes-in-pairs', () => {
    expect(getLinkListValue(swapPairs(createLinkList([1, 2, 3, 4])))).toEqual([
      2, 1, 4, 3
    ])
    expect(getLinkListValue(swapPairs(createLinkList([])))).toEqual([])
    expect(getLinkListValue(swapPairs(createLinkList([1])))).toEqual([1])
  })
}
