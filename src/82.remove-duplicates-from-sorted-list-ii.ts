/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const result = new ListNode()
  let current = result

  while (head && head.next) {
    if (head.val === head.next.val) {
      while (head && head.next && head.val === head.next.val) {
        head = head.next
      }
    } else {
      current.next = new ListNode(head.val)
      current = current.next
    }

    head = head.next
  }

  // The last element is not duplicate
  if (head !== null) {
    current.next = head
  }

  return result.next
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('82.remove-duplicates-from-sorted-list-ii', () => {
    expect(
      getLinkListValue(deleteDuplicates(createLinkList([1, 2, 3, 3, 4, 4, 5])))
    ).toEqual([1, 2, 5])

    expect(
      getLinkListValue(deleteDuplicates(createLinkList([1, 1, 1, 2, 3])))
    ).toEqual([2, 3])

    expect(
      getLinkListValue(
        deleteDuplicates(createLinkList([1, 1, 1, 2, 3, 3, 4, 5, 5, 5]))
      )
    ).toEqual([2, 4])
  })
}
