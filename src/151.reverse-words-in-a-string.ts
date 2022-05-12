/*
 * @lc app=leetcode id=151 lang=typescript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(' ')

  // const sArray = s.trim().split('')

  // let left = 0
  // let right = sArray.length - 1

  // // reverse
  // while (left < right) {
  //   const temp = sArray[left]
  //   sArray[left] = sArray[right]
  //   sArray[right] = temp

  //   left++
  //   right--
  // }

  // s = sArray.join('')

  // // fast and slow pointers
  // let slow = 0
  // let fast = 0

  // let len = sArray.length

  // while (fast < len) {
  //   let space = 0

  //   // leading space
  //   while (s[fast] === ' ') {
  //     space++
  //     fast++
  //   }
  //   len

  //   while (fast !== len - 1 && s[fast + 1] !== ' ') fast++
  //   let edge = fast

  //   while (fast >= 0 && s[fast] !== ' ') {
  //     sArray[slow] = s[fast]
  //     fast--
  //     slow++
  //   }

  //   fast = edge + 1

  //   if (fast < len) {
  //     sArray[slow] = ' '
  //     slow++
  //   }

  //   sArray.length = len
  // }

  // return sArray.join('')
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('151.reverse-words-in-a-string', () => {
    expect(reverseWords('a good   example')).toMatchInlineSnapshot(
      '"example good a"'
    )

    expect(reverseWords('  hello world  ')).toMatchInlineSnapshot(
      '"world hello"'
    )
  })
}
