function solution(s: string): boolean {
  // 여기에 코드를 작성하세요!
  const stack = [];

  for (let char of s) {
    if (s === "(") {
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

export default solution;
