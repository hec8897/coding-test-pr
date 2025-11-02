function solution(A: number[], B: number[]): number {
  let answer = 0;

  const a_array = A.sort((a, b) => a - b); // 오름 차순 정렬
  const b_array = B.sort((a, b) => b - a); // 내림 차순 정렬

  for (let i = 0; i < a_array.length; i++) {
    answer += a_array[i] * b_array[i]; // 각 값 더하기
  }

  return answer;
}

// 테스트
console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
console.log(solution([3, 1, 2], [3, 2, 4])); // 16

export default solution;
