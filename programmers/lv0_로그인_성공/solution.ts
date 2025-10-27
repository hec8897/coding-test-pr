/**
 * 프로그래머스 Lv.0 - 로그인 성공?
 *
 * 문제: 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와
 * 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
 * 로그인 성공, 실패에 따른 메시지를 return
 *
 * - 아이디와 비밀번호가 모두 일치 → "login"
 * - 아이디가 일치하는 회원이 없음 → "fail"
 * - 아이디는 일치하지만 비밀번호 불일치 → "wrong pw"
 *
 * 제한사항:
 * - 회원들의 아이디는 문자열 (알파벳 소문자와 숫자)
 * - 회원들의 패스워드는 숫자로 구성된 문자열
 * - 아이디는 중복 불가, 비밀번호는 중복 가능
 * - id_pw의 길이는 2
 * - id_pw와 db의 원소는 [아이디, 패스워드] 형태
 */

function solution(id_pw: string[], db: string[][]): string {
  // 여기에 코드를 작성하세요!
  const findId = db.find((ele) => id_pw[0] === ele[0]);

  if (!findId) {
    return "fail";
  }

  if (findId[1] !== id_pw[1]) {
    return "wrong pw";
  }

  return "login";
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

