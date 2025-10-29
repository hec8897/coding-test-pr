function solution(numbers: number[]): string {
  // 여기에 코드를 작성해주세요!
  const result = numbers
    .map((num) => num.toString())
    .sort((a, b) => {
      const ab = a + b;
      const ba = b + a;
      if (ab > ba) {
        return -1;
      }

      if (ab < ba) {
        return 1;
      }
      return 0;
    })
    .join("");

  return result[0] === "0" ? "0" : result;
}

// 테스트
console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
