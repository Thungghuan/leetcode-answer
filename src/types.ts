export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function createLinkList(values: number[]): ListNode | null {
  const list = new ListNode()

  while (values.length > 0) {
    list.next = new ListNode(values.pop(), list.next)
  }

  return list.next
}

export function getLinkListValue(node: ListNode | null): number[] {
  const values: number[] = []
  while (node) {
    values.push(node.val)
    node = node.next
  }

  return values
}
