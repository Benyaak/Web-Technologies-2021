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