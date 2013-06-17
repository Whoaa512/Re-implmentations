var quickSort = function(array) {
  // base case
  if(array.length <= 1) { return array; }

  // store swap position & value
  var swapPos = ~~((array.length - 1) / 2);
  var swapValue = array[swapPos];
  var less = [];
  var more = [];

  // remove the `swapValue` from input to use as comparison
  array = array.slice(0, swapPos).concat(array.slice(swapPos + 1));

  for (var i = 0; i < array.length; i++) {
    if(array[i] < swapValue){
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }

  // recurse further
  return (quickSort(less)).concat(swapValue, quickSort(more));
};