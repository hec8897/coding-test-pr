function solution(numlist: number[], n: number): number[] {
  // 여기서 구현해보세요!

  return numlist.sort((a, b) => {
    const distA = Math.abs(a - n);
    const distB = Math.abs(b - n);

    if (distA !== distB) {
      return distA - distB;
    }
    return b - a;
  });
}

// 테스트
console.log(solution([1, 2, 3, 4, 5, 6], 4));
// 예상: [4, 5, 3, 6, 2, 1]

console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
// 예상: [36, 40, 20, 47, 10, 6, 7000, 10000]
