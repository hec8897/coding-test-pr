function solution(nums: number[]): number {
  const uniq = new Set(nums);

  return Math.min(uniq.size, nums.length / 2);
}

// 테스트
console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
