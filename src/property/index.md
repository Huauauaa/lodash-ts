---
group: Util
title: property
---

> Creates a function that returns the value at path of a given object.

## Arguments

- path (Array|string): The path of the property to get.

## Returns

- (Function): Returns the new accessor function.

## Example

```ts
var objects = [{ a: { b: 2 } }, { a: { b: 1 } }]

map(objects, property('a.b'))
// => [2, 1]

map(sortBy(objects, property(['a', 'b'])), 'a.b')
// => [1, 2]
```
