// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  const stringifyArray = function(arr) {
    return arr.length === 0 ? '[]' : arr.toString();
  };

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion passed: ${stringifyArray(arr1)} === ${stringifyArray(arr2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${stringifyArray(arr1)} !== ${stringifyArray(arr2)}`);
  }
};


const eqArrays = function(arr1, arr2) {
  if ( arr1.length !== arr2.length) {
    return false;
  }
  for ( let i= 0; i < arr1.length; i++)  {
    if(arr1[i] !== arr2[i] ) {
      return false;
    }
  }
  return true;


};


const middle = function(array) {
  let outputArray = [];
  if ( array.length <= 2) {
    return outputArray; }
  else if(array.length % 2 === 1) {
    outputArray.push(array[Math.floor((array.length/2))]);
  }

  else { 
    outputArray.push(array[array.length/2-1]);
    outputArray.push(array[array.length/2]);
  }
  return outputArray;
  };




const araayOddNumbers = [1,2,3,4,5];
const araayEvenNumbers = [1,2,3,4];
const araayWithOneElement = [1];


assertArraysEqual(middle(araayOddNumbers), [3]);
assertArraysEqual(middle(araayEvenNumbers), [2,3]);
assertArraysEqual(middle(araayWithOneElement), []);
