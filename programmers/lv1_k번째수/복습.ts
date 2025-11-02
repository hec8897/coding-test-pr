/**
 * [Lv.1] K번째수 - 복습
 *
 * 📌 문제 요약:
 * - 배열에서 i~j번째 자르고 정렬 후 k번째 수 구하기
 * - commands: [[i, j, k], ...]
 *
 * 💡 핵심:
 * - slice(i-1, j): i번째부터 j번째까지 자르기
 * - sort((a, b) => a - b): 오름차순 정렬
 * - [k-1]: k번째 수 (0부터 시작)
 *
 * 예시:
 * array = [1, 5, 2, 6, 3, 7, 4]
 * command = [2, 5, 3]
 *
 * 1. slice(1, 5) → [5, 2, 6, 3]
 * 2. sort() → [2, 3, 5, 6]
 * 3. [2] → 5 (3번째 = 인덱스 2)
 *
 * ⚠️ 주의:
 * - i, j, k는 1부터 시작 (위치)
 * - 배열 인덱스는 0부터 시작
 * - slice(i-1, j), [k-1]
 */

function solution(array: number[], commands: number[][]): number[] {
  const answer: number[] = [];
  for (const [i, j, k] of commands) {
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }
  return answer;
}

// 테스트 케이스
console.log("=== K번째수 복습 ===\n");

console.log("테스트:");
console.log("array: [1, 5, 2, 6, 3, 7, 4]");
console.log("commands: [[2, 5, 3], [4, 4, 1], [1, 7, 3]]");
console.log("예상: [5, 6, 3]");
console.log(
  "결과:",
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
console.log();

console.log("상세 과정:");
console.log("1. [2,5,3]: slice(1,5) → [5,2,6,3] → sort → [2,3,5,6] → [2] = 5");
console.log("2. [4,4,1]: slice(3,4) → [6] → sort → [6] → [0] = 6");
console.log(
  "3. [1,7,3]: slice(0,7) → [1,5,2,6,3,7,4] → sort → [1,2,3,4,5,6,7] → [2] = 3"
);

export default solution;
