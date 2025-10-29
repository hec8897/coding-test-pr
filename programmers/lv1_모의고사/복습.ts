function solution(answers: number[]): number[] {
  const answer: number[] = [];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let std1 = 0;
  let std2 = 0;
  let std3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (patterns[0][i % 5] === answers[i]) {
      std1++;
    }
    if (patterns[1][i % 8] === answers[i]) {
      std2++;
    }

    if (patterns[2][i % 10] === answers[i]) {
      std3++;
    }
  }

  const max = Math.max(std1, std2, std3);

  if (max === std1) answer.push(1);
  if (max === std2) answer.push(2);
  if (max === std3) answer.push(3);

  return answer;
}

// 테스트
console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
