// merge sort
var mergeSort = function(array, compare) {
  var length = array.length;
  var middle = ~~(length/2);

  // define default comparison function if none is defined
  if (!compare) {
    compare = function(left, right) {
      if (left < right) {
        return -1;
      } else if (left === right) {
        return 0;
      } else {
        return 1;
      }
    };
  }

  // base case
  if(length < 2) { return array; }

  var merge = function(left, right, compare) {
    var result = [];
    while (left.length > 0 || right.length > 0) { // while there are things to be merged
      if(left.length > 0 && right.length > 0) { // make sure we have arrays to merge
        if(compare(left[0], right[0]) <= 0) {
          result.push(left[0]);
          left = left.slice(1);
        } else {
          result.push(right[0]);
          right = right.slice(1);
        }
      } else if(left.length > 0) {
        result.push(left[0]);
          left = left.slice(1);
      } else if(right.length > 0) {
        result.push(right[0]);
        right = right.slice(1);
      }
    }
    return result;
  };

  return merge(
    mergeSort(array.slice(0, middle), compare),
    mergeSort(array.slice(middle, length), compare),
    compare
  );
};
