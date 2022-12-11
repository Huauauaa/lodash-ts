---
group: Math
title: ceil
---

> Computes number rounded up to precision.

## Arguments

- number (number): The number to round up.
- [precision=0] (number): The precision to round up to.

## Returns

- (number): Returns the rounded up number.

## Example

```ts
ceil(4.006)
// => 5

ceil(6.004, 2)
// => 6.01

ceil(6040, -2)
// => 6100
```
