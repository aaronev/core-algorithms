export default function binarySearch(array, query) {
  let newArr = array.slice(0,0)
  let left = newArr.splice(0, newArr.length/2)
  let right = newArr 
  let len = left[left.length - 1]
  let findingInLeft = query < len ? binarySearch(left, query) : query
  let findingInRight = query > right[0] ? binarySearch(right, query) : query
  let found = findingInLeft || findingInRight
  return array.indexOf(found) 
}