## LAB 3 - Functions and Arrays

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

- Reduce an array

The ```reduce()``` method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.

```javascript
const array = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array.reduce(reducer, 5));
// expected output: 15
```

- Map an array

The ```map()``` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const array = [1, 4, 9, 16];

// pass a function to map
const map = array.map(x => x * 2);

console.log(map);
// expected output: Array [2, 8, 18, 32]
```

- Reverse an array

The ```reverse()``` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```javascript
const array = ['one', 'two', 'three'];
console.log('array:', array);
// expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array:', array);
// expected output: "array:" Array ["three", "two", "one"]
```

- Sort an array

The ```sort()``` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array);
// expected output: Array [1, 100000, 21, 30, 4]
```

- Flat & Flat Map an array

The ```flat()``` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```javascript
const array = [0, 1, 2, [3, 4]];

console.log(array.flat());
// expected output: [0, 1, 2, 3, 4]

const array2 = [0, 1, 2, [[[3, 4]]]];

console.log(array2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

The ```flatMap()``` method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.

