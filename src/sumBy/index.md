---
group: Math
title: sumBy
---

> This method is like [sum](../sum) except that it accepts iteratee which is invoked for each element in array to generate the value to be summed. The iteratee is invoked with one argument: (value).

## Arguments

- array (Array): The array to iterate over.
- [iteratee=identity] (Function): The iteratee invoked per element.

## Returns

- (number): Returns the sum.

## Example

```ts
var objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

sumBy(objects, function (o) {
  return o.n
})
// => 20

// The `property` iteratee shorthand.
sumBy(objects, 'n')
// => 20
```
