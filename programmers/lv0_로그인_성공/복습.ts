/**
 * 프로그래머스 Lv.0 - 로그인 성공? (복습용)
 *
 * 문제: 로그인 시도 시 아이디/비밀번호 검증
 * - 모두 일치 → "login"
 * - 아이디 없음 → "fail"
 * - 아이디 일치, 비밀번호 불일치 → "wrong pw"
 *
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120883
 */

function solution(id_pw: string[], db: string[][]): string {
  // 여기에 코드를 작성하세요!

  return "";
}

// 테스트 케이스
console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
); // "login"

console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
); // "wrong pw"

console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
); // "fail"
