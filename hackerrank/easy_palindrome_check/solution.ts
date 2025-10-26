/**
 * HackerRank - Check Palindrome by Filtering Non-Letters
 * Difficulty: Easy
 *
 * 문제: 주어진 문자열에서 알파벳이 아닌 문자들을 필터링한 후,
 * 대소문자를 구분하지 않고 팰린드롬인지 확인하세요.
 *
 * 팰린드롬(Palindrome): 앞에서 읽으나 뒤에서 읽으나 같은 문자열
 * 예: "racecar", "A man a plan a canal Panama"
 */

const nonLetterRegex = /[^a-zA-Z]/g;

function isPalindrome(s: string): boolean {
  const str = s.replace(nonLetterRegex, "").toLowerCase();
  const reverStr = str.split("").reverse().join("");

  return str === reverStr;
}

// 테스트 케이스
console.log("=== 기본 테스트 ===");
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("race a car")); // false

console.log("\n=== 복잡한 테스트 (숫자, 한글 포함) ===");
console.log(isPalindrome("abc123cba")); // true (숫자 무시)
console.log(isPalindrome("A1B2C2B1A")); // true (숫자 무시)
console.log(isPalindrome("123안녕하세요456")); // ? (한글 무시, 알파벳 없음)
console.log(isPalindrome("ab안녕c한글cba")); // true (한글 무시: "abccba")
console.log(isPalindrome("a1!@#한글$%^b&*()b가나다a")); // true (특수문자/한글/숫자 무시: "abba")
console.log(isPalindrome("12345")); // ? (숫자만 있으면?)
console.log(isPalindrome("")); // ? (빈 문자열?)
console.log(isPalindrome("!@#$%")); // ? (알파벳 없으면?)
