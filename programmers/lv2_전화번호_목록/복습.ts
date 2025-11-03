/**
 * [Lv.2] 전화번호 목록 - 복습
 *
 * 📌 문제 요약:
 * - 전화번호 목록에서 한 번호가 다른 번호의 접두어인지 확인
 * - 접두어가 있으면 false, 없으면 true
 *
 * 💡 핵심 개념: Hash (Set)
 * 1. 모든 전화번호를 Set에 저장 (O(1) 검색)
 * 2. 각 전화번호의 부분 문자열(접두어)이 Set에 있는지 확인
 *
 * ⚠️ 주의사항:
 * - 자기 자신은 제외하고 확인해야 함
 * - 부분 문자열은 1글자부터 (전체 길이-1)까지
 *
 * 🎯 목표 시간: 15분
 */

/**
 * 문제 이해:
 * 
 * 예시 1: ["119", "97674223", "1195524421"]
 * - "119"는 "1195524421"의 접두어 → false
 * 
 * 예시 2: ["123", "456", "789"]
 * - 어떤 번호도 다른 번호의 접두어가 아님 → true
 * 
 * 예시 3: ["12", "123", "1235", "567", "88"]
 * - "12"는 "123"의 접두어 → false
 * - "123"은 "1235"의 접두어 → false
 */

function solution(phone_book: string[]): boolean {
  // 여기에 코드를 작성하세요!
  
  
  
  return true;
}

// 테스트 케이스
console.log("=== 전화번호 목록 복습 ===\n");

console.log("테스트 1:");
console.log('phone_book: ["119", "97674223", "1195524421"]');
console.log("예상 결과: false");
console.log("실제 결과:", solution(["119", "97674223", "1195524421"]));
console.log('설명: "119"가 "1195524421"의 접두어');
console.log();

console.log("테스트 2:");
console.log('phone_book: ["123", "456", "789"]');
console.log("예상 결과: true");
console.log("실제 결과:", solution(["123", "456", "789"]));
console.log("설명: 접두어 없음");
console.log();

console.log("테스트 3:");
console.log('phone_book: ["12", "123", "1235", "567", "88"]');
console.log("예상 결과: false");
console.log("실제 결과:", solution(["12", "123", "1235", "567", "88"]));
console.log('설명: "12"가 "123"의 접두어');
console.log();

/**
 * 💡 풀이 전략
 *
 * 방법 1: Set 활용 (추천!) ⭐
 * 
 * 1단계: Set 생성
 *    const set = new Set(phone_book);
 *    // Set은 O(1)로 검색 가능!
 * 
 * 2단계: 각 전화번호의 접두어 확인
 *    for (let phone of phone_book) {
 *      for (let i = 1; i < phone.length; i++) {
 *        const prefix = phone.substring(0, i);
 *        if (set.has(prefix)) {
 *          return false;  // 접두어 발견!
 *        }
 *      }
 *    }
 * 
 * 3단계: 모두 통과
 *    return true;
 *
 *
 * 📊 동작 과정 예시:
 *
 * phone_book = ["119", "97674223", "1195524421"]
 * set = {"119", "97674223", "1195524421"}
 *
 * "119" 확인:
 *   i=1: "1" → set에 없음 ✅
 *   i=2: "11" → set에 없음 ✅
 *
 * "97674223" 확인:
 *   i=1: "9" → set에 없음 ✅
 *   i=2: "97" → set에 없음 ✅
 *   ...
 *
 * "1195524421" 확인:
 *   i=1: "1" → set에 없음 ✅
 *   i=2: "11" → set에 없음 ✅
 *   i=3: "119" → set에 있음! ❌ → return false
 *
 *
 * 🔑 핵심 메서드:
 *
 * 1. Set 생성 및 사용
 *    const set = new Set(array);
 *    set.has(value);  // O(1) 검색
 *
 * 2. 부분 문자열
 *    string.substring(start, end);
 *    // "1195524421".substring(0, 3) = "119"
 *
 *
 * ⚠️ 주의사항:
 *
 * 1. 루프 범위
 *    for (let i = 1; i < phone.length; i++)
 *    // i=1부터 시작 (빈 문자열 제외)
 *    // i < phone.length (자기 자신 제외)
 *
 * 2. substring vs slice
 *    둘 다 사용 가능!
 *    phone.substring(0, i)
 *    phone.slice(0, i)
 *
 *
 * 💡 또 다른 방법: 정렬 활용
 *
 * phone_book.sort();  // 사전순 정렬
 * // ["119", "1195524421", "97674223"]
 * 
 * // 정렬하면 접두어 관계는 인접한 것끼리만 나타남!
 * for (let i = 0; i < phone_book.length - 1; i++) {
 *   if (phone_book[i + 1].startsWith(phone_book[i])) {
 *     return false;
 *   }
 * }
 * return true;
 *
 *
 * 📝 startsWith 메서드:
 *
 * "1195524421".startsWith("119")  // true
 * "97674223".startsWith("119")    // false
 *
 *
 * 🎯 시간 복잡도:
 *
 * Set 방법:
 *   - O(n × m) 
 *   - n: 전화번호 개수
 *   - m: 평균 전화번호 길이
 *
 * 정렬 방법:
 *   - O(n log n)
 *   - 정렬이 지배적
 *
 *
 * ⚠️ 자주 하는 실수:
 *
 * 1. 자기 자신을 접두어로 인정
 *    ❌ for (let i = 0; i <= phone.length; i++)
 *    ✅ for (let i = 1; i < phone.length; i++)
 *
 * 2. 이중 for문으로 모든 쌍 비교
 *    → 비효율적! Set 사용하면 O(n×m)으로 해결
 *
 * 3. 빈 문자열 체크
 *    i=0부터 시작하면 빈 문자열("")이 접두어가 됨
 */

export default solution;

