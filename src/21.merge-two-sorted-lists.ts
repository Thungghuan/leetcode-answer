/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const list = new ListNode()
  let current: ListNode | null = list

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }

    current = current?.next
  }

  current.next = list1 || list2

  // Bad answer: no need to loop
  // while (list1) {
  //   current.next = list1
  //   list1 = list1.next
  //   current = current.next
  // }
  // while (list2) {
  //   current.next = list2
  //   list2 = list2.next
  //   current = current.next
  // }

  return list.next
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('21.merge-two-sorted-lists', () => {
    expect(
      getLinkListValue(
        mergeTwoLists(createLinkList([1, 2, 4]), createLinkList([1, 3, 4]))
      )
    ).toEqual([1, 1, 2, 3, 4, 4])
  })

  it('21.merge-two-sorted-lists', () => {
    expect(
      getLinkListValue(mergeTwoLists(createLinkList([]), createLinkList([])))
    ).toEqual([])
  })

  it('21.merge-two-sorted-lists', () => {
    expect(
      getLinkListValue(mergeTwoLists(createLinkList([]), createLinkList([0])))
    ).toEqual([0])
  })

  it('21.merge-two-sorted-lists', () => {
    expect(
      getLinkListValue(
        mergeTwoLists(createLinkList([-9, 3]), createLinkList([5, 7]))
      )
    ).toEqual([-9, 3, 5, 7])
  })
}
