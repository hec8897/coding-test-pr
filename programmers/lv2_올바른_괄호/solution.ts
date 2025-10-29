function solution(s: string): boolean {
  // 여기에 코드를 작성해주세요!

  const stack = [];

  for (const char of s) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

// 테스트
console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
