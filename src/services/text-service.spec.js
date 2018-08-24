const valid = require('./text-valid')

test('Pass', () => {
  expect(valid.testRun('Pass')).toBe('Pass')
})

test('Pass12', () => {
  expect(valid.testRun('Pass12')).toBe('Words Must Only Include Letters!')
})

test('valid', () => {
  expect(valid.testRun('valid')).toBe('valid')
})

test('strong', () => {
  expect(valid.testRun('strong')).toBe('strong')
})

test('1nvalid', () => {
  expect(valid.testRun('1nvlaid')).toBe('Words Must Only Include Letters!')
})
