// function solution(s: string): number {
//   // 여기에 코드를 작성하세요
//   function isValid(str: string): boolean {
//     const stack: string[] = [];
//     const pairs: { [key: string]: string } = {
//       ")": "(",
//       "]": "[",
//       "}": "{",
//     };

//     for (const char of str) {
//       if (char === "(" || char === "[" || char === "{") {
//         stack.push(char);
//       } else {
//         if (stack.length === 0) return false;
//         if (stack[stack.length - 1] !== pairs[char]) return false;
//         stack.pop();
//       }
//     }
//     return stack.length === 0;
//   }

//   let count = 0;

//   for (let i = 0; i < s.length; i++) {
//     const rotated = s.slice(i) + s.slice(0, i);
//     if (isValid(rotated)) {
//       count++;
//     }
//   }

//   return count;
// }

function solution(s: string): number {
  // 여기에 코드를 작성하세요
  let count = 0;

  function isValid(str: string) {
    const pairs: { [key: string]: string } = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    const stack = [];

    for (const s of str) {
      if (s === "{" || s === "[" || s === "(") {
        stack.push(s);
      } else {
        if (stack.length === 0) return false;
        if (stack[stack.length - 1] !== pairs[s]) return false; // 다를떄 삭제
        stack.pop();
      }
    }

    return stack.length === 0;
  }

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) {
      count++;
    }
  }

  return count;
}

// 테스트
console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0

export default solution;
