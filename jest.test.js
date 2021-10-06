test('test common matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(14)
})
test('test true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})
test('test number', () => {
  expect(2 + 2).toBeGreaterThan(3)
  expect(2 + 2).toBeLessThan(5)
})
test('test object', () => {
  expect({ name: 'saya' }).toEqual({ name: 'saya' })
})
 