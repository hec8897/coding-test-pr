/**
 * [Lv.1] 같은 숫자는 싫어 - 복습
 *
 * 📌 문제 요약:
 * - 연속적으로 나타나는 숫자는 하나만 남기기
 * - [1,1,3,3,0,1,1] → [1,3,0,1]
 *
 * 💡 핵심:
 * - 스택의 마지막 원소와 현재 숫자 비교
 * - 다르면 push
 *
 * 예시:
 * [1, 1, 3, 3, 0, 1, 1]
 *
 * stack: []
 * 1 → [1]  (비어있으니 추가)
 * 1 → [1]  (마지막과 같음, 추가 안 함)
 * 3 → [1, 3]  (다름, 추가)
 * 3 → [1, 3]  (같음, 추가 안 함)
 * 0 → [1, 3, 0]  (다름, 추가)
 * 1 → [1, 3, 0, 1]  (다름, 추가)
 * 1 → [1, 3, 0, 1]  (같음, 추가 안 함)
 */

function solution(arr: number[]): number[] {
  const stack: number[] = [];
  for (const num of arr) {
    if (stack.length === 0 || num !== stack[stack.length - 1]) {
      stack.push(num);
    }
  }

  return stack;
}

// 테스트 케이스
console.log("=== 같은 숫자는 싫어 복습 ===\n");

console.log("테스트 1:");
console.log("입력: [1, 1, 3, 3, 0, 1, 1]");
console.log("예상: [1, 3, 0, 1]");
console.log("결과:", solution([1, 1, 3, 3, 0, 1, 1]));
console.log();

console.log("테스트 2:");
console.log("입력: [4, 4, 4, 3, 3]");
console.log("예상: [4, 3]");
console.log("결과:", solution([4, 4, 4, 3, 3]));

export default solution;
