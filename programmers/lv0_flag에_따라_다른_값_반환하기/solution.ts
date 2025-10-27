/**
 * 프로그래머스 Lv.0 - flag에 따라 다른 값 반환하기
 *
 * 문제: 두 정수 a, b와 boolean 값 flag가 매개변수로 주어집니다.
 * - flag가 true이면 a + b를 return
 * - flag가 false이면 a - b를 return
 *
 * 제한사항:
 * - -1,000 ≤ a, b ≤ 10,000
 *
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181933
 */

function solution(a: number, b: number, flag: boolean): number {
  // 여기에 코드를 작성하세요!
  if (flag) {
    return a + b;
  } else {
    return a - b;
  }
}

// 테스트 케이스
console.log("=== 기본 테스트 ===");
console.log(solution(5, 3, true)); // 8 (5 + 3)
console.log(solution(5, 3, false)); // 2 (5 - 3)

console.log("\n=== 추가 테스트 ===");
console.log(solution(-4, 7, true)); // 3
console.log(solution(-4, 7, false)); // -11
console.log(solution(10, -5, true)); // 5
console.log(solution(10, -5, false)); // 15
console.log(solution(0, 0, true)); // 0
console.log(solution(0, 0, false)); // 0


