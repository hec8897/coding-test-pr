/**
 * 전화번호 목록
 *
 * @param phone_book - 전화번호 배열
 * @returns 접두어가 있으면 false, 없으면 true
 *
 * 풀이 시간: ___분
 *
 * 접근 방법:
 * 1. Set에 모든 전화번호 저장
 * 2. 각 전화번호마다 부분 문자열 확인
 * 3. 부분 문자열이 Set에 있으면 false
 *
 * 시간 복잡도: O(n × m) - n: 전화번호 개수, m: 전화번호 평균 길이
 * 공간 복잡도: O(n)
 */

function solution(phone_book: string[]): boolean {
  const set = new Set(phone_book);

  for (let phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      const prefix = phone.substring(0, i); // "1"   ✅ 의미 있는 첫 문자!
      if (set.has(prefix)) {
        return false;
      }
    }
  }
  return true;
}

// ============================================
// 테스트 케이스
// ============================================

console.log("=== 전화번호 목록 테스트 ===\n");

// 테스트 1: 접두어 있음
console.log("테스트 1:", solution(["119", "97674223", "1195524421"]));
// 예상: false ("119"가 "1195524421"의 접두어)

// 테스트 2: 접두어 없음
console.log("테스트 2:", solution(["123", "456", "789"]));
// 예상: true

// 테스트 3: 짧은 접두어
console.log("테스트 3:", solution(["12", "123", "1235", "567", "88"]));
// 예상: false ("12"가 "123"의 접두어)

// 테스트 4: 엣지 케이스 - 번호 1개
console.log("테스트 4:", solution(["1"]));
// 예상: true

// 테스트 5: 완전히 다른 번호들
console.log("테스트 5:", solution(["123", "456", "789", "012"]));
// 예상: true

// ============================================
// 실행 방법
// ============================================
// ts-node solution.ts
