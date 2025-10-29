function solution(n: number): number {
  // 반복문으로 팩토리얼 구현
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 테스트
console.log(solution(3)); // 6
console.log(solution(4)); // 24
console.log(solution(5)); // 120
console.log(solution(0)); // 1
