const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const lastIndex = arr.length - i - 1
    const maxNumIndex = getMaxNumIndex(arr, 0, lastIndex)
    const temp = arr[maxNumIndex]
    arr[maxNumIndex] = arr[lastIndex]
    arr[lastIndex] = temp
  }
  return arr
}

const getMaxNumIndex = (arr, start, lastIndex) => {
  let maxNumIndex = start
  for (let i = start; i <= lastIndex; i++) {
    maxNumIndex = arr[maxNumIndex] < arr[i] ? i : maxNumIndex
  }
  return maxNumIndex
}

const main = () => {
  const sortedArr = sort([3,1,5,5,4])
  console.log("sortedArr :: ", sortedArr)
}

main()
