/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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
function merge2Lists(
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
  return list.next
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]

  /** Answer2: Iteration
   * Runtime: 42.39%
   * Memory: 75.2%
   */

  let list = lists[0]
  for (let i = 1; i < lists.length; ++i) {
    list = merge2Lists(list, lists[i])
  }
  return list

  /** Answer1: Recursion
   * Runtime: 42.58%
   * Memory: 47.66%
   */

  // if (lists.length === 2) {
  //   return merge2Lists(lists[0], lists[1])
  // } else {
  //   return merge2Lists(lists.pop()!, mergeKLists(lists))
  // }
}

// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('23.merge-k-sorted-lists', () => {
    expect(
      getLinkListValue(
        mergeKLists([
          createLinkList([1, 4, 5]),
          createLinkList([1, 3, 4]),
          createLinkList([2, 6])
        ])
      )
    ).toEqual([1, 1, 2, 3, 4, 4, 5, 6])
  })

  it('23.merge-k-sorted-lists', () => {
    expect(getLinkListValue(mergeKLists([]))).toEqual([])
  })

  it('23.merge-k-sorted-lists', () => {
    expect(getLinkListValue(mergeKLists([createLinkList([])]))).toEqual([])
  })
}
