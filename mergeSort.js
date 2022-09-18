function conquer(start, end, arr) {
  console.log(`start: ${start} -- end: ${end}`);
}
function divide(start, end, arr) {
  divide(start, Math.ceil(end / 2), arr);
  divide(Math.ceil(end / 2), end, arr);
  conquer(start, end, arr);
}
function main() {
  const arr = [3, 2, 1, 6, 5, 4];
  divide(0, arr.length, arr);
}
main()
// [3, 2, 1, 6, 5, 4];
// 0, 1, 2, 3, 4, 5;

// divide (start, end, arr):
//   divide(start, (end - start / 2), arr) -- divide to left
//   divide((end - start / 2), end, arr) -- divide to right
//   conquer()
