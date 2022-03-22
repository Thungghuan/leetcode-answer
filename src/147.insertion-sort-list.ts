/*
 * @lc app=leetcode id=147 lang=typescript
 *
 * [147] Insertion Sort List
 */

import { createLinkList, ListNode } from './types'

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

function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let list = new ListNode(head.val, head)
  let prev: ListNode | null = list
  let cur: ListNode | null = head

  while (cur) {
    if (prev.val <= cur.val) {
      prev = cur
      cur = cur.next
      continue
    }

    let p = list
    while(p.next && p.next.val <= cur!.val) {
      p = p.next
    }

    const tempNode = cur.next
    
    cur.next = p.next
    p.next = cur
    
    prev.next = tempNode
    cur = tempNode
  }

  return list.next
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('147.insertion-sort-list', () => {
    expect(insertionSortList(createLinkList([4, 2, 1, 3])))
      .toMatchInlineSnapshot(`
        ListNode {
          "next": ListNode {
            "next": ListNode {
              "next": ListNode {
                "next": null,
                "val": 4,
              },
              "val": 3,
            },
            "val": 2,
          },
          "val": 1,
        }
      `)
  })
}
