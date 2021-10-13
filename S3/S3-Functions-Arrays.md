## LAB 3 - Functions and Arrays - Work in progress

In this session we had the opportunity to do some operations with functions and arrays. Both of them are a baseline for the course, since most of the work that we do
is based on the them.

### Arrays

The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

Arrays cannot use strings as element indexes (as in an associative array) but must use integers. Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.

Let's see a few common operations on the arrays:

- Create an Array

As you can see in the following example, we have declared a new variabile named ```cars``` which is initialised with an array of strings represeting car brands.

```javascript
let cars = ['Honda', 'Mazda', 'BMW', 'Mercedes Benz'];
```

- Return the length of an array

In order to return the number of elements present in the array, we use the property ```.length``` on the array variable, like so:

```javascript
cars.length; // Returns a number (4)
console.log(cars.length);
```

- Access an Array item using the index position

We can directly access an array element using the index position.

```javascript
cars[2] // Returns 'BMW' - Also remember, like C/C++ and other programming languages, arrays are 0 indexed structures (Count starts from 0).
console.log(cars[2]);
```

- Loop over an Array

We have multiple ways to loop/iterate over an array structure.

a. Using forEach on the array variable.

```javascript
cars.forEach((item) => {
    console.log(item);
});
// Prints to console the array in order
// 'Honda', 'Mazda', 'BMW', 'Mercedes Benz'
```

More over, in the callback function for the _forEach_ structure, we can pass multiple parameters, such as the index and even the whole array.

```javascript
cars.forEach((item, index) => {
    console.log(item, index);
});
// Prints to console the array item and its index.
// 'Honda' 0, 'Mazda' 1, 'BMW' 2, 'Mercedes Benz' 3
```

b. Using a classic _for_ structure

```javascript
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
```

c. Using a itemised _for_ structure

```javascript
for (const car of cars) {
    console.log(car);
}
// Prints out to console the array in order
// 'Honda', 'Mazda', 'BMW', 'Mercedes Benz'
```

- Add an item to the end of an Array

We use the ```.push(item)``` function available on a initialised array variabile.

```javascript
cars.push('Dacia');
// The array is now ['Honda', 'Mazda', 'BMW', 'Mercedes Benz', 'Dacia']
```

- Remove an item from the end of an Array

We use the ```.pop()``` function available on a initialised array variable.

```javascript
cars.pop();
// Removes the 'Dacia' item, since it's the last element in the array.
// The array is now ['Honda', 'Mazda', 'BMW', 'Mercedes Benz']
```

- Add an item to the beginning of an Array

We use the ```.unshift(item)``` function available on a initialised array variabile.

```javascript
cars.unshift('Dacia');
// The array is now ['Dacia', 'Honda', 'Mazda', 'BMW', 'Mercedes Benz']
```

- Remove an item from the beginning of an Array

We use the ```.shift()``` function available on a initialised array variabile.

```javascript
cars.shift();
// Removes the 'Dacia' item, since it's the first element in the array.
// The array is now ['Honda', 'Mazda', 'BMW', 'Mercedes Benz']
```

- Find the index of an item in the Array

We use the ```.indexOf(item)``` function available on a initialised array variabile.

```javascript
cars.indexOf('Honda'); // Returns 0
cars.indexOf('BMW'); // Returns 2
```

- Remove an item by index position

We use the ```.splice(index, 1)``` function available on a initialised array variabile.
Also, the ```splice``` function has actually 2 parameters, the index where to start deleting from, and how many elements. So let's say you want to delete 2 elements from a starting position, the function to it is ```.splice(index, 2)``` and so on.

```javascript
cars.splice(1, 1); // Removes the 'Mazda' element since it's on the position 1 in the array and also reading the second parameter, we mentioned we delete only one elements.
// The array is now  ['Honda', 'BMW', 'Mercedes Benz']
```




