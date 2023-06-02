const flatten = function(arr) {
  let flattenedArray = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(flatten(element));
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};
const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, [9]]];
const flattenedArray = flatten(nestedArray);
console.log(flattenedArray);