---
group: Math
title: maxBy
---

> This method is like [max](../max/index.md) except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).

## Arguments

- array (Array): The array to iterate over.
- [iteratee=identity] (Function): The iteratee invoked per element.

## Returns

- (\*): Returns the maximum value.

## Example

```ts
var objects = [{ n: 1 }, { n: 2 }]

maxBy(objects, function (o) {
  return o.n
})
// => { 'n': 2 }

// The `property` iteratee shorthand.
maxBy(objects, 'n')
// => { 'n': 2 }
```
