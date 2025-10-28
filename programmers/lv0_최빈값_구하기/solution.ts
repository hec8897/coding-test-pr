/**
 * 프로그래머스 Lv.0 - 최빈값 구하기
 *
 * 문제: 가장 자주 나오는 값(최빈값)을 반환
 * 최빈값이 여러 개면 -1 반환
 */

function solution(array: number[]): number {
  const count: Record<number, number> = {};

  for (let num of array) {
    if (count[num]) {
      count[num] = count[num] + 1;
    } else {
      count[num] = 1;
    }
  }

  const maxCount = Math.max(...Object.values(count));

  const result = Object.keys(count).filter(
    (key) => count[Number(key)] === maxCount
  );
  return result.length === 1 ? Number(result[0]) : -1;
}

// 테스트 케이스
console.log("=== 기본 테스트 ===");
console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([1])); // 1

console.log("\n=== 추가 테스트 ===");
console.log(solution([1, 2, 3])); // -1 (모두 1번씩)
console.log(solution([1, 1, 1, 2, 2, 3])); // 1
console.log(solution([5, 5, 5, 5])); // 5
