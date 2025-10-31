/**
 * [Lv.2] 124 나라의 숫자
 *
 * 핵심 아이디어:
 * - 3진법과 비슷하지만 0이 없음
 * - 1, 2, 4만 사용
 * - 나머지가 0일 때 특별 처리
 *
 * 패턴:
 * 1 → 1, 2 → 2, 3 → 4
 * 4 → 11, 5 → 12, 6 → 14
 * 7 → 21, 8 → 22, 9 → 24
 *
 * 알고리즘:
 * 1. n을 3으로 나눈 나머지 확인
 * 2. 나머지가 1 → '1', 2 → '2', 0 → '4'
 * 3. 나머지가 0이면 n을 3으로 나눈 몫에서 -1
 * 4. n이 0이 될 때까지 반복
 */

function solution(n: number): string {
  let result = "";
  while (n > 0) {
    const remainder = n % 3;
    if (remainder === 0) {
      result = "4" + result;
      n = n / 3 - 1;
    } else {
      result = remainder + result;
      n = Math.floor(n / 3);
    }
  }

  return result;
}

// 테스트 케이스
console.log(solution(1)); // "1"
console.log(solution(2)); // "2"
console.log(solution(3)); // "4"
console.log(solution(4)); // "11"
console.log(solution(5)); // "12"
console.log(solution(6)); // "14"
console.log(solution(7)); // "21"
console.log(solution(8)); // "22"
console.log(solution(9)); // "24"
console.log(solution(10)); // "41"
console.log(solution(11)); // "42"
console.log(solution(12)); // "44"

export default solution;
