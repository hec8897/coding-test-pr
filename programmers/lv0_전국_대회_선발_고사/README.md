# 전국 대회 선발 고사

## 문제 정보

- **플랫폼**: 프로그래머스
- **레벨/난이도**: Lv.0
- **풀이 날짜**: 2025-10-27
- **재풀이**: ❌ (복습 예정)

## 문제 설명

0번부터 n - 1번까지 n명의 학생 중 3명을 선발하는 전국 대회 선발 고사를 보았습니다.

등수가 높은 3명을 선발해야 하지만, 개인 사정으로 전국 대회에 참여하지 못하는 학생들이 있어 **참여가 가능한 학생 중 등수가 높은 3명**을 선발하기로 했습니다.

각 학생들의 선발 고사 등수를 담은 정수 배열 `rank`와 전국 대회 참여 가능 여부가 담긴 boolean 배열 `attendance`가 매개변수로 주어집니다.

전국 대회에 선발된 학생 번호들을 등수가 높은 순서대로 각각 `a`, `b`, `c`번이라고 할 때 `10000 × a + 100 × b + c`를 return 하세요.

### 예시

```
rank = [3, 7, 2, 5, 4, 6, 1]
attendance = [false, true, true, true, true, false, false]

학생 번호: 0  1  2  3  4  5  6
등수:      3  7  2  5  4  6  1
참석 가능: X  O  O  O  O  X  X

참석 가능한 학생:
- 1번: 7등
- 2번: 2등 ← 선발 (a = 2)
- 3번: 5등 ← 선발 (b = 3)
- 4번: 4등 ← 선발 (c = 4)

결과: 10000 × 2 + 100 × 3 + 4 = 20304 ... 어? 🤔
```

### 제한사항

- 3 ≤ rank의 길이 = attendance의 길이 ≤ 100
- rank[i]는 i번 학생의 선발 고사 등수를 의미합니다.
- rank의 원소는 1부터 n까지의 정수로 모두 서로 다릅니다.
- attendance[i]가 true라면 참석 가능, false면 참석 불가능을 의미합니다.
- attendance의 원소 중 적어도 3개는 true입니다.

## 접근 방법

1. **학생 번호와 등수를 함께 저장**

   - `map((ranking, idx) => ({ ranking, idx }))`
   - 인덱스가 학생 번호!

2. **참석 가능한 학생만 필터링**

   - `filter(student => attendance[student.idx])`

3. **등수 기준 오름차순 정렬**

   - `sort((a, b) => a.ranking - b.ranking)`
   - 1등, 2등, 3등 순서로!

4. **상위 3명의 학생 번호 추출 & 계산**
   - `map(student => student.idx)`
   - `10000 × a + 100 × b + c`

## 시간복잡도

- **시간**: O(n log n) - 정렬이 지배적
- **공간**: O(n) - 필터링된 배열 저장

## 풀이 코드

### 최종 코드 (구조분해 할당)

```typescript
function solution(rank: number[], attendance: boolean[]): number {
  const [a, b, c] = rank
    .map((ranking, idx) => ({ ranking, idx }))
    .filter((student) => attendance[student.idx])
    .sort((x, y) => x.ranking - y.ranking)
    .map((student) => student.idx);

  return 10000 * a + 100 * b + c;
}
```

### 다른 풀이 1: 배열 사용

```typescript
function solution(rank: number[], attendance: boolean[]): number {
  const [a, b, c] = rank
    .map((ranking, idx) => [ranking, idx])
    .filter(([_, idx]) => attendance[idx])
    .sort(([rankA], [rankB]) => rankA - rankB)
    .map(([_, idx]) => idx);

  return 10000 * a + 100 * b + c;
}
```

### 다른 풀이 2: for 루프 (가장 직관적)

```typescript
function solution(rank: number[], attendance: boolean[]): number {
  const candidates = [];

  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      candidates.push({ ranking: rank[i], idx: i });
    }
  }

  candidates.sort((a, b) => a.ranking - b.ranking);

  const [a, b, c] = candidates.map((s) => s.idx);
  return 10000 * a + 100 * b + c;
}
```

## 배운 점 / 느낀 점

### 1. **인덱스가 중요한 정보일 때** ⭐⭐

문제에서 **인덱스 = 학생 번호**였기 때문에 인덱스를 함께 추적해야 했어요!

```typescript
// ✅ 올바른 접근
.map((value, index) => ({ value, index }))

// ❌ 인덱스를 잃어버림
.map(value => value)
```

---

### 2. **`.sort()` 사용법 완벽 정리** ⭐⭐⭐

#### 숫자 정렬:

```typescript
// 오름차순 (작은 것 → 큰 것)
array.sort((a, b) => a - b);

// 내림차순 (큰 것 → 작은 것)
array.sort((a, b) => b - a);
```

#### 문자열 정렬:

```typescript
// 오름차순 (가나다순, 알파벳순)
array.sort((a, b) => a.localeCompare(b));

// 내림차순
array.sort((a, b) => b.localeCompare(a));
```

#### 객체 정렬:

```typescript
// 특정 속성 기준
array.sort((a, b) => a.속성 - b.속성);
```

**핵심:** 비교 함수는 항상 **두 개의 인자** `(a, b)`를 받고, **음수/0/양수**를 반환!

---

### 3. **구조분해 할당으로 코드 간결화** ⭐

#### Before:

```typescript
const candidates = rank.map(...).filter(...).sort(...).map(...);
return 10000 * candidates[0] + 100 * candidates[1] + candidates[2];
```

#### After:

```typescript
const [a, b, c] = rank.map(...).filter(...).sort(...).map(...);
return 10000 * a + 100 * b + c;
```

**장점:**

- 변수명이 의미 있음 (`a`, `b`, `c`)
- return 문이 훨씬 깔끔!

---

### 4. **메서드 체이닝의 힘**

```typescript
rank
  .map(...)      // 1. 데이터 변환
  .filter(...)   // 2. 필터링
  .sort(...)     // 3. 정렬
  .map(...)      // 4. 최종 추출
```

각 단계가 명확하게 분리되어 읽기 쉬움!

---

### 5. **변수명 충돌 주의!**

```typescript
// ❌ 나쁜 예 (파라미터와 외부 변수 충돌)
rank.map((rank, idx) => ({ rank, idx }));

// ✅ 좋은 예 (명확한 변수명)
rank.map((ranking, idx) => ({ ranking, idx }));
```

## 관련 개념

- **배열 정렬 (Array Sorting)** ⭐⭐⭐
- **인덱스 추적 (Index Tracking)**
- **필터링 (Filter)**
- **메서드 체이닝 (Method Chaining)**
- **구조분해 할당 (Destructuring Assignment)**
- **화살표 함수 (Arrow Function)**
- **객체 속기 표현 (Object Shorthand)**
