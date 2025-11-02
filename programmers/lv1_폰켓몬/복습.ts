/**
 * [Lv.1] 폰켓몬 - 복습
 *
 * 📌 문제 요약:
 * - N마리 중 N/2마리 선택 가능
 * - 최대한 다양한 종류를 선택하고 싶음
 * - 최대 몇 종류 선택 가능?
 *
 * 💡 핵심:
 * - Set으로 중복 제거
 * - Math.min(선택 가능 수, 종류 수)
 *
 * 예시:
 * [3, 1, 2, 3] → 4마리 중 2마리 선택
 * 종류: 3가지 (3, 1, 2)
 * 답: min(2, 3) = 2
 */

function solution(nums: number[]): number {
  const uniq = new Set(nums);

  return Math.min(nums.length / 2, uniq.size);
}

// 테스트 케이스
console.log("=== 폰켓몬 복습 ===\n");

console.log("테스트 1:");
console.log("입력: [3, 1, 2, 3]");
console.log("예상: 2");
console.log("결과:", solution([3, 1, 2, 3]));
console.log();

console.log("테스트 2:");
console.log("입력: [3, 3, 3, 2, 2, 4]");
console.log("예상: 3");
console.log("결과:", solution([3, 3, 3, 2, 2, 4]));
console.log();

console.log("테스트 3:");
console.log("입력: [3, 3, 3, 2, 2, 2]");
console.log("예상: 2");
console.log("결과:", solution([3, 3, 3, 2, 2, 2]));

export default solution;
