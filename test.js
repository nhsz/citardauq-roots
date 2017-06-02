import test from 'ava'
import quadraticRoots from './'

test(t => {
  t.deepEqual(quadraticRoots(1, 0, -1), [1, -1])
})

test(t => {
  t.deepEqual(quadraticRoots(1, -5, 6), [3, 2])
})

test(t => {
  t.deepEqual(quadraticRoots(1, 5, 6), [-2, -3])
})

test(t => {
  t.deepEqual(quadraticRoots(1, -2, 1), [1])
})

test(t => {
  t.deepEqual(quadraticRoots(-4, 1, 3), [-0.75, 1])
})

test('No quadratic equation', t => {
  const error = t.throws(() => {
    quadraticRoots(0, 2, 3)
  }, Error)

  t.is(error.message, 'a can not be 0')
})

test('No real roots', t => {
  const error = t.throws(() => {
    quadraticRoots(1, 0, 1)
  }, Error)

  t.is(error.message, 'No real roots')
})
