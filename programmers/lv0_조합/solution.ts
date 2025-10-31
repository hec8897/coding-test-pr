/**
 * [Lv.0] 조합 - 재귀 패턴 3: 백트래킹
 *
 * 🎯 문제: n개 중 r개 뽑는 조합의 개수
 *
 * 📌 재귀 패턴: 백트래킹
 * - 선택 → 진행 → 취소 (되돌아가기)
 * - push → 재귀 → pop
 * - 불필요한 경로 가지치기
 *
 * 💡 핵심:
 * 1. 종료 조건: 선택한 개수가 r개
 * 2. for 루프: 다음 선택지 탐색
 * 3. 백트래킹: pop()으로 선택 취소
 *
 * ⏰ 시간 복잡도: O(nCr)
 * 💾 공간 복잡도: O(r) - Call Stack
 */

function solution(arr: number[], r: number): number {
  let count = 0;

  // TODO: 백트래킹으로 구현해보세요!
  function dfs(start: number, current: number[]) {
    if (current.length === r) {
      count++;
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      dfs(i + 1, current);
      current.pop();
    }
  }

  dfs(0, []);
  return count;
}

// 테스트 케이스
console.log("=== 조합 (백트래킹) 테스트 ===\n");

console.log("테스트 1:");
console.log("arr: [1, 2, 3, 4], r: 2");
console.log("예상 결과: 6");
console.log("실제 결과:", solution([1, 2, 3, 4], 2));
console.log("조합:");
console.log("  [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]");
console.log();

console.log("테스트 2:");
console.log("arr: [1, 2, 3], r: 1");
console.log("예상 결과: 3");
console.log("실제 결과:", solution([1, 2, 3], 1));
console.log("조합:");
console.log("  [1], [2], [3]");
console.log();

console.log("테스트 3:");
console.log("arr: [1, 2, 3], r: 3");
console.log("예상 결과: 1");
console.log("실제 결과:", solution([1, 2, 3], 3));
console.log("조합:");
console.log("  [1,2,3]");

/**
 * 💡 백트래킹 실행 과정 이해하기
 *
 * arr = [1, 2, 3], r = 2
 *
 *              dfs(0, [])
 *          /      |      \
 *     push(1)  push(2)  push(3)
 *        ↓        ↓        ↓
 *   dfs(1,[1]) dfs(2,[2]) dfs(3,[3])
 *     /    \       |
 * push(2) push(3) push(3)
 *    ↓      ↓       ↓
 * [1,2]✨ [1,3]✨ [2,3]✨
 *    ↓      ↓       ↓
 * pop(2)  pop(3)  pop(3)
 *    ↓      ↓       ↓
 *  [1]     [1]     [2]
 *    ↓
 * pop(1)
 *    ↓
 *   []
 *
 *
 * 🔑 핵심:
 *
 * 1. push: 선택하기
 *    current.push(arr[i])
 *    → 현재 숫자를 조합에 추가
 *
 * 2. 재귀: 다음 단계로
 *    dfs(i + 1, current)
 *    → 다음 숫자 선택하러 가기
 *
 * 3. pop: 취소하기 (백트래킹!)
 *    current.pop()
 *    → 방금 선택한 숫자 제거
 *    → 다른 선택지 시도하기 위해
 *
 *
 * 📊 선택과 취소 추적:
 *
 * [1, 2, 3]에서 2개 뽑기
 *
 * 1. [] → push(1) → [1]
 * 2. [1] → push(2) → [1,2] ✨ count++
 * 3. [1,2] → pop(2) → [1]
 * 4. [1] → push(3) → [1,3] ✨ count++
 * 5. [1,3] → pop(3) → [1]
 * 6. [1] → pop(1) → []
 * 7. [] → push(2) → [2]
 * 8. [2] → push(3) → [2,3] ✨ count++
 * 9. [2,3] → pop(3) → [2]
 * 10. [2] → pop(2) → []
 *
 * 결과: count = 3
 *
 *
 * 🌲 왜 start 파라미터가 필요할까?
 *
 * start가 없으면:
 * [1] → [1,1], [1,2], [1,3] (중복!)
 *
 * start가 있으면:
 * [1] → [1,2], [1,3] (중복 없음)
 * 왜? i + 1부터 시작하니까 이전 원소는 선택 안 함!
 *
 *
 * 💭 분기 재귀 vs 백트래킹
 *
 * 분기 재귀 (타겟 넘버):
 *   - 모든 경로를 끝까지 탐색
 *   - 값을 반환해서 합산
 *   - return plus + minus
 *
 * 백트래킹 (조합):
 *   - 조건 만족하면 되돌아가기
 *   - count 변수로 개수 세기
 *   - push/pop으로 상태 관리
 *   - 불필요한 경로는 가지치기
 */

export default solution;
