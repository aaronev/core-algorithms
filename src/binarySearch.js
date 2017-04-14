export default function binarySearch(array, query) {
  let newArr = array.splice(0,0)
  function searchTree(arr, num) {
    let left = arr.splice(0, arr.length/2)
    let right = arr
    if (num < left[left.length - 1]) {
      searchTree(left, num)
    }
    else if (num > right[0]) {
      searchTree(right, num)
    }
    else return num
  }
  return array.indexOf(searchTree(newArr, query))
}

//testing