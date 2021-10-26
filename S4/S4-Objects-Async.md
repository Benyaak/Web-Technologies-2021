## LAB 4 - Objects and Async

During our fourth lab we had the chance to experiment with class and their objects, basically object oriented programming, and also how async programming works.

But let's start off with Javascript Classes:

### *What is a Javascript class you probably wonder?!*

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

### Aaaaaa, but how do we define and declare classes?!

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Room" here).

```javascript
class Room {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

```javascript
const p = new Room(); // ReferenceError

class Room {}
```

### Class body & method definition

The body of a class is the part that is in curly brackets {}. This is where you define class members, such as methods or constructor.

- **Constructor**

The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

A constructor can use the super keyword to call the constructor of the super class.

- **Static initialization blocks**

Class static initialization blocks allow flexible initialization of class static properties including the evaluation of statements during initialization, and granting access to private scope.

Multiple static blocks can be declared, and these can be interleaved with the declaration of static properties and methods (all static items are evaluated in declaration order).

- **Prototype methods**

```javascript
class Room {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calculateArea();
  }

  calculateArea() {
    return this.height * this.width;
  }
}

const room = new Room(10, 10);

console.log(room.area); // The result will be 100
```

### Promises

The **Promise** object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

![promises structure](./promises.png)

### Chained promises

The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a promise that becomes settled.

The .then() method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, and the second argument is a callback function for the rejected case. Each .then() returns a newly generated promise object, which can optionally be used for chaining; for example:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);
```

Processing continues to the next link of the chain even when a .then() lacks a callback function that returns a Promise object. Therefore, a chain can safely omit every rejection callback function until the final .catch().

Handling a rejected promise in each .then() has consequences further down the promise chain. Sometimes there is no choice, because an error must be handled immediately. In such cases we must throw an error of some type to maintain error state down the chain. On the other hand, in the absence of an immediate need, it is simpler to leave out error handling until a final .catch() statement. A .catch() is really just a .then() without a slot for a callback function for the case when the promise is resolved.

```javascript
myPromise
.then(handleResolvedA)
.then(handleResolvedB)
.then(handleResolvedC)
.catch(handleRejectedAny);
```

Using Arrow Function Expressions for the callback functions, an implementation of a promise chain might look something like this:

```javascript
promise1
.then(value => { return value + ' and bar'; })
.then(value => { return value + ' and bar again'; })
.then(value => { return value + ' and again'; })
.then(value => { return value + ' and again'; })
.then(value => { console.log(value) })
.catch(err => { console.log(err) });
```

The termination condition of a promise determines the "settled" state of the next promise in the chain. A "resolved" state indicates a successful completion of the promise, while a "rejected" state indicates a lack of success. The return value of each resolved promise in the chain is passed along to the next .then(), while the reason for rejection is passed along to the next rejection-handler function in the chain.

The promises of a chain are nested like Russian dolls, but get popped like the top of a stack. The first promise in the chain is most deeply nested and is the first to pop.

```
(promise D, (promise C, (promise B, (promise A) ) ) )
```

When a nextValue is a promise, the effect is a dynamic replacement. The return causes a promise to be popped, but the nextValue promise is pushed into its place. For the nesting shown above, suppose the .then() associated with "promise B" returns a nextValue of "promise X". The resulting nesting would look like this:

```
(promise D, (promise C, (promise X) ) )
```

A promise can participate in more than one nesting. For the following code, the transition of promiseA into a "settled" state will cause both instances of .then() to be invoked.

```javascript
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

An action can be assigned to an already "settled" promise. In that case, the action (if appropriate) will be performed at the first asynchronous opportunity. Note that promises are guaranteed to be asynchronous. Therefore, an action for an already "settled" promise will occur only after the stack has cleared and a clock-tick has passed. The effect is much like that of setTimeout(action,10).

```javascript
const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
// At this point, "promiseA" is already settled.
promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
```

### The basics of async/await

There are two parts to using async/await in your code.

**The async keyword**

First of all we have the async keyword, which you put in front of a function declaration to turn it into an async function. An async function is a function that knows how to expect the possibility of the await keyword being used to invoke asynchronous code.

Try typing the following lines into your browser's JS console:

```javascript
function helloWorld() { 
  return "hello World" 
};
helloWorld();
```

The function returns "Hello World" — nothing special, right?

But what if we turn this into an async function? Try the following:

```javascript
async function helloWorld() { 
  return "hello World" 
};
helloWorld();
```

Invoking the function now **returns a promise**. This is one of the traits of async functions — their return values are guaranteed to be converted to promises.

You can also create an async function expression, like so:

```javascript
let helloWorld = async function() { 
  return "Hello World" 
};
helloWorld();
```

or you can use arrow functions:

```javascript
let helloWorld = async () => "Hello World";
```

These all do basically the same thing.

To actually consume the value returned when the promise fulfills, since it is returning a promise, we could use a .then() block:

```javascript
hello().then((value) => console.log(value));
```

or even just shorthand such as:

```javascript
hello().then(console.log);
```

So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.

**The await keyword**

The advantage of an async function only becomes apparent when you combine it with the await keyword. await only works inside async functions within regular JavaScript code, however it can be used on its own with JavaScript modules.

await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

You can use await when calling any function that returns a Promise, including web API functions.

Here is a trivial example:

```javascript
async function helloWorld() {
  return await Promise.resolve("Hello World");
};

helloWorld().then(alert);
```

Of course, the above example is not very useful, although it does serve to illustrate the syntax.

