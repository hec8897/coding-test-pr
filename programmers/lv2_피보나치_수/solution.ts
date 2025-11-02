function solution(n: number): number {
  // 여기에 코드를 작성하세요
  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

// 테스트
console.log(solution(3)); // 2
console.log(solution(5)); // 5
console.log(solution(10)); // 55

export default solution;
