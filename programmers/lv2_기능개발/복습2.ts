/**
 * [Lv.2] 기능개발 - 복습 미션 2
 *
 * 📌 요구 사항 정리
 * - 각 기능의 진척도(progresses)와 개발 속도(speeds)가 주어진다.
 * - 앞 기능이 배포되지 않으면 뒤 기능도 함께 대기해야 한다.
 * - 배포는 하루에 한 번, 앞에서부터 순서대로 이뤄진다.
 * - 각 배포 시점마다 함께 나가는 기능 수를 구해라.
 *
 * 🧩 이번 복습 목표
 * 1. 남은 작업 일수를 계산하는 보조 로직을 직접 작성한다.
 * 2. 큐(또는 배열)로 배포 묶음을 누적하는 과정을 구현한다.
 * 3. 시간 복잡도를 O(n)으로 유지하는지 확인한다.
 *
 * ✍️ 작성 가이드
 * - progresses/speeds 길이는 같으며 1 이상 100 이하.
 * - 남은 날 계산 시 올림(Math.ceil) 처리를 잊지 말 것.
 * - 현재 배포 기준일보다 작은(또는 같은) 작업은 묶어서 함께 배포.
 */

function solution(progresses: number[], speeds: number[]): number[] {
  /**
   * 남은 개발일 계산
   */
  const days = progresses.map((progress, index) => {
    return Math.ceil((100 - progress) / speeds[index]);
  });

  const answer: number[] = [];
  let currentDay = days[0];
  let count = 1;

  days.slice(1).forEach((day) => {
    if (currentDay >= day) {
      count += 1;
    } else {
      answer.push(count);
      currentDay = day;
      count = 1;
    }
  });

  answer.push(count);

  return answer;
}

// 🧪 테스트 케이스 (정답: [2, 1], [1, 3, 2])
const testCases: Array<{
  progresses: number[];
  speeds: number[];
  expected: number[];
}> = [
  { progresses: [93, 30, 55], speeds: [1, 30, 5], expected: [2, 1] },
  {
    progresses: [95, 90, 99, 99, 80, 99],
    speeds: [1, 1, 1, 1, 1, 1],
    expected: [1, 3, 2],
  },
];

// console.log("=== 기능개발 복습 2 ===");
testCases.forEach(({ progresses, speeds, expected }, index) => {
  const result = solution(progresses, speeds);
  console.log(`케이스 ${index + 1}:`, result, "기대값:", expected);
});

export default solution;
