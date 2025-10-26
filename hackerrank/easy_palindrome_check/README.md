# Check Palindrome by Filtering Non-Letters

## 문제 정보

- **플랫폼**: HackerRank
- **난이도**: Easy
- **문제 링크**:
- **풀이 날짜**: 2025-10-25
- **재풀이**: ❌ (복습 예정)

## 문제 설명

**문자, 숫자, 기호가 포함된 문자열**이 주어졌을 때, **알파벳 문자만 고려**할 때 앞뒤로 읽어도 같은지 확인합니다. (대소문자 구분 없음)

**팰린드롬(Palindrome)**: 앞에서 읽으나 뒤에서 읽으나 같은 문자열

### 제한사항

- 알파벳이 아닌 문자(공백, 쉼표, 콜론 등)는 무시
- 대소문자 구분 없음

### 입출력 예

| 입력                               | 출력    | 설명                                         |
| ---------------------------------- | ------- | -------------------------------------------- |
| `"racecar"`                        | `true`  | 그대로 팰린드롬                              |
| `"A man, a plan, a canal: Panama"` | `true`  | 알파벳만: "AmanaplanacanalPanama" → 팰린드롬 |
| `"hello"`                          | `false` | 팰린드롬 아님                                |
| `"Madam"`                          | `true`  | 소문자로: "madam" → 팰린드롬                 |
| `"race a car"`                     | `false` | 알파벳만: "raceacar" → 팰린드롬 아님         |

### 입출력 예 설명

**예제 #1: "A man, a plan, a canal: Panama"**

1. 알파벳만 추출: `"AmanaplanacanalPanama"`
2. 소문자로 변환: `"amanaplanacanalpanama"`
3. 뒤집기: `"amanaplanacanalpanama"`
4. 같음! → `true`

## 접근 방법

1. **알파벳만 추출**: 정규표현식 `/[^a-zA-Z]/g`로 알파벳이 아닌 문자 제거
2. **소문자로 변환**: `.toLowerCase()`로 대소문자 구분 제거
3. **팰린드롬 확인**: 문자열을 뒤집어서 원본과 비교

## 시간복잡도

- **시간**: O(n) - 문자열 길이만큼 순회 (replace, toLowerCase, split, reverse, join 모두 O(n))
- **공간**: O(n) - 뒤집은 문자열을 위한 추가 공간

## 풀이 코드

### 방법 1: 문자열 뒤집기 (구현한 방법)

```typescript
const nonLetterRegex = /[^a-zA-Z]/g;

function isPalindrome(s: string): boolean {
  const str = s.replace(nonLetterRegex, "").toLowerCase();
  const reverStr = str.split("").reverse().join("");

  return str === reverStr;
}
```

**장점:**

- 코드가 간결하고 읽기 쉬움
- 의도가 명확함

**단점:**

- 공간복잡도 O(n) (추가 문자열 생성)

### 방법 2: 투 포인터 (개선안)

```typescript
function isPalindrome(s: string): boolean {
  const str = s.replace(/[^a-zA-Z]/g, "").toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
```

**장점:**

- 공간복잡도 O(1) (추가 문자열 생성 안 함)
- Early return으로 빠른 실패 가능

**단점:**

- 코드가 약간 더 복잡함

## 핵심 개념: 정규표현식

### `/[^a-zA-Z]/g` 설명

```typescript
[^a-zA-Z]  - 알파벳이 아닌 모든 문자
  ^        - NOT (부정)
  a-z      - 소문자 알파벳
  A-Z      - 대문자 알파벳
g          - global (전체 문자열에서 찾기)
```

### 테스트 결과

```typescript
"abc123cba".replace(/[^a-zA-Z]/g, ""); // "abccba"
"A man, a plan".replace(/[^a-zA-Z]/g, ""); // "Amanaplan"
"한글abc123".replace(/[^a-zA-Z]/g, ""); // "abc"
"!@#$%".replace(/[^a-zA-Z]/g, ""); // ""
```

## 엣지 케이스

### 빈 문자열 처리

```typescript
isPalindrome(""); // true
isPalindrome("12345"); // true (알파벳 없음 → 빈 문자열)
isPalindrome("!@#$%"); // true (알파벳 없음 → 빈 문자열)
```

**빈 문자열은 수학적으로 팰린드롬!** (앞뒤가 동일)

필요시 이렇게 수정 가능:

```typescript
if (str.length === 0) return false; // 또는 true
```

## 배운 점 / 느낀 점

### 1. 정규표현식 변수화의 중요성

```typescript
const nonLetterRegex = /[^a-zA-Z]/g; // 재사용 & 가독성 향상
```

### 2. 문자열 메서드의 한계

- `.reverse()`는 배열 메서드라서 문자열에 직접 사용 불가
- `.split('') → .reverse() → .join('')` 패턴 필요

### 3. 트레이드오프 이해

| 항목         | 문자열 뒤집기 | 투 포인터 |
| ------------ | ------------- | --------- |
| 가독성       | ⭐⭐⭐        | ⭐⭐      |
| 시간복잡도   | O(n)          | O(n)      |
| 공간복잡도   | O(n)          | O(1)      |
| Early Return | ❌            | ✅        |

실무에서는 **가독성 vs 성능**을 상황에 맞게 선택!

### 4. 면접에서 물어볼 만한 것들

- 시간/공간 복잡도
- 더 효율적인 방법 (투 포인터)
- 정규표현식 설명
- 엣지 케이스 처리
- 실무 적용 시 개선점

### 5. 엣지 케이스의 중요성

테스트 케이스에 다양한 입력 포함:

- 숫자 포함
- 한글 포함
- 특수문자만
- 빈 문자열
- 알파벳 없는 경우

## 관련 개념

- **팰린드롬(Palindrome)**
- **정규표현식 (Regular Expression)** ⭐
- **투 포인터(Two Pointers)** 알고리즘
- **문자열 필터링**
- **트레이드오프 (가독성 vs 성능)**
- **시간/공간 복잡도 분석**
