---
slug: promise-allSettled-polyfill
title: Promises - Implementing Promise.allSettled()
authors: anas
tags: [Promises, Javascript, Polyfill, Async]
---
## What is Promise.allSettled()
**Promise.allSettled()** is a static promise concurrency method that takes an iterable of elements (usually Promises) as an input, and returns a single Promise that resolves to an array of the objects that contains results of the input promises.
<!--truncate-->
This returned promise will resolve when all of the input's promises have settled(either resolved or rejected).
<!--truncate-->
However, if an empty iterable is passed as an argument, then **Promise.allSettled()** retunrs a promise object that has already been resolved with an empty array. 
<!-- truncate -->
For each outcome object a status string is present.If a status is **fulfilled** then a **value** is present. If a status is **rejected** then a **reason** is present.

## Usage
Promise.allSettled() method is typically used when we have multiple asynchronous tasks that are not dependent on each other, or when we want to know the result of each task.

<!--truncate-->

example - 
```js showLineNumbers
const p1 = Promise.resolve(2);
const p2 = 5;
const p3 = new Promise((resolve,reject) => {
  setTimeout(() => resolve("response after 2s"), 2000)
})


const result = await Promise.allSettled([p1,p2, p3]); 
// [
  //   { status: 'fulfilled', value: 2},
  //   { status: 'fulfilled', value: 5},
  //   { status: 'fulfilled', value: 'response after 2s'}
  // ]
```


## Implementation of our own promiseAll method - 

- We'll maintain an array _items_ to hold resolved/rejected response of each promise and a variable _unresolved_ to keep a count of promises that are unresolved till the point.

- if all of our promises are settled then we'll return a promise that resolves with the array of response values.


:::note
The returned promised should contain the resolved values in the same order as inputted promises.
:::

### Edge  cases - 
  - if input array is empty then returned **Promise** should be resolved with and empty array.
  - there can be a non-promise value in input iterable. These values should be also be present in the returned response array.


implementation of promiseAll function - 

```js showLineNumbers
function promiseAllSettled(iterable) {
  return new Promise((resolve,reject) => {
    const items = new Array(iterable.length);
    const unresolved = iterable.length - 1;

    if(!unresolved) {
      resolve(items);
    }

    items.forEach((p, idx) => {
      Promise.resolve(p)
      .then(res => {
        items[idx] = {
          status: 'fulfilled',
          value: res,
        };
        unresolved -= 1;
        if(unresolved === 0) {
          resolve(items);
        }
      })
      .catch(err => {
        items[idx] = {
          status: 'rejected',
          value: err,
        };
        unresolved -= 1;
        if(unresolved === 0) {
          resolve(items);
        }
      })
    })
  })
}
```

## usage example our promiseAll function

  - using promiseAll with all resolved promises

  ```js
  const p1 = Promise.resolve(2);
  const p2 = 5;
  const p3 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("response after 2s"), 2000)
  })

  const result = await promiseAllSettled([p1, p2, p3]); 
  // output - 
  // [
  //   { status: 'fulfilled', value: 2},
  //   { status: 'fulfilled', value: 5},
  //   { status: 'fulfilled', value: 'response after 2s'},
  // ]
  ```

  - using promiseAll with rejected promise
  ```js
  const p1 = Promise.resolve(3);
  const p2 = new Promise((resolve,reject) => {
    setTimeout(() => reject("api call failed"), 2000);
  });
  const p3 =  6;

  const result = await promiseAllSettled([p1, p2, p3]);
  // output - 
  // [
  //   { status: 'fulfilled', value: 3},
  //   { status: 'rejected', value: 'api call failed' },
  //   { status: 'fulfilled', value: 6},
  // ]
  ```

:::info
You can read more about Promise.allSettled() on mdn docs [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
:::

