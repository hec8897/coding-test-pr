/**
 * [Lv.2] 큰 수 만들기
 *
 * 🎯 문제: 숫자에서 k개를 제거했을 때 가장 큰 수 만들기
 *
 * 📌 핵심:
 * - 앞자리가 클수록 큰 수
 * - 작은 숫자를 제거하고 큰 숫자 유지
 *
 * 💡 접근법:
 * 1. 스택 사용
 * 2. 현재 숫자보다 작은 숫자를 스택에서 제거
 * 3. 제거 개수가 k에 도달하면 중단
 * 4. 남은 개수는 뒤에서 제거
 *
 * ⏰ 시간 복잡도: O(n)
 * 💾 공간 복잡도: O(n)
 */

function solution(number: string, k: number): string {
  const stack: string[] = [];
  let removeCount = 0;

  for (const num of number) {
    while (
      stack.length > 0 &&
      removeCount < k &&
      stack[stack.length - 1] < num
    ) {
      stack.pop();
      removeCount++;
    }
    stack.push(num);
  }

  while (removeCount < k) {
    stack.pop();
    removeCount++;
  }

  return stack.join("");
}

// 테스트 케이스
console.log("=== 큰 수 만들기 테스트 ===\n");

console.log("테스트 1:");
console.log('number: "1924", k: 2');
console.log("예상 결과: 94");
console.log("실제 결과:", solution("1924", 2));
console.log();

console.log("테스트 2:");
console.log('number: "1231234", k: 3');
console.log("예상 결과: 3234");
console.log("실제 결과:", solution("1231234", 3));
console.log();

console.log("테스트 3:");
console.log('number: "4177252841", k: 4');
console.log("예상 결과: 775841");
console.log("실제 결과:", solution("4177252841", 4));
console.log();

console.log("테스트 4 (내림차순):");
console.log('number: "9876", k: 2');
console.log("예상 결과: 98");
console.log("실제 결과:", solution("9876", 2));
console.log();

console.log("테스트 5 (같은 숫자):");
console.log('number: "1111", k: 2');
console.log("예상 결과: 11");
console.log("실제 결과:", solution("1111", 2));

/**
 * 💡 문제 해결 과정
 *
 * 핵심 아이디어:
 * "1924"에서 2개 제거 → "94"
 *
 * Step 1: 스택으로 숫자 관리
 * - [1]
 * - 9가 들어옴 → 1 < 9 → 1 제거 → [9]
 * - 2가 들어옴 → 9 > 2 → 2 추가 → [9, 2]
 * - 4가 들어옴 → 2 < 4 → 2 제거 → [9, 4]
 *
 * Step 2: 특수 케이스 처리
 * - 내림차순 (9876): 뒤에서 제거
 * - 같은 숫자 (1111): 뒤에서 제거
 *
 * Step 3: 그리디 선택
 * - 현재 숫자보다 작은 것은 제거
 * - 큰 숫자를 앞에 배치
 */
