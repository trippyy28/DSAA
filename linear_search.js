function linearSearch(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == target) {
      console.log(`found at index ${i}`);
    }
  }
  return "Not Found";
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

linearSearch(numbers, 3);
linearSearch(numbers, 9);
