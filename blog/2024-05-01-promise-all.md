---
slug: promise-all-polyfill
title: Promises - Implementing Promise.all()
authors: anas
tags: [Promises, Javascript, Polyfill, Async]
---
## What is Promise.all()
**Promise.all()** is a static method that takes an iterable of elements (usually Promises) as an input, and returns a single Promise that resolves to an array of the results of the input promises.
<!--truncate-->
This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. 
<!--truncate-->
It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message/error.


## Usage
Promise.all() method is used to facilitate async task concurrency.
It is frequently used when we are having multiples api requests and we want to wait for all of them to complete before using result of any of them, usually because we depend on data from all of the responses.

<!--truncate-->

example - 
```js showLineNumbers
const p1 = Promise.resolve(2);
const  p2 = 5;
const  p3 = new Promise((resolve,reject) => {
  setTimeout(() => resolve("response after 2s"), 2000)
})


const [r1, r2, r3] = await Promise.all([p1,p2, p3]); // [2, 5, "response after 2s]
```


## Implementation of our own promiseAll method - 

- We'll maintain an array _items_ to hold resolved response of each promise and a variable _unresolved_ to keep a count of promises that are unresolved till the point.

- if all of our promises are resolved then we'll return a promise that resolves with the array of resolved values.

- if at any point any of the promise is rejected then we'll immediately reject the final promise and return the rejected error.

:::note
The returned promised should contain the resolved values in the same order as inputted promises.
:::

### Edge  cases - 
  - if input array is empty then returned **Promise** should be resolved with and empty array.
  - there can be a non-promise value in input iterable. These values should be also be present in the returned response array.
  - if the outcome is a rejection then the result of first rejection should be returned.


implementation of promiseAll function - 

```js showLineNumbers
function promiseAll(iterable) {
  return new Promise((resolve,reject) => {
    const items = new Array(iterable.length);
    const unresolved = iterable.length - 1;

    if(!unresolved) {
      resolve(items);
    }

    items.forEach((p, idx) => {
      Promise.resolve(p)
      .then(res => {
        items[idx] = res;
        unresolved -= 1;
        if(unresolved === 0) {
          resolve(items);
        }
      })
      .catch(err => {
        reject(err);
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

  const [r1, r2, r3] = await promiseAll([p1, p2, p3]); 
  // output  - [2, 5, "response after 2s]
  ```

  - using promiseAll with rejected promise
  ```js
  const p1 = Promise.resolve(3);
  const p2 = new Promise((resolve,reject) => {
    setTimeout(() => reject("api call failed"), 2000);
  });
  const p3 =  6;

  try {
    await promiseAll([p1, p2, p3]);
  } catch(err) {
    console.log(err);
  }
  // output - api call failed
  ```

:::info
You can read more about Promise.all() on mdn docs [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
:::

