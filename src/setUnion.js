export default function setUnion(arr1, arr2) {
  let unite = arr1.concat(arr2)
    function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
    }
  return unite.filter(onlyUnique)
}