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
  if (nodes.length === 0 || nodes[0] === null) return null

  const root = new TreeNode(nodes[0])
  const nodeQueue: TreeNode[] = [root]

  let insert = 1

  while (insert < nodes.length) {
    const node = nodeQueue.shift()!

    const left = nodes[insert]
    if (left) {
      node.left = new TreeNode(left)
      nodeQueue.push(node.left)
    } else {
      node.left = null
    }

    insert++
    if (insert === nodes.length) break

    const right = nodes[insert]
    if (right) {
      node.right = new TreeNode(right)
      nodeQueue.push(node.right)
    } else {
      node.right = null
    }
    insert++
  }

  return root
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('create-tree', () => {
    expect(createTree([1, 2])).toMatchInlineSnapshot(`
      TreeNode {
        "left": TreeNode {
          "left": null,
          "right": null,
          "val": 2,
        },
        "right": null,
        "val": 1,
      }
    `)

    expect(createTree([1, null, 2])).toMatchInlineSnapshot(`
      TreeNode {
        "left": null,
        "right": TreeNode {
          "left": null,
          "right": null,
          "val": 2,
        },
        "val": 1,
      }
    `)

    expect(createTree([1, null, 2, 3])).toMatchInlineSnapshot(`
      TreeNode {
        "left": null,
        "right": TreeNode {
          "left": TreeNode {
            "left": null,
            "right": null,
            "val": 3,
          },
          "right": null,
          "val": 2,
        },
        "val": 1,
      }
    `)

    expect(createTree([1, 2, 2, 3, 4, 4, 3])).toMatchInlineSnapshot(`
      TreeNode {
        "left": TreeNode {
          "left": TreeNode {
            "left": null,
            "right": null,
            "val": 3,
          },
          "right": TreeNode {
            "left": null,
            "right": null,
            "val": 4,
          },
          "val": 2,
        },
        "right": TreeNode {
          "left": TreeNode {
            "left": null,
            "right": null,
            "val": 4,
          },
          "right": TreeNode {
            "left": null,
            "right": null,
            "val": 3,
          },
          "val": 2,
        },
        "val": 1,
      }
    `)

    expect(createTree([1, 2, 2, null, 3, null, 3])).toMatchInlineSnapshot(
      `
      TreeNode {
        "left": TreeNode {
          "left": null,
          "right": TreeNode {
            "left": null,
            "right": null,
            "val": 3,
          },
          "val": 2,
        },
        "right": TreeNode {
          "left": null,
          "right": TreeNode {
            "left": null,
            "right": null,
            "val": 3,
          },
          "val": 2,
        },
        "val": 1,
      }
    `
    )
  })
}
