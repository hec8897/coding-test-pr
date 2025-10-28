function solution(answers: number[]): number[] {
  const patterns = [
    [1, 2, 3, 4, 5], // 수포자1: 5개
    [2, 1, 2, 3, 2, 4, 2, 5], // 수포자2: 8개
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 수포자3: 10개
  ];
  // 여기에 코드를 작성해주세요!
  let std1 = 0;
  let std2 = 0;
  let std3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (patterns[0][i % 5] === answers[i]) std1 += 1;
    if (patterns[1][i % 8] === answers[i]) std2 += 1;
    if (patterns[2][i % 10] === answers[i]) std3 += 1;
  }

  const max = Math.max(std1, std2, std3);
  const result = [];
  if (std1 === max) result.push(1);
  if (std2 === max) result.push(2);
  if (std3 === max) result.push(3);

  return result;
}

// 테스트
console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
