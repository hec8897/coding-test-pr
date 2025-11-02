/**
 * [Lv.2] 타겟 넘버 - 복습 (분기 재귀 구현)
 *
 * 📌 문제 요약:
 * - 숫자를 +/- 하여 target 만들기
 * - 방법의 개수 구하기
 *
 * 💡 핵심:
 * - 분기 재귀 (Branching Recursion)
 * - 각 단계마다 2가지 선택 (+ 또는 -)
 * - 개수의 합으로 결과 반환
 *
 * 예시:
 * numbers = [1, 1, 1, 1, 1], target = 3
 *
 * -1+1+1+1+1 = 3 ✅
 * +1-1+1+1+1 = 3 ✅
 * +1+1-1+1+1 = 3 ✅
 * +1+1+1-1+1 = 3 ✅
 * +1+1+1+1-1 = 3 ✅
 *
 * 총 5가지 방법
 *
 * 🔑 재귀 구조:
 *
 * function dfs(index, sum):
 *   1. 종료 조건: index === numbers.length
 *      - sum === target이면 1 (성공)
 *      - 아니면 0 (실패)
 *
 *   2. 재귀 호출 (2번!)
 *      - plusWay = dfs(index + 1, sum + numbers[index])
 *      - minusWay = dfs(index + 1, sum - numbers[index])
 *
 *   3. 결과 합산
 *      - return plusWay + minusWay
 */

function solution(numbers: number[], target: number): number {
  // TODO: DFS 함수를 구현하고 호출하세요!

  function dfs(index: number, sum: number): number {
    if (index === numbers.length) {
      return sum === target ? 1 : 0;
    }

    const plus = dfs(index + 1, sum + numbers[index]);
    const minus = dfs(index + 1, sum - numbers[index]);

    return plus + minus;
  }

  return dfs(0, 0); // 시작: index=0, sum=0
}

// 테스트 케이스
console.log("=== 타겟 넘버 복습 ===\n");

console.log("테스트 1:");
console.log("numbers: [1, 1, 1, 1, 1], target: 3");
console.log("예상: 5");
console.log("결과:", solution([1, 1, 1, 1, 1], 3));
console.log();

console.log("테스트 2:");
console.log("numbers: [4, 1, 2, 1], target: 4");
console.log("예상: 2");
console.log("결과:", solution([4, 1, 2, 1], 4));

export default solution;
