function numberOfItems(arr, item) {
  var merged = arr.concat.apply([], arr);
  console.log(merged);
  var temp = 0;
  for (let i = 0; i < merged.length; i++) {
    if (item === merged[i]) {
      var temp = temp + 1;
    }
  }
  return temp;
}

var arr = [
  25,
  "apple",
  ["banana", "strawberry", "apple", 25]
];
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));