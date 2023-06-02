// FUNCTION IMPLEMENTATION
const assertEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
      console.log(" ✅✅✅ Assertion passed : " + arr1 + " === " + arr2);
  }
  else {
      console.log(" 🛑🛑🛑 Assertion failed : " +  arr1 +" !== "  +  arr2);
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

// TEST CODE to check
assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 9], [1, 2, 3]);