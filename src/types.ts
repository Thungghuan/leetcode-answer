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

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function createTree(nodes: (number | null)[]): TreeNode | null {
  // case: `[]`
  if (nodes.length === 0) return null

  const first = nodes.shift()

  // case: `[null]`
  if (!first) return null

  // case: `[number]`
  // length become zero after `shift`
  if (nodes.length === 0) return new TreeNode(first)

  const tree = new TreeNode(first)
  tree.left = createTree(nodes)
  tree.right = createTree(nodes)

  return tree
}
