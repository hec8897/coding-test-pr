/**
 * 프로그래머스 Lv.0 - 전국 대회 선발 고사
 *
 * 문제: 참석 가능한 학생 중 등수가 높은 3명을 선발
 * 선발된 학생 번호를 a, b, c라고 할 때
 * 10000 × a + 100 × b + c를 return
 *
 * 제한사항:
 * - 3 ≤ rank.length = attendance.length ≤ 100
 * - rank의 원소는 1부터 n까지의 서로 다른 정수
 * - attendance 중 적어도 3개는 true
 *
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181851
 */

function solution(rank: number[], attendance: boolean[]): number {
  const [a, b, c] = rank
    .map((ranking, idx) => ({ ranking, idx }))
    .filter((student) => attendance[student.idx])
    .sort((x, y) => x.ranking - y.ranking)
    .map((student) => student.idx);

  return 10000 * a + 100 * b + c;
}

// 테스트 케이스
console.log("=== 기본 테스트 ===");
console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
); // 20403
console.log(solution([1, 2, 3], [true, true, true])); // 102
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
); // 50200
