/**
 * [Lv.2] 타겟 넘버 - 복습 미션 4 (큐 기반 BFS)
 *
 * 📌 문제 핵심
 * - numbers 배열의 각 요소에 + 또는 -를 붙여 target 합을 만드는 경우의 수를 구한다.
 *
 * 🎯 이번 복습 포인트
 * 1. DFS 대신 큐를 활용한 BFS로 분기 탐색을 구현해 본다.
 * 2. 큐에 (다음 인덱스, 현재 합)을 저장하며 진행한다.
 * 3. 모든 숫자를 사용한 시점(index === numbers.length)에서 target 일치 여부를 체크한다.
 *
 * 📝 단계별 가이드
 * - queue: Array<{ index: number; sum: number }>
 * - 초기에는 { index: 0, sum: 0 } 하나만 넣고 시작.
 * - 큐에서 하나씩 꺼내 다음 수를 +, - 한 결과를 다시 큐에 추가.
 * - 마지막까지 탐색 후 성공 개수를 카운트.
 */

type State = { index: number; sum: number };

function solution(numbers: number[], target: number): number {
  // TODO: 1) queue를 초기화하세요.
  // TODO: 2) while 루프로 큐가 빌 때까지 반복하며 상태를 꺼내세요.
  // TODO: 3) 모든 숫자를 사용했다면 target 비교 후 count 증가.
  // TODO: 4) 아직 숫자가 남았다면 +, - 분기를 queue에 추가하세요.

  function dnf(index: number, sum: number): number {
    if (index === numbers.length) {
      return sum === target ? 1 : 0;
    }

    const plusWay = dnf(index + 1, sum + numbers[index]);
    const minusWay = dnf(index + 1, sum - numbers[index]);

    return plusWay + minusWay;
  }

  return dnf(0, 0);
}

// 🧪 테스트 케이스 (정답: 5, 2)
const testCases: Array<{
  numbers: number[];
  target: number;
  expected: number;
}> = [
  { numbers: [1, 1, 1, 1, 1], target: 3, expected: 5 },
  { numbers: [4, 1, 2, 1], target: 4, expected: 2 },
];

console.log("=== 타겟 넘버 복습 4 (BFS) ===");
testCases.forEach(({ numbers, target, expected }, index) => {
  const result = solution(numbers, target);
  console.log(`케이스 ${index + 1}:`, result, "기대값:", expected);
});

export default solution;
