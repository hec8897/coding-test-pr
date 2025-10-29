// 가장 큰 수 복습
// 0 또는 양의 정수를 이어 붙여 만들 수 있는 가장 큰 수

function solution(numbers: number[]): string {
  return Number(
    numbers
      .map((ele) => ele.toString())
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
      .join("")
  );
}

// 테스트
console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
console.log(solution([0, 0, 0])); // "0"
