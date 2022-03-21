/*
 * @lc app=leetcode id=445 lang=typescript
 *
 * [445] Add Two Numbers II
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

/** Use a stack to reverse */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const l1Stack: number[] = []
  while (l1 !== null) {
    l1Stack.push(l1.val)
    l1 = l1.next
  }

  const l2Stack: number[] = []
  while (l2 !== null) {
    l2Stack.push(l2.val)
    l2 = l2.next
  }

  let result = new ListNode()
  let carry = 0
  while (l1Stack.length > 0 || l2Stack.length > 0 || carry === 1) {
    const sum = (l1Stack.pop() || 0) + (l2Stack.pop() || 0) + carry
    if (sum > 9) {
      carry = 1
    } else {
      carry = 0
    }

    result.next = new ListNode(sum % 10, result.next)
  }

  // Not a good solution
  // const resultStack: number[] = []
  // let carry = 0

  // while (l1Stack.length > 0 || l2Stack.length > 0 || carry === 1) {
  //   const sum = (l1Stack.pop() || 0) + (l2Stack.pop() || 0) + carry
  //   if (sum > 9) {
  //     carry = 1
  //   } else {
  //     carry = 0
  //   }

  //   resultStack.push(sum % 10)
  // }

  // const result = new ListNode()
  // let current = result
  // while (resultStack.length > 0) {
  //   current.next = new ListNode(resultStack.pop())
  //   current = current.next
  // }

  return result.next
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('445.add-two-numbers-ii-1', () => {
    const l1 = createLinkList([7, 2, 4, 3])
    const l2 = createLinkList([5, 6, 4])

    const result = []
    let l = addTwoNumbers(l1, l2)
    while (l !== null) {
      result.push(l.val)
      l = l.next
    }

    expect(result).toEqual([7, 8, 0, 7])
  })

  it('445.add-two-numbers-ii-2', () => {
    const l1 = createLinkList([2, 4, 3])
    const l2 = createLinkList([5, 6, 4])

    const result = []
    let l = addTwoNumbers(l1, l2)
    while (l !== null) {
      result.push(l.val)
      l = l.next
    }

    expect(result).toEqual([8, 0, 7])
  })

  it('445.add-two-numbers-ii-3', () => {
    const l1 = createLinkList([0])
    const l2 = createLinkList([0])

    const result = []
    let l = addTwoNumbers(l1, l2)
    while (l !== null) {
      result.push(l.val)
      l = l.next
    }

    expect(result).toMatchInlineSnapshot(`
      [
        0,
      ]
    `)
  })

  it('445.add-two-numbers-ii-4', () => {
    const l1 = createLinkList([5])
    const l2 = createLinkList([5])

    const result = []
    let l = addTwoNumbers(l1, l2)
    while (l !== null) {
      result.push(l.val)
      l = l.next
    }

    expect(result).toEqual([1, 0])
  })
}
