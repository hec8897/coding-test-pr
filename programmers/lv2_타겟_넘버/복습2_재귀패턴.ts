/**
 * [Lv.2] 타겟 넘버 - 재귀 패턴 2: 분기 재귀
 *
 * 🎯 문제: 숫자를 +/- 하여 target 만들기
 *
 * 📌 재귀 패턴: 분기 재귀 (트리)
 * - 두 번 이상 자기 자신을 호출
 * - 여러 경우의 수를 탐색
 * - 트리 구조로 뻗어나감
 *
 * 💡 핵심:
 * 1. 종료 조건: 모든 숫자를 다 사용했을 때
 * 2. 재귀 호출: 더하기 경우 + 빼기 경우
 *
 * ⏰ 시간 복잡도: O(2^n) - 각 숫자마다 2가지 선택
 * 💾 공간 복잡도: O(n) - Call Stack 깊이
 */

function solution(numbers: number[], target: number): number {
  // TODO: 분기 재귀로 구현해보세요!

  // DFS 함수 정의
  function dfs(index: number, sum: number): number {
    if (index === numbers.length) {
      return sum === target ? 1 : 0;
    }

    const plus = dfs(index + 1, sum + numbers[index]);
    const minus = dfs(index + 1, sum - numbers[index]);

    return plus + minus;
  }

  // DFS 시작 (index=0, sum=0)
  return dfs(0, 0);
}

// 테스트 케이스
console.log("=== 타겟 넘버 (분기 재귀) 테스트 ===\n");

console.log("테스트 1:");
console.log("numbers: [1, 1, 1, 1, 1], target: 3");
console.log("예상 결과: 5");
console.log("실제 결과:", solution([1, 1, 1, 1, 1], 3));
console.log("경우의 수:");
console.log("  +1+1+1+1-1 = 3");
console.log("  +1+1+1-1+1 = 3");
console.log("  +1+1-1+1+1 = 3");
console.log("  +1-1+1+1+1 = 3");
console.log("  -1+1+1+1+1 = 3");
console.log();

console.log("테스트 2:");
console.log("numbers: [4, 1, 2, 1], target: 4");
console.log("예상 결과: 2");
console.log("실제 결과:", solution([4, 1, 2, 1], 4));
console.log("경우의 수:");
console.log("  +4+1-2+1 = 4");
console.log("  +4-1+2-1 = 4");
console.log();

console.log("테스트 3:");
console.log("numbers: [1, 2], target: 3");
console.log("예상 결과: 1");
console.log("실제 결과:", solution([1, 2], 3));
console.log("경우의 수:");
console.log("  +1+2 = 3");

/**
 * 💡 분기 재귀 실행 과정 이해하기
 *
 * numbers = [1, 2], target = 3
 *
 *                  dfs(0, 0)
 *                 /         \
 *           +1: /             \ -1:
 *          dfs(1, 1)         dfs(1, -1)
 *         /         \       /          \
 *    +2:/           \-2: +2:/          \-2:
 *  dfs(2,3)    dfs(2,-1) dfs(2,1)  dfs(2,-3)
 *     ↓            ↓        ↓          ↓
 *  3==3? ✅    -1==3? ❌  1==3? ❌  -3==3? ❌
 *  return 1    return 0   return 0   return 0
 *
 * 결과: 1 + 0 = 1 (왼쪽 경로)
 *       0 + 0 = 0 (오른쪽 경로)
 * 최종: 1 + 0 = 1 ✨
 *
 *
 * 🌲 트리 구조로 이해하기:
 *
 * - 각 노드에서 2갈래로 분기
 * - 왼쪽: 더하기
 * - 오른쪽: 빼기
 * - 리프 노드: 종료 조건 (모든 숫자 사용)
 * - 리프에서 결과 반환
 * - 위로 올라가며 합산
 *
 *
 * 🔑 핵심 포인트:
 *
 * 1. 종료 조건
 *    - index === numbers.length (모든 숫자 사용)
 *    - sum === target이면 1, 아니면 0
 *
 * 2. 재귀 호출 (2번!)
 *    - dfs(index + 1, sum + numbers[index])  // 더하기
 *    - dfs(index + 1, sum - numbers[index])  // 빼기
 *
 * 3. 결과 합산
 *    - plusWay + minusWay
 *    - 두 경우의 수를 모두 세기
 *
 * 4. 시간 복잡도
 *    - O(2^n) - 각 숫자마다 2가지 선택
 *    - n=5 → 2^5 = 32가지 경우
 *
 *
 * 💭 단순 재귀 vs 분기 재귀
 *
 * 단순 재귀 (팩토리얼):
 *   factorial(5)
 *       ↓ 한 번만 호출
 *   factorial(4)
 *       ↓
 *   factorial(3)
 *
 * 분기 재귀 (타겟 넘버):
 *   dfs(0, 0)
 *     ↙     ↘ 두 번 호출!
 *   dfs(1,+)  dfs(1,-)
 *   ↙  ↘     ↙  ↘
 * dfs dfs  dfs dfs
 *
 * → 트리처럼 뻗어나감!
 */
