/**
 * 예상 대진표
 *
 * @param n - 참가자 수
 * @param a - A 참가자 번호
 * @param b - B 참가자 번호
 * @returns A와 B가 만나는 라운드
 */
function solution(n: number, a: number, b: number): number {
  let roundNumber = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    roundNumber++;
  }

  return roundNumber;
}

// 테스트 케이스
console.log(solution(8, 4, 7)); // 3
console.log(solution(8, 2, 3)); // 1
console.log(solution(16, 1, 16)); // 4
console.log(solution(8, 1, 8)); // 3
