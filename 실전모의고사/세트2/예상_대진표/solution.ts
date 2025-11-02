function solution(n: number, a: number, b: number): number {
  // 여기에 코드를 작성하세요

  let round = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }

  return round;
}

// 테스트
console.log(solution(8, 4, 7)); // 3
console.log(solution(16, 1, 10)); // 4
console.log(solution(32, 1, 32)); // 5

export default solution;
