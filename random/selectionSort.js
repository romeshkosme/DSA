const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - i -1;
    let maxIndex = getMaxIndex(arr, 0, last)
    let temp = arr[maxIndex]
    arr[maxIndex] = arr[last]
    arr[last] = temp
  }
  return arr
}

const getMaxIndex = (arr, start, last) => {
  let max = start;

  for (let i = start; i <= last; i++) {
    max = arr[max] < arr[i] ? i : max
  }

  return max;
}

const main = () => {
  let arr = [3,1,5,4,2]
  const sortedArr = sort(arr)
  console.log("sortedArr :: ", sortedArr)
}

main()
