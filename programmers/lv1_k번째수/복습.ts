function solution(array: number[], commands: number[][]): number[] {
  // 여기에 코드를 작성해주세요!
  // 힌트: slice()와 sort()를 활용해보세요
  // commands의 각 요소 [i, j, k]에 대해
  // array의 i번째부터 j번째까지 자르고 정렬한 후 k번째 수를 구합니다

  const answer: number[] = [];

  for (let [i, j, k] of commands) {
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }

  return answer;
}

// 테스트
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
