/**
 * 짝지어 제거하기
 *
 * @param s - 알파벳 소문자 문자열
 * @returns 모두 제거 가능하면 1, 아니면 0
 *
 * 풀이 시간: ___분
 *
 * 접근 방법:
 * 1. 스택(배열) 사용
 * 2. 문자를 하나씩 확인
 * 3. 스택 맨 위와 같으면 pop, 다르면 push
 * 4. 최종적으로 스택이 비어있으면 1
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(n)
 */

function solution(s: string): number {
  const stack: string[] = [];
  for (const char of s) {
    if (stack.length === 0) {
      stack.push(char);
    } else {
      if (stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

// ============================================
// 테스트 케이스
// ============================================

console.log("=== 짝지어 제거하기 테스트 ===\n");

// 테스트 1: 모두 제거 가능
console.log("테스트 1:", solution("baabaa"));
// 예상: 1
// b-aa-baa → b-bb-aa → aa → (empty)

// 테스트 2: 제거 불가
console.log("테스트 2:", solution("cdcd"));
// 예상: 0
// cd cd → 제거할 짝이 없음

// 테스트 3: 간단한 짝
console.log("테스트 3:", solution("aa"));
// 예상: 1

// 테스트 4: 문자 1개
console.log("테스트 4:", solution("a"));
// 예상: 0

// 테스트 5: 복잡한 케이스
console.log("테스트 5:", solution("abba"));
// 예상: 1
// ab-bb-a → aa → (empty)

// 테스트 6: 긴 문자열
console.log("테스트 6:", solution("aabbccdd"));
// 예상: 1
// aa-bbccdd → bb-ccdd → cc-dd → dd → (empty)

// ============================================
// 실행 방법
// ============================================
// ts-node solution.ts
