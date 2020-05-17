// The copyWithin() method copies array elements to another position in the array.

// The method will never add more items to the array
// It only overwrites the original array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);

console.log(fruits);
