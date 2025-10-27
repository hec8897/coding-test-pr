/**
 * HackerRank - Validate Properly Nested Brackets
 * Difficulty: Easy
 *
 * 문제: 문자열에서 괄호가 올바르게 중첩되었는지 확인하세요.
 * 괄호 종류: (), [], {}
 * 괄호 외의 문자는 무시합니다.
 *
 * Return: 1 (valid) or 0 (invalid)
 */

function areBracketsProperlyMatched(code_snippet: string): number {
  const stack: string[] = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of code_snippet) {
    // 여는 괄호면 스택에 넣기
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    // 닫는 괄호면 스택에서 꺼내서 짝 확인
    else if (char === ")" || char === "]" || char === "}") {
      // 스택이 비었으면 닫을 괄호가 없음
      if (stack.length === 0) {
        return 0;
      }

      // 스택에서 꺼내기
      const top = stack.pop();

      // 짝이 맞는지 확인
      if (top !== pairs[char]) {
        return 0;
      }
    }
    // 다른 문자는 무시
  }

  // 스택이 비어있으면 1, 아니면 0
  return stack.length === 0 ? 1 : 0;
}

// 테스트 케이스
console.log("=== 올바른 괄호 ===");
console.log(areBracketsProperlyMatched("()")); // 1
console.log(areBracketsProperlyMatched("()[]{}")); // 1
console.log(areBracketsProperlyMatched("{[]}")); // 1
console.log(areBracketsProperlyMatched("([{}])")); // 1
console.log(areBracketsProperlyMatched("if (a[0] > b[1]) { doSomething(); }")); // 1 (실제 코드)

console.log("\n=== 잘못된 괄호 ===");
console.log(areBracketsProperlyMatched("(]")); // 0 (짝이 안 맞음)
console.log(areBracketsProperlyMatched("([)]")); // 0 (순서가 잘못됨)
console.log(areBracketsProperlyMatched("(((")); // 0 (닫는 괄호 없음)
console.log(areBracketsProperlyMatched(")")); // 0 (여는 괄호 없음)
console.log(areBracketsProperlyMatched("if (a[0 > b[1]) { doSomething(); }")); // 0 (괄호 누락)

console.log("\n=== 엣지 케이스 ===");
console.log(areBracketsProperlyMatched("")); // 1 (빈 문자열)
console.log(areBracketsProperlyMatched("()()")); // 1
console.log(areBracketsProperlyMatched("({[]})")); // 1
console.log(areBracketsProperlyMatched("{[}]")); // 0
console.log(areBracketsProperlyMatched("hello world")); // 1 (괄호 없음)
console.log(areBracketsProperlyMatched("int x = 42; // no brackets here")); // 1 (괄호 없음)
