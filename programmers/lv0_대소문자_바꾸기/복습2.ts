/**
 * 프로그래머스 Lv.0 - 대소문자 바꾸기 (복습 2회차)
 *
 * 문제: 문자열 my_string이 매개변수로 주어질 때,
 * 대문자는 소문자로, 소문자는 대문자로 변환한 문자열을 return하세요.
 */

function solution(my_string: string): string {
  // 여기에 코드를 작성하세요!
  return my_string
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLocaleLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
}

// 테스트 케이스
console.log(solution("cccCCC")); // "CCCccc"
console.log(solution("abCdEfghIJ")); // "ABcDeFGHij"
console.log(solution("Hello")); // "hELLO"
