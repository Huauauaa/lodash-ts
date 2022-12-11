---
group:
  title: Function
order: 1
title: before
---

> The opposite of [before](); this method creates a function that invokes func once it's called n or more times.

## Arguments

- n (number): The number of calls before func is invoked.
- func (Function): The function to restrict.

## Returns

- (Function): Returns the new restricted function.

## Example

```ts
var saves = ['profile', 'settings']

var done = _.after(saves.length, function () {
  console.log('done saving!')
})

_.forEach(saves, function (type) {
  asyncSave({ type: type, complete: done })
})
// => Logs 'done saving!' after the two async saves have completed.
```
