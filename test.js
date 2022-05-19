((arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minimum = arr[i];
    let j = i + 1;
    let minIndex;
    while (j < arr.length) {
      if (minimum > arr[j]) {
        minimum = arr[j];
        minIndex = j;
      }
      j++;
    }
    if (!minIndex) break;
    let temp = arr[i];
    arr[i] = minimum;
    arr[minIndex] = temp;
  }
  console.log(arr);
})([5, 4, 3, 2, 1]);
