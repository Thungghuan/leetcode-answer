/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 */
import { ListNode, createLinkList } from './types'

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
  let current = head

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('83.remove-duplicates-from-sorted-list', () => {
    expect(deleteDuplicates(createLinkList([1, 1, 2]))).toMatchInlineSnapshot(`
      ListNode {
        "next": ListNode {
          "next": null,
          "val": 2,
        },
        "val": 1,
      }
    `)

    expect(deleteDuplicates(createLinkList([1, 1, 2, 3, 3])))
      .toMatchInlineSnapshot(`
      ListNode {
        "next": ListNode {
          "next": ListNode {
            "next": null,
            "val": 3,
          },
          "val": 2,
        },
        "val": 1,
      }
    `)
  })
}
