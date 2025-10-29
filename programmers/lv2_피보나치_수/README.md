# 피보나치 수

## 📌 문제 설명

피보나치 수는 F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2)가 적용되는 수입니다.

예를 들어

- F(2) = F(1) + F(0) = 1 + 0 = 1
- F(3) = F(2) + F(1) = 1 + 1 = 2
- F(4) = F(3) + F(2) = 2 + 1 = 3
- F(5) = F(4) + F(3) = 3 + 2 = 5

와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

## 제한사항

- n은 2 이상 100,000 이하인 자연수입니다.

## 입출력 예

| n   | return |
| --- | ------ |
| 3   | 2      |
| 5   | 5      |
| 10  | 55     |

## 💡 풀이 방법

### 1. 기본 재귀 (비효율적)

```typescript
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

**문제점**: 중복 계산이 많음 (시간복잡도 O(2^n))

### 2. 메모이제이션 (효율적)

```typescript
function solution(n: number): number {
  const memo = new Array(n + 1).fill(0);

  function fibonacci(n: number): number {
    if (n <= 1) return n;
    if (memo[n] !== 0) return memo[n];

    memo[n] = (fibonacci(n - 1) + fibonacci(n - 2)) % 1234567;
    return memo[n];
  }

  return fibonacci(n);
}
```

### 3. 반복문 (가장 효율적)

```typescript
function solution(n: number): number {
  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = (a + b) % 1234567;
    a = b;
    b = temp;
  }

  return b;
}
```

## 🔍 핵심 개념

### 1. 재귀의 기본 구조

```typescript
function recursive(n: number): number {
  // 1. 종료 조건 (Base Case)
  if (n <= 1) return n;

  // 2. 재귀 호출 (Recursive Case)
  return recursive(n - 1) + recursive(n - 2);
}
```

### 2. 메모이제이션

- **중복 계산 방지**: 이미 계산한 값을 저장
- **시간복잡도**: O(n)
- **공간복잡도**: O(n)

### 3. 모듈러 연산

- **큰 수 처리**: 1234567로 나눈 나머지
- **오버플로우 방지**: 중간 계산에서도 나머지 연산

## 🧪 단계별 실행 과정

**n = 5일 때:**

### 재귀 방식

```
fibonacci(5)
├── fibonacci(4)
│   ├── fibonacci(3)
│   │   ├── fibonacci(2) → 1
│   │   └── fibonacci(1) → 1
│   └── fibonacci(2) → 1
└── fibonacci(3)
    ├── fibonacci(2) → 1
    └── fibonacci(1) → 1

결과: 5
```

### 메모이제이션 방식

```
memo[0] = 0
memo[1] = 1
memo[2] = memo[1] + memo[0] = 1
memo[3] = memo[2] + memo[1] = 2
memo[4] = memo[3] + memo[2] = 3
memo[5] = memo[4] + memo[3] = 5
```

## ⚠️ 주의사항

### 1. 시간복잡도

- **기본 재귀**: O(2^n) - 매우 느림
- **메모이제이션**: O(n) - 효율적
- **반복문**: O(n) - 가장 효율적

### 2. 스택 오버플로우

- **큰 n값**: 재귀 깊이가 깊어질 수 있음
- **반복문 권장**: n이 클 때는 반복문 사용

### 3. 모듈러 연산

- **중간 계산**: 매번 1234567로 나눈 나머지
- **오버플로우 방지**: JavaScript의 정수 한계 고려

## 💡 배운 점

1. **재귀의 기본**: 종료 조건 + 재귀 호출
2. **메모이제이션**: 중복 계산 방지 기법
3. **최적화**: 반복문이 재귀보다 효율적일 수 있음
4. **모듈러 연산**: 큰 수 처리 방법

## 🎯 실전 팁

- **작은 n**: 재귀 사용 가능
- **큰 n**: 반복문 또는 메모이제이션
- **메모리 제한**: 반복문이 가장 안전
- **가독성**: 재귀가 더 직관적

## ⭐️ 시간복잡도

- **기본 재귀**: O(2^n)
- **메모이제이션**: O(n)
- **반복문**: O(n)

## 🚀 다른 접근법

### 동적 계획법 (DP)

```typescript
function solution(n: number): number {
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}
```

### 공간 최적화

```typescript
function solution(n: number): number {
  if (n <= 1) return n;

  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = (prev + curr) % 1234567;
    prev = curr;
    curr = next;
  }

  return curr;
}
```
