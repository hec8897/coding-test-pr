/**
 * 프로그래머스 Lv.0 - 다음에 올 숫자 (복습용)
 *
 * 문제: 등차수열 혹은 등비수열 common이 주어질 때,
 * 마지막 원소 다음으로 올 숫자를 return하세요.
 *
 * 힌트:
 * 1. 등차수열인지 등비수열인지 판별
 *    - 등차수열: 차이가 일정 (common[1] - common[0] === common[2] - common[1])
 *    - 등비수열: 비율이 일정
 * 2. 등차수열이면: 마지막 원소 + 공차
 * 3. 등비수열이면: 마지막 원소 × 공비
 */

function solution(common: number[]): number {
  // 여기에 코드를 작성하세요!
  return 0;
}

// 테스트 케이스
console.log(solution([1, 2, 3, 4])); // 5 (등차수열, 공차=1)
console.log(solution([2, 4, 8])); // 16 (등비수열, 공비=2)
console.log(solution([3, 6, 9, 12])); // 15 (등차수열, 공차=3)
console.log(solution([5, 10, 15, 20, 25])); // 30 (등차수열, 공차=5)
console.log(solution([1, 2, 4, 8])); // 16 (등비수열, 공비=2)
