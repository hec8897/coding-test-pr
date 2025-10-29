# 가장 큰 수

## 📌 문제 설명

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

## 제한사항

- numbers의 길이는 1 이상 100,000 이하입니다.
- numbers의 원소는 0 이상 1,000 이하입니다.
- 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

## 입출력 예

| numbers           | return    |
| ----------------- | --------- |
| [6, 10, 2]        | "6210"    |
| [3, 30, 34, 5, 9] | "9534330" |

## 입출력 예 설명

**입출력 예 #1**

- [6, 10, 2]를 이용해 만들 수 있는 가장 큰 수는 6210입니다.

**입출력 예 #2**

- [3, 30, 34, 5, 9]를 이용해 만들 수 있는 가장 큰 수는 9534330입니다.

## 💡 풀이 방법

### 핵심 아이디어

**문자열로 변환해서 정렬!**

숫자를 문자열로 변환한 후, 두 문자열을 이어붙였을 때 더 큰 값이 되는 순서로 정렬합니다.

### 정렬 기준

```typescript
// 두 숫자 a, b를 문자열로 변환
const strA = a.toString();
const strB = b.toString();

// a+b와 b+a를 비교
return (strB + strA).localeCompare(strA + strB);
```

### 예시

**numbers = [6, 10, 2]**

```
6과 10 비교:
- "610" vs "106" → "610" > "106" → 6이 앞에 와야 함

6과 2 비교:
- "62" vs "26" → "62" > "26" → 6이 앞에 와야 함

10과 2 비교:
- "102" vs "210" → "210" > "102" → 2가 앞에 와야 함

결과: [6, 2, 10] → "6210"
```

## 🔍 주요 개념

### 1. 커스텀 정렬 (Custom Sort)

```typescript
numbers.sort((a, b) => {
  const strA = a.toString();
  const strB = b.toString();
  return (strB + strA).localeCompare(strA + strB);
});
```

### 2. 문자열 비교

```typescript
// localeCompare() 사용
"610".localeCompare("106"); // 1 (앞이 더 큼)
"106".localeCompare("610"); // -1 (뒤가 더 큼)
"610".localeCompare("610"); // 0 (같음)
```

### 3. 0 처리

```typescript
// 모든 숫자가 0인 경우 "000..." 방지
const result = numbers.join("");
return result[0] === "0" ? "0" : result;
```

## 💻 완전한 코드

```typescript
function solution(numbers: number[]): string {
  // 1. 문자열로 변환하여 정렬
  const sorted = numbers
    .map((num) => num.toString())
    .sort((a, b) => (b + a).localeCompare(a + b));

  // 2. 정렬된 문자열들을 합치기
  const result = sorted.join("");

  // 3. 모든 숫자가 0인 경우 처리
  return result[0] === "0" ? "0" : result;
}
```

## 🧪 단계별 실행 과정

**numbers = [6, 10, 2]**

### 1단계: 문자열 변환

```
[6, 10, 2] → ["6", "10", "2"]
```

### 2단계: 정렬 비교

```
"6" vs "10":
- "610" vs "106" → "610" > "106" → "6"이 앞에

"6" vs "2":
- "62" vs "26" → "62" > "26" → "6"이 앞에

"10" vs "2":
- "102" vs "210" → "210" > "102" → "2"가 앞에
```

### 3단계: 정렬 결과

```
["6", "2", "10"]
```

### 4단계: 문자열 합치기

```
"6" + "2" + "10" = "6210"
```

## ⚠️ 주의사항

### 1. 0 처리

```typescript
// 잘못된 예시
[0, 0, 0] → "000" ❌

// 올바른 예시
[0, 0, 0] → "0" ✅
```

### 2. 문자열 비교

```typescript
// 숫자 비교가 아닌 문자열 비교
"9" > "10"; // false (문자열)
9 > 10; // false (숫자)

// 하지만 이어붙이면
"910" > "109"; // true
```

### 3. localeCompare 사용

```typescript
// 올바른 문자열 비교
"610".localeCompare("106"); // 1

// 잘못된 비교
"610" > "106"; // true (하지만 일관성 없음)
```

## 🎯 핵심 포인트

1. **문자열 정렬**: 숫자를 문자열로 변환하여 정렬
2. **커스텀 비교**: 두 문자열을 이어붙여서 비교
3. **0 처리**: 모든 숫자가 0인 경우 "0" 반환
4. **localeCompare**: 일관된 문자열 비교

## 💡 배운 점

1. **정렬의 중요성**: 문제에 맞는 정렬 기준 설정
2. **문자열 처리**: 숫자를 문자열로 변환하여 처리
3. **엣지 케이스**: 0으로만 이루어진 경우 처리
4. **커스텀 정렬**: sort() 함수의 비교 함수 활용

## ⭐️ 시간복잡도

- **시간복잡도**: O(n log n) - 정렬
- **공간복잡도**: O(n) - 문자열 배열

## 🚀 다른 접근법

### 숫자 비교 (비추천)

```typescript
// 이 방법은 복잡하고 오류가 많음
function compareNumbers(a: number, b: number): number {
  const strA = a.toString();
  const strB = b.toString();

  // 길이가 다르면 긴 것을 기준으로 비교
  if (strA.length !== strB.length) {
    // 복잡한 로직...
  }

  return strB.localeCompare(strA);
}
```

### 문자열 비교 (추천)

```typescript
// 간단하고 명확한 방법
function compareStrings(a: string, b: string): number {
  return (b + a).localeCompare(a + b);
}
```

## 🎯 실전 팁

- 정렬 문제는 **비교 기준**이 핵심
- 문자열 비교는 **localeCompare** 사용
- 엣지 케이스 항상 고려 (0, 빈 배열 등)
- 커스텀 정렬 함수는 **일관성** 유지
