# `Big O`

Metric to describe the efficiency of an algorithm.

## Examples

### `O(1)`
  ```
  (a, b) => return a + b;
  ```
### `O(N)`
  ```
  // regular for-loop
  arr => {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  ```
### `O(log N)`
  ```
  // TODO: binary search
  const binarySearch = (arr, query) => {
    let mid = Math.floor(arr.length / 2);
    let len = arr.length;
    
    if (arr[mid] === query) {
      return arr[mid];
    } else if (arr[mid] < query && len > 1) { 
      return binarySearch(arr.splice(mid, len), query);
    } else if (arr[mid] > query && len > 1) { 
      return binarySearch(arr.splice(0, mid), query);
    } else {
      return -1;
    }
  }
  ```
### `O(N log N)`
### `O(sqt(N))`
### `O(branches^depth)`
### `O(N!)`
### `O(N^N)`
### `O(A+B)`
### `O(A*B)`
### `O(A/B)`