/**
 * HackerRank - Validate Properly Nested Brackets (복습용)
 * Difficulty: Easy
 *
 * 문제: 괄호로 이루어진 문자열이 올바르게 중첩되었는지 확인하세요.
 * 괄호 종류: (), [], {}
 * 
 * Return: 1 (valid) or 0 (invalid)
 */

function isValid(s: string): number {
  // 여기에 코드를 작성하세요!
  // 힌트: 스택(배열)을 사용하세요!

  return 0;
}

// 테스트 케이스
console.log("=== 올바른 괄호 ===");
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("{[]}")); // true
console.log(isValid("([{}])")); // true

console.log("\n=== 잘못된 괄호 ===");
console.log(isValid("(]")); // false (짝이 안 맞음)
console.log(isValid("([)]")); // false (순서가 잘못됨)
console.log(isValid("(((")); // false (닫는 괄호 없음)
console.log(isValid(")")); // false (여는 괄호 없음)

console.log("\n=== 엣지 케이스 ===");
console.log(isValid("")); // true (빈 문자열)
console.log(isValid("()()")); // true
console.log(isValid("({[]})")); // true
console.log(isValid("{[}]")); // false
