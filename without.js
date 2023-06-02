const assertArraysEqual = function(arr1, arr2) {
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

const without = function(source, itemsToRemove) {
  const filteredArray = source.filter(item => !itemsToRemove.includes(item));
  return filteredArray;
};

const words = ["hello", "world", "lighthouse"];
const filterwdWord = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(filterwdWord, ["hello", "world"]);