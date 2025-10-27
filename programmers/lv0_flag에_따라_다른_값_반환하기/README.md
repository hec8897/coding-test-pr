# flag에 따라 다른 값 반환하기

## 문제 정보

- **플랫폼**: 프로그래머스
- **레벨/난이도**: Lv.0
- **풀이 날짜**: 2025-10-27
- **재풀이**: ❌ (복습 예정)

## 문제 설명

두 정수 `a`, `b`와 boolean 값 `flag`가 매개변수로 주어집니다.

- `flag`가 `true`이면 `a + b`를 return
- `flag`가 `false`이면 `a - b`를 return

### 예시

```
a = 5, b = 3, flag = true
→ 5 + 3 = 8

a = 5, b = 3, flag = false
→ 5 - 3 = 2
```

### 제한사항

- -1,000 ≤ a, b ≤ 10,000

## 접근 방법

1. **flag 값 확인**

   - `flag === true` → 덧셈
   - `flag === false` → 뺄셈

2. **조건에 따라 연산 수행**
   - `if/else` 또는 삼항 연산자 사용

## 시간복잡도

- **시간**: O(1) - 단순 연산
- **공간**: O(1) - 추가 변수 없음

## 풀이 코드

```typescript
function solution(a: number, b: number, flag: boolean): number {
  if (flag) {
    return a + b;
  } else {
    return a - b;
  }
}
```

### 다른 풀이

**삼항 연산자 (한 줄):**

```typescript
function solution(a: number, b: number, flag: boolean): number {
  return flag ? a + b : a - b;
}
```

**else 생략:**

```typescript
function solution(a: number, b: number, flag: boolean): number {
  if (flag) return a + b;
  return a - b;
}
```

## 배운 점 / 느낀 점

### 1. **간단한 조건 분기**

- 조건이 단순할 때는 `if/else`가 명확함
- 한 줄로 표현 가능할 땐 삼항 연산자도 좋은 선택

### 2. **boolean 변수 활용**

```typescript
// ✅ 간결함
if (flag) { ... }

// ❌ 불필요한 비교
if (flag === true) { ... }
```

### 3. **가독성 vs 간결함**

```typescript
// 명확함 (추천)
if (flag) {
  return a + b;
} else {
  return a - b;
}

// 간결함
return flag ? a + b : a - b;
```

**결론:** 둘 다 좋지만, 팀/프로젝트 컨벤션에 따라 선택!

## 관련 개념

- **조건문 (if/else)**
- **삼항 연산자 (Ternary Operator)**
- **boolean 타입**
- **Early Return 패턴**
