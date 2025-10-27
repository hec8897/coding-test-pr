/**
 * HackerRank - Check Palindrome by Filtering Non-Letters (복습용)
 * Difficulty: Easy
 *
 * 문제: 알파벳이 아닌 문자들을 필터링하고,
 * 대소문자 구분 없이 팰린드롬인지 확인하세요.
 */

const regex = /[^a-zA-Z]/g;

function isPalindrome(s: string): boolean {
  // 여기에 코드를 작성하세요!
  const str = s.replace(regex, "").toLocaleLowerCase();

  if (str === str.split("").reverse().join("")) {
    return true;
  }

  return false;
}

// 테스트 케이스
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Mad123am!")); // true
console.log(isPalindrome("race! a car")); // false
