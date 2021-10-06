## LAB 2 - Introduction to javascript

Since there was a slight change in the structure of the semester, we will not start with HTML/HTTP for the second seminar, instead, we will kick off
with a introduction to Javascript language.

Last time, we had the chance to experiment with some Javascript features on the code sandbox - but we didn't go to much in depth of what is Javascript and
why do we use it.

Javascript is a **programming language**, and it is also grouped in different standards named **ECMAScript specification**. Each ECMAScript specification brings new
features to the table in terms of how we write Javascript code.

JavaScript is **high-level**, often **just-in-time compiled**, and **multi-paradigm**. It has **curly-bracket syntax**, **dynamic typing**, **prototype-based object-orientation**, and 
**first-class functions**.

a. High Level Language - is a programming language with strong abstraction from the details of the computer. Take for example what you did in your first year, on it's
name, Assembler, which was a the lowest level of programming language since it was machine readable code.

b. Just-in-time compiled - is a way of executing computer code that involves compilation during execution of a program rather than before execution.

c. Curly-bracket syntax -  have a syntax that defines statement blocks using the curly bracket or brace characters { and }.

d. Dynamic type checking - is the process of verifying the type safety of a program at runtime. Implementations of dynamically type-checked languages generally associate each runtime object with a type tag (i.e., a reference to a type) containing its type information.

e. Prototype based -  a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes.

f. First class functions - This means the language supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures.

### Javascript Variables

There are 3 ways to declare a JavaScript variable:

- Using **var**
- Using **let**
- Using **const**

### Data types used in Javascript

As mentionted above, Javascript has a dynamic type checking system combined with a loosely typed style. 
Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

Example of dynamic typing:
```javascript
let webtech = 42;     // webtech is now a number
webtech     = 'math'; // webtech is now a string
webtech     = true;   // webtech is now a boolean
```

The set of types in the JavaScript language consists of primitive values and objects.

- Primitive values
  - Boolean type
  - Null type
  - Undefined type
  - Number type
  - BigInt type
  - String type
  - Symbol type
- Objects (collections of properties)

### How to comment out Javascript code

Single line comments start with ```//```. Any text between ```//``` and the end of the line will be ignored by JavaScript - will not be executed.

Multi-line comments start with ```/*``` and end with ```*/```. Any text between ```/*``` and ```*/``` will be ignored by JavaScript.

Examples below: 
```javascript
// This is a single line comment

/*
Here we
have multiple comments
on multiple lines
*/
```

