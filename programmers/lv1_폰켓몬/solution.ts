function solution(nums: number[]): number {
  // Set을 사용하여 중복을 제거
  const uniqueMonsters = new Set(nums);

  // 선택할 수 있는 폰켓몬의 수 (N/2)와
  // 폰켓몬 종류의 수(uniqueMonsters.size) 중 더 작은 값을 반환
  return Math.min(nums.length / 2, uniqueMonsters.size);
}

// 테스트
const nums1 = [3, 1, 2, 3];
const nums2 = [3, 3, 3, 2, 2, 4];
const nums3 = [3, 3, 3, 2, 2, 2];

console.log("Test Case 1:", solution(nums1)); // 기대값: 2
console.log("Test Case 2:", solution(nums2)); // 기대값: 3
console.log("Test Case 3:", solution(nums3)); // 기대값: 2
