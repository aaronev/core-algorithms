export default function fibonacci(num) {
  let arr = [0, 1]
  while (num > 2) {
    let len = arr.length
    arr.push(arr[len - 2] + arr[len - 1])
    fibonacci(num -= 1)
  }
  return arr
} 