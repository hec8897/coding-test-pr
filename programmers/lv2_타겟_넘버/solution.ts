function solution(numbers: number[], target: number): number {
  // 여기에 코드를 작성해주세요!
  let count = 0;
  function dfs(index: number, sum: number) {
    // index 현재 처리할 숫자의 인덱스
    // sum 지금까지 합계

    if (index === numbers.length) {
      if (sum === target) {
        count++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);
  return count;
}

// 테스트
console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
