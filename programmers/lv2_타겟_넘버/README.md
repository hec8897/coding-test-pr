# 타겟 넘버

## 📌 문제 설명

n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 더하거나 빼서 타겟 넘버를 만드는 방법의 수를 구하려고 합니다.

예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

```
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
```

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

## 제한사항

- 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
- 각 숫자는 1 이상 50 이하인 자연수입니다.
- 타겟 넘버는 1 이상 1000 이하인 자연수입니다.

## 입출력 예

| numbers     | target | return |
| ----------- | ------ | ------ |
| [1,1,1,1,1] | 3      | 5      |
| [4,1,2,1]   | 4      | 2      |

## 입출력 예 설명

**입출력 예 #1**

- 문제의 예시와 같습니다.

**입출력 예 #2**

- +4+1-2+1 = 4
- +4-1+2-1 = 4
- 총 2가지 방법이 있습니다.

## 💡 풀이 방법

### 1. DFS (깊이 우선 탐색) - 재귀

```typescript
function solution(numbers: number[], target: number): number {
  let count = 0;

  function dfs(index: number, sum: number) {
    // 모든 숫자를 사용했을 때
    if (index === numbers.length) {
      if (sum === target) {
        count++;
      }
      return;
    }

    // 현재 숫자를 더하는 경우
    dfs(index + 1, sum + numbers[index]);

    // 현재 숫자를 빼는 경우
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);
  return count;
}
```

### 2. BFS (너비 우선 탐색) - 큐

```typescript
function solution(numbers: number[], target: number): number {
  const queue: { index: number; sum: number }[] = [{ index: 0, sum: 0 }];
  let count = 0;

  while (queue.length > 0) {
    const { index, sum } = queue.shift()!;

    if (index === numbers.length) {
      if (sum === target) count++;
      continue;
    }

    // 더하기와 빼기 경우를 큐에 추가
    queue.push({ index: index + 1, sum: sum + numbers[index] });
    queue.push({ index: index + 1, sum: sum - numbers[index] });
  }

  return count;
}
```

## 🔍 주요 개념 설명

### 1. DFS (Depth-First Search)

**특징:**

- 깊이 우선 탐색
- 재귀 함수 사용
- 한 경로를 끝까지 탐색 후 다른 경로로 이동

**이 문제에서의 활용:**

- 각 숫자마다 +, - 두 가지 선택지
- 모든 경우의 수를 탐색
- 마지막 숫자까지 처리했을 때 타겟과 비교

### 2. 재귀 함수의 구조

```typescript
function dfs(index: number, sum: number) {
  // 1. 종료 조건 (Base Case)
  if (index === numbers.length) {
    if (sum === target) count++;
    return;
  }

  // 2. 재귀 호출 (Recursive Case)
  dfs(index + 1, sum + numbers[index]); // + 선택
  dfs(index + 1, sum - numbers[index]); // - 선택
}
```

### 3. 예시 실행 과정

**numbers = [1, 1, 1], target = 1**

```
dfs(0, 0)
├── dfs(1, 1)  // +1
│   ├── dfs(2, 2)  // +1+1
│   │   ├── dfs(3, 3)  // +1+1+1 = 3 ≠ 1
│   │   └── dfs(3, 1)  // +1+1-1 = 1 = 1 ✅
│   └── dfs(2, 0)  // +1-1
│       ├── dfs(3, 1)  // +1-1+1 = 1 = 1 ✅
│       └── dfs(3, -1) // +1-1-1 = -1 ≠ 1
└── dfs(1, -1) // -1
    ├── dfs(2, 0)  // -1+1
    │   ├── dfs(3, 1)  // -1+1+1 = 1 = 1 ✅
    │   └── dfs(3, -1) // -1+1-1 = -1 ≠ 1
    └── dfs(2, -2) // -1-1
        ├── dfs(3, -1) // -1-1+1 = -1 ≠ 1
        └── dfs(3, -3) // -1-1-1 = -3 ≠ 1

결과: 3가지 방법
```

## ⚠️ 주의사항

1. **인덱스 범위**

   - `index === numbers.length`일 때 종료
   - 배열 범위를 벗어나지 않도록 주의

2. **재귀 깊이**

   - 최대 20개 숫자이므로 재귀 깊이는 20
   - 스택 오버플로우 걱정 없음

3. **시간복잡도**
   - O(2^n): 각 숫자마다 2가지 선택
   - n=20일 때 2^20 = 1,048,576 (충분히 처리 가능)

## 💡 배운 점

1. **DFS의 활용**

   - 모든 경우의 수 탐색
   - 재귀 함수로 간단하게 구현

2. **재귀 함수 작성법**

   - 종료 조건 명확히 정의
   - 재귀 호출에서 상태 변경

3. **완전탐색의 중요성**
   - 작은 입력 크기에서 모든 경우 확인
   - 정확한 답 보장

## 🚀 다른 접근법

### 동적 계획법 (DP) - 고급

```typescript
function solution(numbers: number[], target: number): number {
  const dp = new Map<string, number>();

  function dfs(index: number, sum: number): number {
    if (index === numbers.length) {
      return sum === target ? 1 : 0;
    }

    const key = `${index}-${sum}`;
    if (dp.has(key)) {
      return dp.get(key)!;
    }

    const result =
      dfs(index + 1, sum + numbers[index]) +
      dfs(index + 1, sum - numbers[index]);
    dp.set(key, result);
    return result;
  }

  return dfs(0, 0);
}
```

## ⭐️ 시간복잡도

- **시간복잡도**: O(2^n)
- **공간복잡도**: O(n) - 재귀 스택 깊이

## 🎯 실전 팁

- DFS는 완전탐색 문제에서 자주 사용
- 재귀 함수는 종료 조건을 명확히!
- 작은 입력 크기일 때만 사용 (n ≤ 20)
- 모든 경우의 수를 확인해야 할 때 유용
