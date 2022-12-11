---
group: Math
title: minBy
---

> This method is like [min](../min/) except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).

## Arguments

- array (Array): The array to iterate over.
- [iteratee=identity] (Function): The iteratee invoked per element.

## Returns

- (\*): Returns the minimum value.

## Example

```ts
var objects = [{ n: 1 }, { n: 2 }]

minBy(objects, function (o) {
  return o.n
})
// => { 'n': 1 }

// The `property` iteratee shorthand.
minBy(objects, 'n')
// => { 'n': 1 }
```
