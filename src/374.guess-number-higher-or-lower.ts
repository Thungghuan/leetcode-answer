/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */
let pick = 0

function guess(num: number): number {
  if (num === pick) return 0
  else if (num > pick) return -1
  else return 1
}

function game(n: number, p: number) {
  pick = p

  return guessNumber(n)
}

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let left = 1,
    right = n

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    const guessed = guess(middle)

    if (guessed === 0) return middle
    else if (guessed === -1) right = middle - 1
    else left = middle + 1
  }

  return 0
}
// @lc code=end
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('374.guess-number-higher-or-lower', () => {
    expect(game(10, 6)).toMatchInlineSnapshot('6')
    expect(game(1, 1)).toMatchInlineSnapshot('1')
    expect(game(2, 1)).toMatchInlineSnapshot('1')
  })
}
