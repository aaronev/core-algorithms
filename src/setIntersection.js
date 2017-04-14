export default function setIntersection(arr1, arr2) {
  let unite = arr1.concat(arr2)
  function intersect(value, index, self) { 
    return self.indexOf(value) !== index
  }
  return unite.filter(intersect)
}
