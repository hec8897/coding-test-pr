function solution(n: number): number[][] {
  function hanoi(n: number, from: number, to: number, via: number): number[][] {
    if (n === 1) return [[from, to]];

    const result: number[][] = [];

    result.push(...hanoi(n - 1, from, via, to));
    result.push([from, to]);
    result.push(...hanoi(n - 1, via, to, from));

    return result;
  }

  return hanoi(n, 1, 3, 2);
}

// 테스트
console.log(solution(2)); // [[1,2], [1,3], [2,3]]
console.log(solution(3)); // [[1,3], [1,2], [3,2], [1,3], [2,1], [2,3], [1,3]]
