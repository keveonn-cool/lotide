// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("✅✅✅ Assertion passed: " + actual + " = " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion failed: " + actual + " != " + expected);
  }

};

const tail = function(array) {
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

// TEST CODE to check


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);


