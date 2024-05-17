//           JavaScript Number Methods

//toString() - The toString() method returns a number as a string.
// let x = 123;
// console.log(x.toString());
// (123).toString();
// (100 + 23).toString();


// ***********************************************************************
//toExponential() - toExponential() returns a string, with a number rounded and written using exponential notation.

// let x = 9.656;
// let y = x.toExponential(2);
// console.log(x.toExponential(4));
// x.toExponential(6);
// console.log(y);




// *************************************************************************
//toFixed() - toFixed() returns a string, with the number written with a specified number of decimals:

// let x = 9.656;
// console.log(x.toFixed(0));
// console.log(x.toFixed(2));
// x.toFixed(4);
// x.toFixed(6);


// **************************************************************************
//toPrecision() - toPrecision() returns a string, with a number written with a specified length:

// let x = 9.656;
// x.toPrecision();
// x.toPrecision(2);
// x.toPrecision(4);
// x.toPrecision(6);
// console.log(x.toPrecision());


// ****************************************************************************
//valueOf() - valueOf() returns a number as a number.
//In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
//The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.


// let x = 123;
// x.valueOf();
// (123).valueOf();
// (100 + 23).valueOf();
// console.log(x.valueOf);
// console.log(x.valueOf());


// Number()	Returns a number converted from its argument.
// parseFloat()	Parses its argument and returns a floating point number
// parseInt()	Parses its argument and returns a whole number
// The methods above are not number methods. They are global JavaScript methods.



// #############################################################################################
// indexOf() - The indexOf() method searches an array for an element value and returns its position.

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") + 1;
// console.log(position);
// console.log(fruits.indexOf(3));


// const arr = ["Apple", "Orange", "Apple", "Mango"];
// console.log(arr.indexOf("Apple"));
// console.log(arr.indexOf("Orange"));
// console.log(arr.indexOf("Apple"));
// console.log(arr.indexOf("Mango"));


// ***********************************************************************************************
//lastIndexOf() - Array.lastIndexOf() is the same as Array.indexOf(), 
//but returns the position of the last occurrence of the specified element.

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple") + 1;
// console.log(fruits.lastIndexOf("Apple"));
// console.log(fruits.lastIndexOf("Mango"));
// console.log(fruits.lastIndexOf("Apple"));
// console.log(fruits.lastIndexOf("Apple") + 1);



// ***********************************************************************************************
//Array.includes() - This allows us to check if an element is present in an array (including NaN, unlike indexOf).

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Banana"));
// console.log(fruits.includes("Orange"));
// console.log(fruits.includes("Apple"));
// console.log(fruits.includes("Mango"));





// **************************************************************************************************
//find() - The find() method returns the value of the first array element that passes a test function.


