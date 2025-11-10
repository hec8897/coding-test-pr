/**
 * [Lv.2] 조이스틱 - 복습 템플릿
 *
 * 📌 문제 설명
 * - 조이스틱으로 문자열의 각 위치를 A에서 목표 문자로 바꾼다.
 * - 상하 조작: 알파벳 변경 (위/아래로 이동 시 최소 거리)
 * - 좌우 조작: 커서를 이동하여 다음 문자로 이동
 *
 * 💡 핵심 포인트
 * 1. 각 위치에서 위/아래 조작 횟수 = min(char - 'A', 'Z' - char + 1)
 * 2. 좌우 이동 최적화: 연속된 'A' 구간을 어떻게 건너뛸지 계산
 * 3. 다양한 패턴(앞→뒤, 뒤→앞, 중간 되돌아가기)을 모든 경우 탐색
 *
 * 🎯 복습 미션
 * - 상하 조작 합을 먼저 계산한 뒤, 좌우 이동 최소값을 찾는 로직을 완성한다.
 * - 연속된 'A' 구간을 고려해 최소 이동을 업데이트한다.
 * - "JEROEN" → 56, "JAN" → 23 가 나오는지 확인한다.
 */

function solution(name: string): number {
  // TODO: 1) 상하 조작 횟수를 먼저 누적하세요.
  // TODO: 2) 좌우 이동 최솟값을 name.length - 1 로 초기화하세요.
  // TODO: 3) 반복문으로 연속된 'A' 구간을 찾고 최소 이동을 갱신하세요.
  // TODO: 4) 상하 조작 + 좌우 조작을 합쳐서 반환하세요.
  let answer = 0;
  function isCount(char: string) {
    if (char === "A") {
      return 0;
    }
    const up = char.charCodeAt(0) - "A".charCodeAt(0);
    const down = "Z".charCodeAt(0) - char.charCodeAt(0) + 1;

    return Math.min(up, down);
  }

  for (let char of name) {
    answer += isCount(char);
  }

  return answer + name.length - 1;
}

// 🧪 테스트 케이스
const testCases: Array<{ name: string; expected: number }> = [
  { name: "JEROEN", expected: 56 },
  { name: "JAN", expected: 23 },
  { name: "AAAAA", expected: 0 },
];

console.log("=== 조이스틱 복습 ===");
testCases.forEach(({ name, expected }, index) => {
  const result = solution(name);
  console.log(`케이스 ${index + 1}:`, result, "기대값:", expected);
});

export default solution;
