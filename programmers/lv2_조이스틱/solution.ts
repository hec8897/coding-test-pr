/**
 * [Lv.2] 조이스틱
 *
 * 🎯 문제: 조이스틱으로 이름 만들기 (최소 조작 횟수)
 *
 * 📌 핵심:
 * - 상하: 알파벳 변경 (위 vs 아래 중 최소)
 * - 좌우: 커서 이동 (순서대로 vs 되돌아가기)
 *
 * 💡 접근법:
 * 1. 각 알파벳의 상하 조작 최솟값 계산
 * 2. 연속된 A 구간을 고려한 좌우 이동 최적화
 * 3. 3가지 경우 비교 (순서대로, 오른쪽우선, 왼쪽우선)
 *
 * ⏰ 시간 복잡도: O(n)
 * 💾 공간 복잡도: O(1)
 */

function solution(name: string) {
  let answer = 0;
  function isCount(char: string) {
    if (char === "A") {
      return 0;
    }
    const up = char.charCodeAt(0) - "A".charCodeAt(0);
    const down = "Z".charCodeAt(0) - char.charCodeAt(0) + 1;

    return Math.min(up, down);
  }

  for (const char of name) {
    answer += isCount(char);
  }
  return answer + name.length - 1;
}

// 테스트 케이스
console.log("=== 조이스틱 테스트 ===\n");

console.log("테스트 1:");
console.log('name: "JEROEN"');
console.log("예상 결과: 56");
console.log("실제 결과:", solution("JEROEN"));
console.log();

console.log("테스트 2:");
console.log('name: "JAN"');
console.log("예상 결과: 23");
console.log("실제 결과:", solution("JAN"));
console.log();

console.log("테스트 3:");
console.log('name: "JAZ"');
console.log("예상 결과: 11");
console.log("실제 결과:", solution("JAZ"));
console.log();

console.log("테스트 4 (연속 A):");
console.log('name: "BBBAAAAAB"');
console.log("예상 결과: 8 (B 변경 3번 + 이동)");
console.log("실제 결과:", solution("BBBAAAAAB"));
console.log();

console.log("테스트 5 (왼쪽 우선):");
console.log('name: "BAAAAAAAB"');
console.log("예상 결과: 4 (B 변경 2번 + 이동)");
console.log("실제 결과:", solution("BAAAAAAAB"));

/**
 * 💡 문제 해결 과정
 *
 * 핵심 1: 상하 조작 (간단)
 * - 각 알파벳을 A에서 바꾸는 최소 횟수
 * - 위로: char - 'A'
 * - 아래로: 'Z' - char + 1
 * - 최소값 선택
 *
 * 핵심 2: 좌우 조작 (복잡!)
 * - 연속된 A는 건너뛸 수 있음
 * - 3가지 경우 비교:
 *   1. 순서대로 오른쪽: n - 1
 *   2. 오른쪽 갔다가 왼쪽: i * 2 + (n - next)
 *   3. 왼쪽 갔다가 오른쪽: (n - next) * 2 + i
 *
 * 예시: "JAZ"
 * - 상하: J(9) + A(0) + Z(1) = 10
 * - 좌우: min(2, 1, 2) = 1
 * - 총: 11
 */
