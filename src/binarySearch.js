export default function binarySearch (numbers, num){
  for (let i = 0; i < numbers.length; i++) {
    if (num === numbers[i]) {
      return i
    }
  }
  for (let i = 0; i < numbers.length; i++) {
      if (num !== numbers[i]) {
        return 'Not Found'
    }
  }
}
