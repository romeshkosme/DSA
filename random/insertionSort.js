//  I N S E R T I O N      S O R T
const sort = (arr) => {
  const arrLen = arr.length
  for (let i = 0; i < arrLen-1; i++) {
    let swapped = false
    for (let j = i+1; j > 0; j--) {
      // console.log(arr[j])
      if (arr[j] < arr[j-1]) {
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        swapped = true
      }
      if (!swapped){
        break;
      }
    }
    return arr
  }
}

const main = () => {
  const arr = [3,1,4,5,6]
  const sortedArr = sort(arr)
  console.log(sortedArr)
}

main()
