import sortCheck from '../src/sortCheck'
import setUnion from '../src/setUnion'
import bubbleSort from "../src/bubbleSort"

export default function mergeSort(array) {
  let divided = (arr) => {return arr.map(index => {return [index]})}

  console.log(divided(array))
  return divided(array)
  // let leftSide = (arr) => {return arr.slice(0, (arr.length / 2) + 1)}
  // let rightSide = (arr) => {return arr.slice((arr.length / 2) + 1, arr.length)}
  // let sortLeft = (left) => {return leftSide(left).length > 2 ? sortLeft(leftSide(left)) : bubbleSort(leftSide(left))}
  // let sortRight = (right) => {return rightSide(right).length > 2 ? sortRight(rightSide(right)) : bubbleSort(rightSide(right))}
  // console.log(sortLeft(array), sortRight(array))
  // //let divideSortMerge = (array) => {return setUnion(divideSortMerge(sortLeft(array)), divideSortMerge(sortRight(array)))}

  // console.log(divideSortMerge(array))

  //let merged = (left, right) => {return setUnion(divideLeft(left), divideRight(right))}
  //console.log(sortLeft(leftSide), sortRight(rightSide))
}

// let leftSide = array.slice(0, (array.length / 2))
//   let rightSide = array.slice((array.length / 2), array.length)
//   let divideSort = (arr) => {
//     let left = arr.slice(0, (arr.length/2) + 1)
//     let right = arr.slice((arr.length/2) + 1, arr.length)
//     let left2 = (leftside) => {return left.length <= 2 ? bubbleSort(left) : divideSort(left)}
//     let right2 = (rightside) => {return right.length <= 2 ? bubbleSort(right) : divideSort(right)}
//     let merged = setUnion(setUnion(left2(left), right2(right)))
//     sortCheck(merged) ? merged : divideSort(merged)
//     return merged
//   }
//   return divideSort(leftSide)



