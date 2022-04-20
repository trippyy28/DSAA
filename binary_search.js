function binarySearch(list, target) {
  let first = 0;
  let last = list.length - 1;
  while (first <= last) {
    const midpoint = Math.floor(first + last / 2);
    if (list[midpoint] == target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpont + 1;
    } else {
      last = midpoint - 1;
    }
  }
  console.log(last);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

binarySearch(nums, 6);
