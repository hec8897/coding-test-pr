/**
 * 프로그래머스 Lv.0 - 대소문자 바꾸기
 *
 * 문제: 영어 알파벳으로 이루어진 문자열 str이 주어집니다.
 * 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
 *
 * 제한사항:
 * - 1 ≤ str의 길이 ≤ 20
 * - str은 알파벳으로 이루어진 문자열입니다.
 *
 * 입력 예시: "aBcDeFg"
 * 출력 예시: "AbCdEfG"
 */

function solution(str: string): string {
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

// 테스트 케이스
console.log(solution("aBcDeFg")); // "AbCdEfG"
console.log(solution("hello")); // "HELLO"
console.log(solution("WORLD")); // "world"
