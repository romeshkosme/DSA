const main = () => {
  const arr = [1,2,3,4,5,6,7,8,9]
  const findElem = 5
  const midPt = parseInt(arr.length/2)
  find(arr, 0, midPt, arr.length-1, findElem)
}

const find = (arr, start, midPt, endPt, findElem) => {
  if (arr[midPt] > findElem) {
    // search left
    endPt = midPt - 1
    midPt = parseInt((start+endPt)/2)
    find(arr, start, midPt, endPt, findElem)
  } else if (arr[midPt] === findElem) {
    // elem found
  } else {
    // search right
    start = midPt + 1
    midPt = parseInt((start+endPt)/2)
    find(arr, start, midPt, endPt, findElem)
  }
}

main()
