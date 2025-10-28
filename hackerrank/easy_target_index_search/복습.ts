/**
 * HackerRank Easy - Target Index Search (복습용)
 *
 * 문제: 정렬된 배열에서 타겟 값의 인덱스를 찾기
 *
 * 이진 탐색 알고리즘:
 * 1. low, high 설정
 * 2. mid = (low + high) // 2
 * 3. nums[mid]와 target 비교
 * 4. 범위를 절반으로 줄여나감
 */

function targetIndexSearch(nums: number[], target: number): number {
  // 여기에 코드를 작성하세요!
  return -1;
}

// 테스트 케이스
console.log("=== 기본 테스트 ===");
console.log(targetIndexSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(targetIndexSearch([2, 4, 6, 8, 10, 12, 14, 16], 16)); // 7

console.log("\n=== 찾을 수 없는 경우 ===");
console.log(targetIndexSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(targetIndexSearch([1, 2, 3, 4, 5], 0)); // -1
