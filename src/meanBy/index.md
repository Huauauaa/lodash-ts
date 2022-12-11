---
group: Math
title: meanBy
---

> This method is like [mean](../mean/) except that it accepts iteratee which is invoked for each element in array to generate the value to be averaged. The iteratee is invoked with one argument: (value).

## Arguments

- array (Array): The array to iterate over.
- [iteratee=identity] (Function): The iteratee invoked per element.

## Returns

- (number): Returns the mean.

## Example

```ts
var objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

meanBy(objects, function (o) {
  return o.n
})
// => 5

// The `property` iteratee shorthand.
meanBy(objects, 'n')
// => 5
```
