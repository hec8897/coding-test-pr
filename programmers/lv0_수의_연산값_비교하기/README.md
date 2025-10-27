# 수의 연산값 비교하기

## 문제 정보

- **플랫폼**: 프로그래머스
- **레벨/난이도**: Lv.0
- **풀이 날짜**: 2025-10-27
- **재풀이**: ❌ (복습 예정)

## 문제 설명

정수 `a`, `b`가 주어집니다. 다음 두 값 중 더 큰 값을 return하세요.

- `a`와 `b`를 **붙여서** 만든 수
- `2 × a × b`

### 예시

```
a = 2, b = 91

1. a와 b 붙이기: "2" + "91" = "291" → 291
2. 2 × a × b: 2 × 2 × 91 = 364

더 큰 값: 364
```

### 제한사항

- 1 ≤ a, b < 10,000

## 접근 방법

1. **두 값을 계산**

   - `a ⊕ b`: 문자열로 변환 후 붙이기 → 숫자로 변환
   - `2 × a × b`: 곱셈 연산

2. **비교 후 반환**
   - `concatenated >= multiplied` (같을 때 concatenated 우선)

## 시간복잡도

- **시간**: O(1) - 연산 횟수 고정
- **공간**: O(1) - 변수 2개만 사용

## 풀이 코드

```typescript
function solution(a: number, b: number): number {
  const concatenated = Number(String(a) + String(b)); // a ⊕ b (붙인 값)
  const multiplied = 2 * a * b; // 2 × a × b (곱한 값)

  if (concatenated >= multiplied) {
    return concatenated;
  }
  return multiplied;
}
```

### 다른 풀이

**삼항 연산자:**

```typescript
function solution(a: number, b: number): number {
  const concatenated = Number(String(a) + String(b));
  const multiplied = 2 * a * b;

  return concatenated >= multiplied ? concatenated : multiplied;
}
```

**템플릿 리터럴:**

```typescript
function solution(a: number, b: number): number {
  const concatenated = Number(`${a}${b}`);
  const multiplied = 2 * a * b;

  return concatenated >= multiplied ? concatenated : multiplied;
}
```

**Math.max():**

```typescript
function solution(a: number, b: number): number {
  const concatenated = Number(`${a}${b}`);
  const multiplied = 2 * a * b;

  return Math.max(concatenated, multiplied);
}
```

## 배운 점 / 느낀 점

### 1. **명확한 변수명의 중요성** ⭐⭐

```typescript
// ❌ 나쁜 예
const cal = Number(`${a}${b}`);
const _cal = 2 * a * b;

// ✅ 좋은 예
const concatenated = Number(`${a}${b}`); // 의도가 명확!
const multiplied = 2 * a * b; // 무엇을 하는지 알 수 있음!
```

**좋은 변수명:**

- `concatenated`, `joined`, `combined` (붙인 값)
- `multiplied`, `product`, `doubled` (곱한 값)

**나쁜 변수명:**

- `cal`, `_cal`, `temp`, `a1`, `a2`, `x`, `y`

---

### 2. **연산자 우선순위 주의!**

```typescript
// ❌ 잘못된 계산 (처음 실수)
a + b * 2; // a + (b × 2) - 덧셈과 곱셈 혼용!

// ✅ 올바른 계산
2 * a * b; // 모두 곱셈!
```

---

### 3. **문자열 변환 방법**

```typescript
// 방법 1: 템플릿 리터럴 (추천) ⭐
Number(`${a}${b}`);

// 방법 2: String() 생성자
Number(String(a) + String(b));

// 방법 3: toString() 메서드
Number(a.toString() + b.toString());
```

## 관련 개념

- **문자열 연결 (String Concatenation)**
- **타입 변환 (Type Conversion)**: `Number()`, 템플릿 리터럴
- **삼항 연산자 (Ternary Operator)**
- **변수명 작성 (Naming Convention)** ⭐⭐
- **연산자 우선순위 (Operator Precedence)**
