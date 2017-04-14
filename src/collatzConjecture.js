export default function collatzConjecture(num) {
  let array = [num]
  while (num > 1) {
    if (num % 2 === 0) {
      array.push(num /= 2)
      collatzConjecture(num)
    } 
    else {
      num *= 3 
      num += 1
      array.push(num)
      collatzConjecture(num)
    }
  }
  return array
}