/**
 * 프로그래머스 Lv.0 - 수의 연산값 비교하기
 *
 * 문제: 두 수 a, b가 주어질 때,
 * 1) a와 b를 붙여서 만든 수
 * 2) 2 × a × b
 * 둘 중 더 큰 값을 return
 *
 * 제한사항:
 * - 1 ≤ a, b < 10,000
 */

function solution(a: number, b: number): number {
  // 여기에 코드를 작성하세요!
  const concatenated = Number(String(a) + String(b));
  const multiplied = a * b * 2;

  if (concatenated >= multiplied) {
    return concatenated;
  }

  return multiplied;
}

// 테스트 케이스
console.log("=== 기본 테스트 ===");
console.log(solution(2, 91)); // 364 (2×2×91 > 291)
console.log(solution(91, 2)); // 912 (912 > 364)

console.log("\n=== 추가 테스트 ===");
console.log(solution(5, 5)); // 50 (55 > 50인지, 50 > 55인지)
console.log(solution(10, 5)); // 105 or 100?
console.log(solution(1, 1)); // 11 or 2?




