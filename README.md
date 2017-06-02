# citardauq-roots

> Numerically stable method for solving **[`quadratic equations`](https://people.csail.mit.edu/bkph/articles/Quadratics.pdf)**  
> **Note:** 'citardauq' is 'quadratic', reversed

## Install

```
$ npm install --save citardauq-roots
```


## Usage

```js
const quadraticRoots = require('citardauq-roots')

console.log(quadraticRoots(1, 0, -1))
// => [1, -1]

console.log(quadraticRoots(1, -5, 6))
// => [3, 2]

console.log(quadraticRoots(1, -2, 1))
// => [1]

console.log(quadraticRoots(-4, 1, 3))
// => [-0.75, 1]

console.log(quadraticRoots(0, 2, 3))
// => Error: a can not be 0

console.log(quadraticRoots(1, 0, 1))
// => Error: No real roots
```


## License

MIT © **[`Nicolás Quiroz`](https://nicolasquiroz.com)**
