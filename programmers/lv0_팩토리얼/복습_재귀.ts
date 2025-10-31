/**
 * [Lv.0] 팩토리얼 - 재귀로 풀기
 *
 * 🎯 문제: n! = n × (n-1) × (n-2) × ... × 1
 *
 * 📌 재귀 패턴: 단순 재귀 (선형)
 * - 한 번만 자기 자신을 호출
 * - 점점 작아지면서 종료 조건에 도달
 *
 * 💡 핵심:
 * 1. 종료 조건: n이 1(또는 0)일 때
 * 2. 재귀 호출: n * factorial(n - 1)
 *
 * ⏰ 시간 복잡도: O(n)
 * 💾 공간 복잡도: O(n) - Call Stack
 */

function solution(n: number): number {
  if (n === 0 || n === 1) return 1;
  return n * solution(n - 1);
}

// 테스트 케이스
console.log("=== 팩토리얼 (재귀) 테스트 ===\n");

console.log("테스트 1:");
console.log("n: 0");
console.log("예상 결과: 1 (0! = 1)");
console.log("실제 결과:", solution(0));
console.log();

console.log("테스트 2:");
console.log("n: 1");
console.log("예상 결과: 1 (1! = 1)");
console.log("실제 결과:", solution(1));
console.log();

console.log("테스트 3:");
console.log("n: 3");
console.log("예상 결과: 6 (3! = 3 × 2 × 1 = 6)");
console.log("실제 결과:", solution(3));
console.log();

console.log("테스트 4:");
console.log("n: 5");
console.log("예상 결과: 120 (5! = 5 × 4 × 3 × 2 × 1 = 120)");
console.log("실제 결과:", solution(5));
console.log();

console.log("테스트 5:");
console.log("n: 10");
console.log("예상 결과: 3628800");
console.log("실제 결과:", solution(10));

/**
 * 💡 재귀 실행 과정 이해하기
 *
 * solution(5) 호출:
 *
 * solution(5)
 *   → 5 * solution(4)
 *          → 4 * solution(3)
 *                 → 3 * solution(2)
 *                        → 2 * solution(1)
 *                               → 1 (종료!)
 *                        ← 2 * 1 = 2
 *                 ← 3 * 2 = 6
 *          ← 4 * 6 = 24
 *   ← 5 * 24 = 120
 *
 *
 * Call Stack 시각화:
 *
 * 1. solution(5) 시작
 *    └─ "5 * solution(4) 계산 필요"
 *
 * 2. solution(4) 시작
 *    └─ "4 * solution(3) 계산 필요"
 *
 * 3. solution(3) 시작
 *    └─ "3 * solution(2) 계산 필요"
 *
 * 4. solution(2) 시작
 *    └─ "2 * solution(1) 계산 필요"
 *
 * 5. solution(1) 시작
 *    └─ "종료 조건! 1 반환" ✅
 *
 * 6. solution(2)로 돌아감
 *    └─ "2 * 1 = 2 반환"
 *
 * 7. solution(3)로 돌아감
 *    └─ "3 * 2 = 6 반환"
 *
 * 8. solution(4)로 돌아감
 *    └─ "4 * 6 = 24 반환"
 *
 * 9. solution(5)로 돌아감
 *    └─ "5 * 24 = 120 반환"
 *
 *
 * 🔑 핵심 포인트:
 *
 * 1. 종료 조건 (Base Case)
 *    - n이 0 또는 1일 때 → 1 반환
 *    - 이게 없으면 무한 반복! 💥
 *
 * 2. 재귀 호출 (Recursive Case)
 *    - n * solution(n - 1)
 *    - 점점 작아져서 종료 조건에 도달
 *
 * 3. Call Stack
 *    - 함수 호출이 쌓였다가 풀림
 *    - LIFO (Last In First Out)
 */
