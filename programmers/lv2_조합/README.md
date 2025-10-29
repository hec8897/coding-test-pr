# 조합 (Combination)

## 📌 문제 설명

n개의 서로 다른 원소에서 r개를 선택하는 조합을 구하는 문제입니다.

조합은 순서를 고려하지 않고 선택하는 방법입니다.

예를 들어, [1, 2, 3, 4]에서 2개를 선택하는 조합은:

- [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]

n과 r이 주어졌을 때, 1부터 n까지의 숫자 중에서 r개를 선택하는 모든 조합을 반환하는 함수를 작성하세요.

## 입출력 예

| n   | r   | return                                                                                     |
| --- | --- | ------------------------------------------------------------------------------------------ |
| 4   | 2   | [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]                                                 |
| 3   | 1   | [[1], [2], [3]]                                                                            |
| 5   | 3   | [[1,2,3], [1,2,4], [1,2,5], [1,3,4], [1,3,5], [1,4,5], [2,3,4], [2,3,5], [2,4,5], [3,4,5]] |

## 💡 풀이 방법

### 핵심 아이디어

**백트래킹(Backtracking)을 사용한 재귀!**

각 숫자를 선택하거나 선택하지 않는 두 가지 경우로 나누어 재귀적으로 처리합니다.

### 재귀 함수 구조

```typescript
function combination(n: number, r: number): number[][] {
  const result: number[][] = [];
  const current: number[] = [];

  function backtrack(start: number) {
    // 1. 종료 조건
    if (current.length === r) {
      result.push([...current]); // 복사본 저장
      return;
    }

    // 2. 재귀 호출
    for (let i = start; i <= n; i++) {
      current.push(i); // 선택
      backtrack(i + 1); // 재귀 호출
      current.pop(); // 백트래킹 (선택 취소)
    }
  }

  backtrack(1);
  return result;
}
```

## 🔍 단계별 실행 과정

### n=4, r=2일 때

```
backtrack(1)
├── current=[1]
│   └── backtrack(2)
│       ├── current=[1,2] → result에 추가 ✅
│       ├── current=[1,3] → result에 추가 ✅
│       └── current=[1,4] → result에 추가 ✅
├── current=[2]
│   └── backtrack(3)
│       ├── current=[2,3] → result에 추가 ✅
│       └── current=[2,4] → result에 추가 ✅
└── current=[3]
    └── backtrack(4)
        └── current=[3,4] → result에 추가 ✅

결과: [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
```

## 💻 완전한 코드

```typescript
function solution(n: number, r: number): number[][] {
  const result: number[][] = [];
  const current: number[] = [];

  function backtrack(start: number) {
    // 종료 조건: r개를 모두 선택했을 때
    if (current.length === r) {
      result.push([...current]); // 복사본 저장
      return;
    }

    // start부터 n까지 반복
    for (let i = start; i <= n; i++) {
      current.push(i); // 현재 숫자 선택
      backtrack(i + 1); // 다음 숫자부터 재귀 호출
      current.pop(); // 백트래킹: 선택 취소
    }
  }

  backtrack(1); // 1부터 시작
  return result;
}
```

## 🧠 핵심 개념

### 1. 백트래킹 (Backtracking)

- **선택 → 재귀 → 취소**의 패턴
- **모든 가능한 경우를 탐색**
- **조건을 만족하지 않으면 되돌아가기**

### 2. 재귀의 구조

```typescript
function backtrack(start) {
    // 1. 종료 조건
    if (조건 만족) {
        결과 저장;
        return;
    }

    // 2. 재귀 호출
    for (각 선택지) {
        선택;
        backtrack(다음_단계);
        취소;  // 백트래킹
    }
}
```

### 3. 배열 복사

```typescript
result.push([...current]); // 복사본 저장
// result.push(current);     // ❌ 참조 저장 (위험!)
```

## 🎯 백트래킹의 핵심

### 1. 선택 (Choose)

```typescript
current.push(i); // 현재 숫자를 선택
```

### 2. 탐색 (Explore)

```typescript
backtrack(i + 1); // 다음 단계로 재귀 호출
```

### 3. 취소 (Unchoose)

```typescript
current.pop(); // 선택을 취소하고 되돌아가기
```

## 🧪 다른 예시들

### n=3, r=1일 때

```
backtrack(1)
├── current=[1] → result에 추가 ✅
├── current=[2] → result에 추가 ✅
└── current=[3] → result에 추가 ✅

결과: [[1], [2], [3]]
```

### n=3, r=2일 때

```
backtrack(1)
├── current=[1]
│   └── backtrack(2)
│       ├── current=[1,2] → result에 추가 ✅
│       └── current=[1,3] → result에 추가 ✅
└── current=[2]
    └── backtrack(3)
        └── current=[2,3] → result에 추가 ✅

결과: [[1,2], [1,3], [2,3]]
```

## ⚠️ 주의사항

### 1. 배열 복사

```typescript
// ❌ 잘못된 방법
result.push(current); // 참조 저장

// ✅ 올바른 방법
result.push([...current]); // 복사본 저장
```

### 2. 백트래킹 필수

```typescript
// ❌ 백트래킹 없이
current.push(i);
backtrack(i + 1);
// current.pop() 없음 → 잘못된 결과

// ✅ 백트래킹 포함
current.push(i);
backtrack(i + 1);
current.pop(); // 필수!
```

### 3. 시작 인덱스

```typescript
// ❌ 잘못된 방법
for (let i = 1; i <= n; i++) {
  // 중복 조합 생성 가능
}

// ✅ 올바른 방법
for (let i = start; i <= n; i++) {
  // 중복 방지
}
```

## 💡 배운 점

1. **백트래킹**: 선택 → 탐색 → 취소 패턴
2. **재귀와 반복문**: for문과 재귀의 조합
3. **상태 관리**: current 배열로 현재 상태 추적
4. **조합 생성**: 모든 가능한 조합을 체계적으로 생성

## 🎯 실전 팁

- **백트래킹은 완전탐색의 핵심**
- **상태를 명확히 관리**
- **복사본 저장 주의**
- **종료 조건을 정확히 설정**

## ⭐️ 시간복잡도

- **시간복잡도**: O(C(n,r) × r)
- **공간복잡도**: O(r) - 재귀 스택
- **결과 크기**: C(n,r) = n! / (r! × (n-r)!)

## 🚀 다른 접근법

### 반복문 (복잡함)

```typescript
// r이 고정된 경우에만 가능
// 일반적인 경우에는 재귀가 더 간단
```

### 라이브러리 사용

```typescript
// JavaScript에는 조합 라이브러리가 없음
// 직접 구현해야 함
```

## 🎯 요약

**조합은 백트래킹의 완벽한 예시입니다!**

1. **백트래킹**: 선택 → 탐색 → 취소
2. **재귀 구조**: 종료 조건 + 재귀 호출
3. **상태 관리**: current 배열로 추적
4. **완전탐색**: 모든 가능한 조합 생성

**재귀와 백트래킹을 동시에 학습할 수 있는 최고의 문제입니다!** 😊
