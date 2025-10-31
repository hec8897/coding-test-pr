/**
 * [Lv.1] 체육복 - 복습
 *
 * 🎯 문제: 체육복을 최대한 많은 학생들이 수업을 듣게 하기
 *
 * 📌 핵심:
 * - 여벌 체육복이 있는 학생은 앞뒤 학생에게 빌려줄 수 있음
 * - 최대한 많은 학생이 수업을 듣게 하기
 *
 * 💡 그리디 전략:
 * - 앞번호부터 순서대로 처리
 * - 빌려줄 수 있으면 바로 빌려주기
 *
 * ⏰ 시간 복잡도: O(n)
 * 💾 공간 복잡도: O(n)
 */

function solution(n: number, lost: number[], reserve: number[]): number {
  const students = Array(n).fill(1);
  // 모두가 체육복이 있음 (초기화)
  lost.forEach((l) => students[l - 1]--);
  reserve.forEach((r) => students[r - 1]++);

  for (let i = 0; i < n; i++) {
    if (students[i] === 0) {
      if (i > 0 && students[i - 1] === 2) {
        students[i]++;
        students[i - 1]--;
      } else if (i < n - 1 && students[i + 1] === 2) {
        students[i]++;
        students[i + 1]--;
      }
    }
  }

  return students.filter((s) => s > 0).length;
}

// 테스트 케이스
console.log("=== 체육복 테스트 ===\n");

console.log("테스트 1:");
console.log("n: 5, lost: [2, 4], reserve: [1, 3, 5]");
console.log("예상 결과: 5 (모든 학생이 수업 가능)");
console.log("실제 결과:", solution(5, [2, 4], [1, 3, 5]));
console.log();

console.log("테스트 2:");
console.log("n: 5, lost: [2, 4], reserve: [3]");
console.log("예상 결과: 4 (2번만 빌려받고 4번은 못 받음)");
console.log("실제 결과:", solution(5, [2, 4], [3]));
console.log();

console.log("테스트 3:");
console.log("n: 3, lost: [3], reserve: [1]");
console.log("예상 결과: 2 (1번이 3번에게 못 빌려줌)");
console.log("실제 결과:", solution(3, [3], [1]));
console.log();

console.log("테스트 4 (여벌 있는데 도난당함):");
console.log("n: 5, lost: [2, 3], reserve: [2, 4]");
console.log("예상 결과: 5 (2번은 여벌이 있어서 자기가 입음)");
console.log("실제 결과:", solution(5, [2, 3], [2, 4]));

/**
 * 💡 문제 이해하기
 *
 * 학생 번호: 1, 2, 3, 4, 5
 * 초기 상태: [1, 1, 1, 1, 1] (모두 체육복 1개)
 *
 * lost = [2, 4] → 2번, 4번 도난
 * 상태: [1, 0, 1, 0, 1]
 *
 * reserve = [1, 3, 5] → 1번, 3번, 5번 여벌
 * 상태: [2, 0, 2, 0, 2]
 *
 * 빌려주기:
 * - 2번(0개): 1번(2개)에게 빌림 → [1, 1, 2, 0, 2]
 * - 4번(0개): 3번(2개)에게 빌림 → [1, 1, 1, 1, 2]
 *
 * 결과: 5명 모두 체육복 있음!
 *
 * ---
 *
 * 💡 그리디 포인트
 *
 * "앞번호부터 순서대로 빌려주기!"
 *
 * 왜?
 * - 어차피 앞뒤 학생에게만 빌려줄 수 있음
 * - 앞부터 처리하면 뒤에서 선택지가 줄어듦
 * - 최적 선택!
 */
