function solution(s: string): boolean {
  const answer = [];
  for (const char of s) {
    if (char === "(") {
      answer.push(char);
    } else {
      if (answer.length === 0) {
        return false;
      }

      answer.pop();
    }
  }

  return answer.length === 0;
}

// 테스트
console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
