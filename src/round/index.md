---
group: Math
title: round
---

> Computes number rounded to precision.

## Arguments

- number (number): The number to round.
- [precision=0] (number): The precision to round to.

## Returns

- (number): Returns the rounded number.

## Example

```ts
round(4.006)
// => 4

round(4.006, 2)
// => 4.01

round(4060, -2)
// => 4100
```
