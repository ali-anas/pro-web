---
sidebar_position: 1
---

# Async Intro

Here are my implementation of some of Promise concurrency methods and async helper functions.


The Promise class offers four static methods to facilitate async task concurrency:

1. **[Promise.all()](./1.md)** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

2. **[Promise.allSettled()](./2.md)** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fulfills when all promises settle.

3. **[Promise.any()](./3.md)** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fulfills when any of the promises fulfills; rejects when all of the promises reject.

4. **[Promise.race()](./4.md)** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills, rejects when any of the promises rejects.

- **[setTimeout and clearTimeout polyfill](./5.md)**

