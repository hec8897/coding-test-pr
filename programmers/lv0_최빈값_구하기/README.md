# 최빈값 구하기

## 문제 정보

- **플랫폼**: 프로그래머스
- **레벨/난이도**: Lv.0
- **풀이 날짜**: 2025-10-28
- **재풀이**: ❌ (복습 예정)

## 문제 설명

최빈값은 주어진 값 중에서 **가장 자주 나오는 값**을 의미합니다.

정수 배열 `array`가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.

**최빈값이 여러 개면 -1을 return 합니다.**

### 제한사항

- 0 < array의 길이 < 100
- 0 ≤ array의 원소 < 1000

### 입출력 예

| array              | result |
| ------------------ | ------ |
| [1, 2, 3, 3, 3, 4] | 3      |
| [1, 1, 2, 2]       | -1     |
| [1]                | 1      |

### 입출력 예 설명

**입출력 예 #1**

- [1, 2, 3, 3, 3, 4]에서
  - 1은 1개
  - 2는 1개
  - 3은 3개 ← 최빈값!
  - 4는 1개
- 최빈값은 3입니다.

**입출력 예 #2**

- [1, 1, 2, 2]에서
  - 1은 2개
  - 2는 2개
- 최빈값이 1, 2로 **여러 개**이므로 -1을 return 합니다.

**입출력 예 #3**

- [1]에는 1만 있으므로 최빈값은 1입니다.

## 접근 방법

### 1단계: 빈도수 세기

각 숫자가 몇 번 나오는지 세기

### 2단계: 최대 빈도수 찾기

가장 많이 나온 횟수 찾기

### 3단계: 최빈값 확인

- 최대 빈도수를 가진 숫자가 1개면 → 그 숫자 반환
- 최대 빈도수를 가진 숫자가 여러 개면 → -1 반환

## 시간복잡도

- **시간**: O(n) - 배열 순회
- **공간**: O(n) - 빈도수 저장

## 풀이 코드

```typescript
function solution(array: number[]): number {
  // 1단계: 빈도수 세기
  const count: Record<number, number> = {};
  
  for (let num of array) {
    if (count[num]) {
      count[num] = count[num] + 1;
    } else {
      count[num] = 1;
    }
  }
  
  // 더 간결한 방법:
  // count[num] = (count[num] || 0) + 1;
  
  // 2단계: 최대 빈도수 찾기
  const maxCount = Math.max(...Object.values(count));
  
  // 3단계: 최빈값 찾기
  const result = Object.keys(count).filter(
    (key) => count[Number(key)] === maxCount
  );
  
  return result.length === 1 ? Number(result[0]) : -1;
}
```

## 핵심 개념 정리

### 1. TypeScript 객체 타입 선언

```typescript
const count: Record<number, number> = {};
// 또는
const count: { [key: number]: number } = {};
```

**의미:**
- key: number 타입
- value: number 타입

---

### 2. 빈도수 카운팅 패턴

#### 방법 1: if-else 사용
```typescript
if (count[num]) {
  count[num] = count[num] + 1;  // 이미 있으면 +1
} else {
  count[num] = 1;  // 처음 나오면 1
}
```

#### 방법 2: OR 연산자 (추천!)
```typescript
count[num] = (count[num] || 0) + 1;
```

**동작 원리:**
- `count[num]`이 있으면 → 그 값 + 1
- `count[num]`이 없으면 → 0 + 1 = 1

---

### 3. Object 메서드들

#### `Object.keys()` - 키 배열로 변환
```typescript
count = { 1: 1, 2: 1, 3: 3, 4: 1 }
Object.keys(count)
// → ['1', '2', '3', '4']  (배열!)
```

#### `Object.values()` - 값 배열로 변환
```typescript
Object.values(count)
// → [1, 1, 3, 1]  (배열!)
```

#### `Object.entries()` - 키-값 쌍 배열로 변환
```typescript
Object.entries(count)
// → [['1', 1], ['2', 1], ['3', 3], ['4', 1]]
```

**중요:** 객체는 `.filter()` 같은 배열 메서드를 못 써요!
→ Object 메서드로 배열로 변환 후 사용!

---

### 4. Math.max() 사용

```typescript
Math.max(1, 2, 3, 4, 5)  // → 5

// 배열의 최댓값
const arr = [1, 2, 3, 4, 5];
Math.max(...arr)  // → 5 (스프레드 연산자!)
```

---

### 5. 다른 풀이 방법

#### Object.entries() 사용 (더 깔끔!)
```typescript
function solution(array: number[]): number {
  const count: Record<number, number> = {};
  
  for (let num of array) {
    count[num] = (count[num] || 0) + 1;
  }
  
  const maxCount = Math.max(...Object.values(count));
  
  const result = Object.entries(count)
    .filter(([key, value]) => value === maxCount)
    .map(([key]) => Number(key));
  
  return result.length === 1 ? result[0] : -1;
}
```

**장점:** 키와 값을 동시에 접근, 더 읽기 쉬움!

---

## 배운 점 / 느낀 점

### 1. TypeScript 타입 에러 해결
- 객체 사용 시 타입 선언 필수!
- `Record<K, V>` 또는 `{ [key: K]: V }` 사용

### 2. 빈도수 카운팅은 자주 나오는 패턴
- `count[num] = (count[num] || 0) + 1` 암기!
- Object나 Map으로 빈도수 관리

### 3. Object vs 배열
- 객체는 배열 메서드 사용 불가
- `Object.keys()`, `Object.values()`, `Object.entries()`로 배열 변환

### 4. 단계별로 풀면 쉽다!
1. 빈도수 세기
2. 최댓값 찾기
3. 최빈값 찾기

---

## 관련 개념

- **최빈값 (Mode)**: 통계에서 가장 자주 나타나는 값
- **빈도수 카운팅**: Map 또는 Object 사용
- **해시맵 (HashMap)**: key-value 쌍으로 빈도수 저장
- **Record 타입**: TypeScript 유틸리티 타입
- **스프레드 연산자 (...)**: 배열/객체 펼치기
