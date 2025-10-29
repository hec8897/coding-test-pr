# 올바른 괄호

## 📌 문제 설명

괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.

예를 들어

- "()()" 또는 "(())()" 는 올바른 괄호입니다.
- ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

## 제한사항

- 문자열 s의 길이 : 100,000 이하의 자연수
- 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

## 입출력 예

| s        | answer |
| -------- | ------ |
| "()()"   | true   |
| "(())()" | true   |
| ")()("   | false  |
| "(()("   | false  |

## 입출력 예 설명

**입출력 예 #1,2,3,4**

- 문제의 예시와 같습니다.

## 💡 풀이 방법

### 1. 스택을 사용한 방법

```typescript
function solution(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    if (char === "(") {
      stack.push(char); // 여는 괄호는 스택에 추가
    } else {
      // ')'
      if (stack.length === 0) {
        return false; // 닫는 괄호인데 스택이 비어있음
      }
      stack.pop(); // 여는 괄호와 짝 맞춤
    }
  }

  return stack.length === 0; // 스택이 비어있어야 올바른 괄호
}
```

### 2. 카운터를 사용한 방법 (최적화)

```typescript
function solution(s: string): boolean {
  let count = 0;

  for (const char of s) {
    if (char === "(") {
      count++;
    } else {
      count--;
      if (count < 0) {
        return false; // 닫는 괄호가 더 많음
      }
    }
  }

  return count === 0;
}
```

## 🔍 주요 개념 설명

### 1. 스택(Stack)의 활용

**스택이 이 문제에 적합한 이유:**

- 가장 최근에 열린 괄호부터 닫혀야 함 (LIFO)
- `(` 를 만나면 push
- `)` 를 만나면 pop

### 2. 올바른 괄호의 조건

1. **여는 괄호와 닫는 괄호의 개수가 같아야 함**
2. **어느 시점에서든 닫는 괄호가 여는 괄호보다 많으면 안됨**

### 3. 단계별 실행 예시

**예제 1: "(())"**

```
i=0: '(' → stack = ['('], count = 1
i=1: '(' → stack = ['(', '('], count = 2
i=2: ')' → stack = ['('], count = 1
i=3: ')' → stack = [], count = 0
결과: true ✅
```

**예제 2: ")()("**

```
i=0: ')' → stack = [] (비어있음!)
→ 닫는 괄호인데 짝 맞출게 없음
→ 즉시 false 반환 ❌
```

**예제 3: "(()("**

```
i=0: '(' → stack = ['('], count = 1
i=1: '(' → stack = ['(', '('], count = 2
i=2: ')' → stack = ['('], count = 1
i=3: '(' → stack = ['(', '('], count = 2
결과: stack이 비어있지 않음 → false ❌
```

## ⚠️ 주의사항

1. **닫는 괄호가 먼저 나오는 경우**

   ```typescript
   if (char === ")" && stack.length === 0) {
     return false; // 즉시 반환!
   }
   ```

2. **마지막 확인**

   ```typescript
   return stack.length === 0; // 스택이 비어있어야 함
   // 또는
   return count === 0; // 카운트가 0이어야 함
   ```

3. **효율성**
   - 스택 방법: 공간복잡도 O(n)
   - 카운터 방법: 공간복잡도 O(1) ← 더 효율적!

## 💡 배운 점

1. **스택의 전형적인 활용 사례**

   - 괄호 검증
   - 짝 맞추기
   - 최근 요소 관리

2. **조기 반환(Early Return)**

   - 불가능한 경우를 빨리 발견하면 즉시 반환
   - 불필요한 연산 줄이기

3. **최적화 사고**
   - 스택 없이 카운터만으로도 해결 가능
   - 같은 문제, 다른 접근법

## 🚀 다른 활용 예시

### 여러 종류의 괄호

```typescript
function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
```

## ⭐️ 시간복잡도

- 시간복잡도: O(n) - 문자열을 한 번 순회
- 공간복잡도:
  - 스택 사용: O(n)
  - 카운터 사용: O(1)

## 🎯 실전 팁

- 괄호 문제는 거의 항상 스택!
- 하지만 이 문제는 카운터만으로도 가능
- 면접에서는 두 가지 방법을 모두 설명할 수 있으면 좋음
- 조기 반환으로 효율성 향상
