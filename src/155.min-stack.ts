/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
  nums: number[]
  mins: number[] = [Infinity]

  constructor() {
    this.nums = []
  }

  push(val: number) {
    this.nums.push(val)
    this.mins.push(Math.min(this.mins[this.mins.length - 1], val))
  }

  pop() {
    this.nums.pop()
    this.mins.pop()
  }

  top(): number {
    return this.nums[this.nums.length - 1]
  }

  getMin(): number {
    return this.mins[this.mins.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
