function solution(arr: number[]): number[] {
  // 여기에 코드를 작성해주세요!
  // 힌트: 스택을 사용하거나 filter를 사용할 수 있습니다
  const answer: number[] = [];
  for (const num of arr) {
    if (answer.length === 0 || answer[answer.length - 1] !== num) {
      answer.push(num);
    }
  }

  return answer;
}

// 테스트
console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]
console.log(solution([4, 4, 4, 3, 3])); // [4, 3]
