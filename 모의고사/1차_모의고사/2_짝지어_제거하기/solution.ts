function solution(s: string): number {
  // 여기에 코드를 작성하세요!
  const stack: string[] = [];

  for (const char of s) {
    if (stack.length === 0 || stack[stack.length - 1] !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.length > 0 ? 0 : 1;
}

// 테스트
console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0

export default solution;

// 알파벳 소문자로 이루어진 문자열
// 2개씩 붙어있는 짝
// 붙어있는 짝 제거
// 모두 제거하면 1
