/**
 * HackerRank Easy - Target Index Search (Binary Search)
 *
 * 문제: 정렬된 배열에서 타겟 값의 인덱스를 찾기
 * 찾으면 인덱스 반환, 못 찾으면 -1 반환
 *
 * 핵심: 이진 탐색(Binary Search) 사용!
 */

// findIndex 를 활용
// function targetIndexSearch(nums: number[], target: number): number {
//   return nums.findIndex((num) => num === target);
// }

function targetIndexSearch(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid; // 인덱스 반환!

    if (nums[mid] < target) {
      low = mid + 1; // 다음 탐색 시작 인덱스
    } else {
      high = mid - 1; // 다음 탐색 끝 인덱스
    }
  }

  return -1;
}

// 테스트 케이스
console.log("=== 기본 테스트 ===");
console.log(targetIndexSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(targetIndexSearch([2, 4, 6, 8, 10, 12, 14, 16], 16)); // 7

console.log("\n=== 찾을 수 없는 경우 ===");
console.log(targetIndexSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(targetIndexSearch([1, 2, 3, 4, 5], 0)); // -1

console.log("\n=== 엣지 케이스 ===");
console.log(targetIndexSearch([1], 1)); // 0
console.log(targetIndexSearch([1], 2)); // -1
console.log(targetIndexSearch([1, 2], 1)); // 0
console.log(targetIndexSearch([1, 2], 2)); // 1
