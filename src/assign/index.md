---
group:
  title: Object
title: assign
---

> Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

:::info{title=Note}
This method mutates object and is loosely based on Object.assign.
:::

## Arguments

- object (Object): The destination object.
- [sources] (...Object): The source objects.

## Returns

- (Object): Returns object.

## Example

```ts
function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

_.assign({ a: 0 }, new Foo(), new Bar());
// => { 'a': 1, 'c': 3 }
```
