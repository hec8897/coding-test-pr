/**
 * 모음 사전
 *
 * DFS(깊이 우선 탐색) + 완전탐색
 *
 * 풀이 시간: ___분
 *
 * 핵심 개념:
 * - 재귀로 모든 단어 생성 (사전 순서대로)
 * - 현재 단어를 세면서 진행
 * - 목표 단어를 찾으면 종료
 *
 * 시간 복잡도: O(5^5) = 3125 (최대)
 */

function solution(word: string): number {
  let count = 0;
  const chars = ["A", "E", "I", "O", "U"];
  function dfs(current: string) {
    // 빈 문자열이 아닐 때만 세기!
    if (current !== "") {
      count++;
    }

    if (current === word) {
      return;
    }

    if (current.length === 5) {
      return;
    }

    for (let char of chars) {
      dfs(current + char);
    }
  }

  dfs("");
  return count;
}

// ============================================
// 테스트 케이스
// ============================================

console.log("=== 모음 사전 테스트 ===\n");

// 테스트 1
console.log('테스트 1: "AAAAE" =', solution("AAAAE"));
// 예상: 6
// 1:A, 2:AA, 3:AAA, 4:AAAA, 5:AAAAA, 6:AAAAE

// 테스트 2
console.log('테스트 2: "AAAE" =', solution("AAAE"));
// 예상: 10

// 테스트 3
console.log('테스트 3: "I" =', solution("I"));
// 예상: 1563

// 테스트 4
console.log('테스트 4: "EIO" =', solution("EIO"));
// 예상: 1189

// 테스트 5: 간단한 케이스
console.log('테스트 5: "A" =', solution("A"));
// 예상: 1

console.log('테스트 6: "AA" =', solution("AA"));
// 예상: 2

console.log('테스트 7: "E" =', solution("E"));
// 예상: 782
// A로 시작하는 모든 경우의 수 + E

// ============================================
// 실행 방법
// ============================================
// ts-node solution.ts
