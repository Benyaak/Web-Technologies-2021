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

c. Curly-bracket syntax - have a syntax that defines statement blocks using the curly bracket or brace characters { and }.

d. Dynamic type checking - is the process of verifying the type safety of a program at runtime. Implementations of dynamically type-checked languages generally associate each runtime object with a type tag (i.e., a reference to a type) containing its type information.

e. Prototype based - a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes.

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
let webtech = 42; // webtech is now a number
webtech = "math"; // webtech is now a string
webtech = true; // webtech is now a boolean
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

Single line comments start with `//`. Any text between `//` and the end of the line will be ignored by JavaScript - will not be executed.

Multi-line comments start with `/*` and end with `*/`. Any text between `/*` and `*/` will be ignored by JavaScript.

Examples below:

```javascript
// This is a single line comment

/*
Here we
have multiple comments
on multiple lines
*/
```

### Control structures

The control structures within JavaScript allow the program flow to change within a unit of code or function. These statements can determine whether or not given statements are executed - and provide the basis for the repeated execution of a block of code.

Most of the statements listed below are so-called conditional statements that can operate either on a statement or on a block of code enclosed with braces ({ and }). The structure provided by the use of conditional statements utilizes Booleans to determine whether or not a block gets executed. In this use of Booleans, any defined variable that is neither zero nor an empty string will be evaluated as true.

#### **The if strucutre**

The if statement is straightforward — if the given expression is true, the statement or statements will be executed. Otherwise, they are skipped.

```javascript
if (a === b) {
  console.log("a is equal to b");
}
```

The if statement may also consist of multiple parts, incorporating else and else if sections. These keywords are part of the if statement, and identify the code blocks that are executed, if the preceding condition is false.

```javascript
if (a === b) {
  console.log("a is equal to b");
} else if (a === c) {
  console.log("a is equal to c");
} else {
  console.log("a is not equal to b, nor c");
}
```

#### **while structure**

The while statement executes a given statement as long as a given expression is true. For example, the code block below will increase the variable c to 10:

```javascript
while (c < 10) {
  c += 1;
}
```

This control loop also recognizes the break and continue keywords. The break keyword causes the immediate termination of the loop, allowing for the loop to terminate from anywhere within the while block.

The continue keyword finishes the current iteration of the while block or statement, and checks the condition to see, if it is true. If it is true, the loop commences again.

### **do … while structure**

The do … while statement executes a given statement as long as a given expression is true - however, unlike the while statement, this control structure will always execute the statement or block at least once. For example, the code block below will increase the variable c to 10:

```javascript
do {
  c += 1;
} while (c < 10);
```

As with while, break and continue are both recognized and operate in the same manner. In other words, break exits the loop, and continue checks the condition before attempting to restart the loop.

### **The _famous_ for structure**

The for statement allows greater control over the condition of iteration. While it has a conditional statement, it also allows a pre-loop statement, and post-loop increment without affecting the condition. The initial expression is executed once, and the conditional is always checked at the beginning of each loop. At the end of the loop, the increment statement executes before the condition is checked once again. The syntax is:

`for (<initial expression>;<condition>;<final expression>)`

The for statement is usually used for integer counters:

```javascript
for (let c = 0; c < 10; c += 1) {
  console.log(c);
}
```

While the increment statement is normally used to increase a variable by one per loop iteration, it can contain any statement, such as one that decreases the counter.

break and continue are both recognized. The continue statement will still execute the increment statement before the condition is checked.

A second version of this loop is the for .. in statement that has following form:

```javascript
for (element in object) {
  console.log(element);
}
```

The order of object elements accessed by this version is arbitrary. For instance, this structure can be used to loop through all the properties of an object instance. It should not be used when the object is of Array type.

### **The switch structure**

The switch statement evaluates an expression, and determines flow control based on the result of the expression:

```javascript
switch (i) {
  case 1:
    console.log("I'm 1");
    break;
  case 2:
    console.log("I'm 2");
    break;
  default:
    console.log("I'm 3");
    break;
}
```

When i gets evaluated, its value is checked against each of the case labels. These case labels appear in the switch statement and, if the value for the case matches i, continues the execution at that point. If none of the case labels match, execution continues at the default label (or skips the switch statement entirely, if none is present.)

Omitting the break can be used to test for more than one value at a time:

```javascript
switch(i) {
case 1:
case 2:
case 3:
  console.log('1,2 or 3');
  break;
case 4:
  console.log('4');
  break;
default:
  console.log('default');
  break;
}
```

