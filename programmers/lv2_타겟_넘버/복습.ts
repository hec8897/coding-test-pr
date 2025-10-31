/**
 * 타겟 넘버 - 복습
 *
 * DFS(깊이 우선 탐색) + 재귀
 *
 * 복습 시간: ___분
 *
 * 핵심 개념:
 * - 재귀 함수로 모든 경우의 수 탐색
 * - 각 숫자마다 +와 - 두 가지 선택지
 * - 종료 조건: 모든 숫자를 다 사용했을 때
 *
 * 시간 복잡도: O(2^n)
 */

function solution(numbers: number[], target: number): number {
  function dfs(index: number, sum: number): number {
    if (index === numbers.length) {
      // 모든 숫자를 다 사용함
      return sum === target ? 1 : 0; // 타겟과 같으면 1
    }
    const plusWay = dfs(index + 1, sum + numbers[index]);
    const minusWay = dfs(index + 1, sum - numbers[index]);

    return plusWay + minusWay;
  }

  return dfs(0, 0);
}

// ============================================
// 테스트 케이스
// ============================================

console.log("=== 타겟 넘버 복습 테스트 ===\n");

// 테스트 1
console.log("테스트 1:", solution([1, 1, 1, 1, 1], 3));
// 예상: 5
// +1+1+1+1-1 = 3
// +1+1+1-1+1 = 3
// +1+1-1+1+1 = 3
// +1-1+1+1+1 = 3
// -1+1+1+1+1 = 3

// 테스트 2
console.log("테스트 2:", solution([4, 1, 2, 1], 4));
// 예상: 2
// +4+1-2+1 = 4
// +4-1+2-1 = 4

// 테스트 3
console.log("테스트 3:", solution([1, 2, 3, 4], 10));
// 예상: 0
// 1+2+3+4 = 10 (모두 + 하나만 가능)

// 테스트 4
console.log("테스트 4:", solution([2, 3], 5));
// 예상: 1
// +2+3 = 5

// ============================================
// 실행 방법
// ============================================
// ts-node 복습.ts
