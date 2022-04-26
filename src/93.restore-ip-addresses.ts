/*
 * @lc app=leetcode id=93 lang=typescript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const result: string[] = []
  const path: number[] = []

  function backtracking(s: string, start: number) {
    if (path.length === 4) {
      if (start === s.length) result.push(path.join('.'))
      return
    }

    for (let i = start; i < s.length; ++i) {

      if (i > start && s[start] === '0') continue

      const ipSegment = +s.slice(start, i + 1)
      if (ipSegment >= 0 && ipSegment <= 255) {
        path.push(ipSegment)
        backtracking(s, i + 1)
        path.pop()
      }
    }
  }

  backtracking(s, 0)

  return result
}
// @lc code=end

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('join', () => {
    expect([1, 2, 3].join('')).toMatchInlineSnapshot('"123"')
  })

  it('93.restore-ip-addresses', () => {
    expect(restoreIpAddresses('0000')).toMatchInlineSnapshot(`
      [
        "0.0.0.0",
      ]
    `)
    
    expect(restoreIpAddresses('11011')).toMatchInlineSnapshot(`
      [
        "1.1.0.11",
        "1.10.1.1",
        "11.0.1.1",
      ]
    `)

    expect(restoreIpAddresses('101023')).toMatchInlineSnapshot(`
      [
        "1.0.10.23",
        "1.0.102.3",
        "10.1.0.23",
        "10.10.2.3",
        "101.0.2.3",
      ]
    `)

    expect(restoreIpAddresses('25525511135')).toMatchInlineSnapshot(`
      [
        "255.255.11.135",
        "255.255.111.35",
      ]
    `)
  })
}
