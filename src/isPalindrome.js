export default function isPalindrome(str) {
  let string = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let revStr = string.split("").reverse().join("");
  return string === revStr ? true : false
}
