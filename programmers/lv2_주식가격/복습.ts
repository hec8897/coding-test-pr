/**
 * [Lv.2] 주식가격 - 복습 템플릿
 *
 * 📌 문제 요약
 * - 주어진 시점부터 주식 가격이 떨어지기 전까지의 시간을 초 단위로 구한다.
 * - 가격이 떨어지지 않으면 끝까지 유지된 초 수를 기록한다.
 *
 * 🧠 핵심 아이디어
 * 1. 이중 반복문으로 각 시점 이후 가격 비교 (O(n^2))
 * 2. 스택/큐를 활용해 감소 시점을 미리 처리 (O(n))
 * 3. 감소하는 첫 순간을 찾으면 루프를 종료한다.
 *
 * 🎯 이번 복습 목표
 * - 스택을 활용해 O(n) 풀이를 직접 구현해 본다.
 * - while 루프 조건과 스택 pop 시점에 집중한다.
 * - edge case (마지막 원소, 모든 원소가 비내림차순) 점검.
 */

function solution(prices: number[]): number[] {
  // TODO: 1) answer 배열과 stack(인덱스 저장)을 선언하세요.
  // TODO: 2) prices를 순회하며 현재 가격이 떨어졌는지 확인하세요.
  // TODO: 3) 떨어진 시점에 대한 시간을 계산해 answer에 반영하세요.
  // TODO: 4) 남아있는 인덱스(끝까지 안 떨어진 가격)의 시간을 채워주세요.
  const answer: number[] = [];

  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(count);
  }

  return answer;
}

// 🧪 테스트 케이스 (정답: [4, 3, 1, 1, 0], [1, 1, 0])
const testCases: Array<{ prices: number[]; expected: number[] }> = [
  { prices: [1, 2, 3, 2, 3], expected: [4, 3, 1, 1, 0] },
  { prices: [5, 4, 3], expected: [1, 1, 0] },
];

console.log("=== 주식가격 복습 ===");
testCases.forEach(({ prices, expected }, index) => {
  const result = solution(prices);
  console.log(`케이스 ${index + 1}:`, result, "기대값:", expected);
});

export default solution;
