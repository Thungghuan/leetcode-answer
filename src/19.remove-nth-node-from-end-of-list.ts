/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

export {}
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const list = new ListNode(0, head)
  let current: ListNode | null = list
  let front: ListNode | null = list

  for (let i = 0; i <= n; ++i) {
    front = front!.next
  }

  while (front) {
    front = front!.next
    current = current!.next
  }

  current!.next = current!.next?.next || null

  return list.next
}
// @lc code=end

function createLinkList(values: number[]): ListNode | null {
  const list = new ListNode()

  while (values.length > 0) {
    list.next = new ListNode(values.pop(), list.next)
  }

  return list.next
}

function getLinkListValue(node: ListNode | null): number[] {
  const values: number[] = []
  while (node) {
    values.push(node.val)
    node = node.next
  }

  return values
}
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('19.remove-nth-node-from-end-of-list', () => {
    expect(
      getLinkListValue(removeNthFromEnd(createLinkList([1, 2, 3, 4, 5]), 2))
    ).toEqual([1, 2, 3, 5])

    expect(getLinkListValue(removeNthFromEnd(createLinkList([1]), 1))).toEqual(
      []
    )

    expect(
      getLinkListValue(removeNthFromEnd(createLinkList([1, 2]), 1))
    ).toEqual([1])
  })
}
