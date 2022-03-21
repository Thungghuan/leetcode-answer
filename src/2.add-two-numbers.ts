/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode()

  // Another pointer points to the linklist
  let current = result
  let carry = 0

  // WTF OR `||` operator
  while (l1 || l2 || carry === 1) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry
    if (sum > 9) {
      carry = 1
    } else {
      carry = 0
    }

    current.next = new ListNode(sum % 10)
    current = current.next

    l1 && (l1 = l1?.next)
    l2 && (l2 = l2?.next)
  }

  // while (l1 !== null && l2 !== null) {
  //   const sum = l1.val + l2.val + carry
  //   if (sum > 9) {
  //     carry = 1
  //   } else {
  //     carry = 0
  //   }

  //   current.next = new ListNode(sum % 10)
  //   current = current.next

  //   l1 = l1.next
  //   l2 = l2.next
  // }

  // while (l1 !== null) {
  //   const sum = l1.val + carry
  //   if (sum > 9) {
  //     carry = 1
  //   } else {
  //     carry = 0
  //   }

  //   current.next = new ListNode(sum % 10)
  //   current = current.next

  //   l1 = l1.next
  // }
  // while (l2 !== null) {
  //   const sum = l2.val + carry
  //   if (sum > 9) {
  //     carry = 1
  //   } else {
  //     carry = 0
  //   }

  //   current.next = new ListNode(sum % 10)
  //   current = current.next

  //   l2 = l2.next
  // }

  // if (carry === 1) {
  //   current.next = new ListNode(1)
  // }

  return result.next
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('2.add-two-numbers-1', () => {
    let l1 = createLinkList([2, 4, 3])
    let l2 = createLinkList([5, 6, 4])

    const result: number[] = []
    let l = addTwoNumbers(l1, l2)
    while (l !== null) {
      result.push(l.val)
      l = l.next
    }

    expect(result).toEqual([7, 0, 8])
  })

  it('2.add-two-numbers-2', () => {
    let l1 = createLinkList([0])
    let l2 = createLinkList([0])

    const result: number[] = []
    let l = addTwoNumbers(l1, l2)
    while (l !== null) {
      result.push(l.val)
      l = l.next
    }

    expect(result).toEqual([0])
  })

  it('2.add-two-numbers-3', () => {
    let l1 = createLinkList([9, 9, 9, 9, 9, 9, 9])
    let l2 = createLinkList([9, 9, 9, 9])

    const result: number[] = []
    let l = addTwoNumbers(l1, l2)
    while (l !== null) {
      result.push(l.val)
      l = l.next
    }

    expect(result).toEqual([8, 9, 9, 9, 0, 0, 0, 1])
  })

  it('2.add-two-numbers-4', () => {
    let l1 = createLinkList([2, 4, 9])
    let l2 = createLinkList([5, 6, 4, 9])

    const result: number[] = []
    let l = addTwoNumbers(l1, l2)
    while (l !== null) {
      result.push(l.val)
      l = l.next
    }

    expect(result).toEqual([7, 0, 4, 0, 1])
  })
}
