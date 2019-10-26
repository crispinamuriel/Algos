const arr = [1, 3, 5, 7, 9];

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length-1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let guess = arr[mid];

    if (guess === target) {
      return mid;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

console.log(binarySearch(arr, 1));

