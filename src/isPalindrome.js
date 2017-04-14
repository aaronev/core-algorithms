export default function isPalindrome(str) {
  let string = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let revStr = string.split("").reverse().join("");
  if (string === revStr) return true
  else return false
}
