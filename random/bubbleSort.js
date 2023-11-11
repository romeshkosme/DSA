const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false
    for (let j = 1; j < arr.length-i; j++) {
      if (arr[j] < arr[j-1]) {
        // s w a p
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        swapped = true
      }
    }
    if (!swapped) break;
  }
  return arr
}

const main = () => {
  const arr = [1,2,3,4,5]
  const sortedArr = sort(arr)
  console.log("sortedArr :: ", sortedArr)
}

main()
