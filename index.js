/*
  Numerically stable method for solving quadratic equations

  Note: 'citardauq' is 'quadratic', reversed

  Src: https://people.csail.mit.edu/bkph/articles/Quadratics.pdf, https://en.wikipedia.org/wiki/Quadratic_formula#Derivation_of_the_formula
*/
'use strict'

module.exports = (a, b, c) => {
  let cComponent = 2 * c
  let bComponent = -b
  let rootComponent = Math.sqrt(Math.pow(b, 2) - (4 * a * c))
  let x1 = cComponent / (bComponent - rootComponent)
  let x2 = cComponent / (bComponent + rootComponent)

  if (a === 0) {
    throw new Error('a can not be 0')
  } else if (isNaN(x1) || isNaN(x2)) {
    throw new Error('No real roots')
  } else if (x1 === x2) {
    return [x1]
  } else {
    return [x1, x2]
  }
}
