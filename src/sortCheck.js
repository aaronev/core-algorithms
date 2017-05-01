export default function sortCheck(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
    else if (array[i] < array[array[i + 1]]) {
      return true
    }
  }
}

//Used for the purpose of checking if array is sorted