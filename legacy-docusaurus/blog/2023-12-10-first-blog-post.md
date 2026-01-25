---
slug: curring-part-one
title: Currying - Part 1
authors: anas
tags: [Currying, Javascript]
---
## What is currrying
Currying just transform the function f(a,b,c, ...) such that it can become callable as f(a)(b)(b)...
It does not call the function itself, it returns a wrapper function **f** that is callable in form of **f(a)(b)(c)...**

In this process of currying the the function arguments are stored in lexical enviornment of each call and thus are available to our final function call.
<!--truncate-->

example - 
```js showLineNumbers
function curry(fn) {
	return function(a) {
		return function(b) {
			return fn(a, b);
		}
	}
}

function sum(a, b) {
	console.log(a+b);
}

const curriedSum = curry(sum);

const sum1 = curriedSum(1, 2);
const sum2 = curriedSum(5, 10)
```

## Why is currying useful.
- It does not change our function.
- It helps us to break a function into the form of **partials** based on its arguments.
for example currying of f(a,b,c) can help us make function f callable in following forms - 
  - f(a,b,c) = f(a)(b,c)
  - f(a,b,c) = f(a,b)(c)
  - f(a,b,c) = f(a)(b)(c)



## Solving the BFE problem 1 - 
The problem statement goes as follows:

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example

```js showLineNumbers
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'

```


So the required behavior is nothing but implementation of a curry function with mulitple number of arguments.


So, for implementation the basic idea is that we'll wait until we receive required number of arguments in  our lexical environment of the wrapper function.
We'll do this by calling our wrapper function recursively and accumulating our arguments in each call in a list.

As soon as we get the desired number of arguments we'll call the function **fn** that is needed to be applied with those arguments.

Now question arises how we'll identify that we have enough arguments in our argument list that we can call a function fn?

We can do that by checking the length of function fn i.e. `if(arguments.length >= fn.length)`

 The length data property of a **Function** instance indicates the number of parameters expected by the function.

:::info

**Function** object's length property excludes the rest parameter and only includes parameters before the first one with a default value.
You can read more about this [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)

:::

implementation of curried function - 

```js showLineNumbers
function curry(fn) {
	return function curried(...args) {
    // highlight-start
		if (args.length >= fn.length) {
      // highlight-end
			return fn.apply(this, args);
		} else {
      // highlight-start
			return function(...args1) {
        // highlight-end
				return curried.apply(args.concat(args1));
			}
		}
	}
}
```

here on line 3 we added a check if we have enough arguments to call a function fn. if yes, we call a function.

on line 6 we wait for more arguments and return a new wrapper function that takes more arguments and calls our previous wrapper function curried recursively.

