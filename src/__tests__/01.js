import globalScopeVariable from '../exercises/01'

test('should receive string and return number result', () => {
  const value = globalScopeVariable("the quick brown fox jumps over the lazy dogs")
  expect(typeof (value)).toBe("number")
})

test('should receive array of string and return number result', () => {
  const value = globalScopeVariable(["fox", "cat", "rat"])
  expect(typeof (value)).toBe("number")
  expect(value).toBe(9)
})
