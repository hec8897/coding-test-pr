/**
 * 프로그래머스 Lv.0 - 전국 대회 선발 고사 (복습용)
 *
 * 문제: 참석 가능한 학생 중 등수가 높은 3명을 선발
 * 선발된 학생 번호를 a, b, c라고 할 때
 * 10000 × a + 100 × b + c를 return
 *
 * 힌트:
 * 1. 참석 가능한 학생들만 필터링
 * 2. 등수 기준으로 정렬 (오름차순 = 1등, 2등, 3등...)
 * 3. 상위 3명의 학생 번호 추출
 * 4. 공식에 대입
 */

function solution(rank: number[], attendance: boolean[]): number {
  // 여기에 코드를 작성하세요!
}

// 테스트 케이스
console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
); // 20403
console.log(solution([1, 2, 3], [true, true, true])); // 102
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
); // 50200
