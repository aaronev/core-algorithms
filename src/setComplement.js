export default function setComplement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) >= 0) {
      let pos = arr2.indexOf(arr1[i]);
      arr2.splice(pos, 1)
    }
  }
  return arr2
}