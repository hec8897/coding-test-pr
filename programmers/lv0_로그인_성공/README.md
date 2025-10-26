# 로그인 성공?

## 문제 정보

- **플랫폼**: 프로그래머스
- **레벨/난이도**: Lv.0 (입문)
- **문제 링크**: [로그인 성공?](https://school.programmers.co.kr/learn/courses/30/lessons/120883)
- **풀이 날짜**: 2025-10-25
- **재풀이**: ❌ (복습 예정)

## 문제 설명

머쓱이가 입력한 아이디와 패스워드가 담긴 배열 `id_pw`와 회원들의 정보가 담긴 2차원 배열 `db`가 주어질 때, 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

### 로그인 규칙

- 아이디와 비밀번호가 **모두 일치**하는 회원정보가 있으면 **"login"**을 return
- 로그인이 실패했을 때:
  - 아이디가 일치하는 회원이 **없다면** **"fail"**을 return
  - 아이디는 일치하지만 비밀번호가 **일치하지 않으면** **"wrong pw"**를 return

### 제한사항

- 회원들의 아이디는 문자열 (알파벳 소문자와 숫자만)
- 회원들의 패스워드는 숫자로 구성된 문자열
- 회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없음
- id_pw의 길이는 2
- id_pw와 db의 원소는 [아이디, 패스워드] 형태
- 1 ≤ 아이디의 길이 ≤ 15
- 1 ≤ 비밀번호의 길이 ≤ 6
- 1 ≤ db의 길이 ≤ 10

### 입출력 예

| id_pw                       | db                                                                                | result       |
| --------------------------- | --------------------------------------------------------------------------------- | ------------ |
| `["meosseugi", "1234"]`     | `[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]`                   | `"login"`    |
| `["programmer01", "15789"]` | `[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]` | `"wrong pw"` |
| `["rabbit04", "98761"]`     | `[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]`           | `"fail"`     |

### 입출력 예 설명

**예제 #1**

- db에 ["meosseugi", "1234"]가 있음
- 아이디와 비밀번호 모두 일치 → "login"

**예제 #2**

- db에 ["programmer01", "1145"]가 있음
- 아이디는 일치하지만 비밀번호 불일치 (15789 ≠ 1145) → "wrong pw"

**예제 #3**

- db에 "rabbit04" 아이디가 없음 → "fail"

## 접근 방법

1. **db에서 아이디 찾기**: `.find()` 메서드로 입력한 아이디와 일치하는 회원 찾기
2. **아이디 존재 여부 확인**: 찾지 못하면 즉시 "fail" 반환 (Early return)
3. **비밀번호 확인**: 아이디를 찾았다면 비밀번호 일치 여부 확인
   - 일치하면 "login"
   - 불일치하면 "wrong pw"

## 시간복잡도

- **시간**: O(n) - db 배열을 순회하며 find (최악의 경우 전체 순회)
- **공간**: O(1) - 추가 공간 사용 안 함

## 풀이 코드

```typescript
function solution(id_pw: string[], db: string[][]): string {
  const findId = db.find((ele) => id_pw[0] === ele[0]);

  // Early return: 아이디 못 찾으면 즉시 반환
  if (!findId) {
    return "fail";
  }

  // 비밀번호 확인
  if (findId[1] !== id_pw[1]) {
    return "wrong pw";
  }

  return "login";
}
```

## 핵심 개념

### 1. `.find()` 메서드

배열에서 조건을 만족하는 **첫 번째 요소**를 반환:

```typescript
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const found = arr.find((ele) => ele[0] === 3);
console.log(found); // [3, 4]

const notFound = arr.find((ele) => ele[0] === 10);
console.log(notFound); // undefined
```

- 찾으면: 해당 요소 반환
- 못 찾으면: `undefined` 반환

### 2. Early Return 패턴

중첩 if문을 줄이고 가독성 향상:

**❌ 중첩 if문 (Before)**

```typescript
if (findId) {
  if (findId[1] === id_pw[1]) {
    return "login";
  } else {
    return "wrong pw";
  }
} else {
  return "fail";
}
```

**✅ Early Return (After)**

```typescript
if (!findId) {
  return "fail"; // 조건 불만족 시 즉시 종료
}

if (findId[1] !== id_pw[1]) {
  return "wrong pw"; // 조건 불만족 시 즉시 종료
}

return "login"; // 모든 조건 만족
```

**장점:**

- 중첩 depth 감소
- 각 조건이 명확히 보임
- 읽기 쉬움

### 3. 구조분해 할당 (선택사항)

```typescript
// 방법 1: 인덱스 접근
id_pw[0], id_pw[1];

// 방법 2: 구조분해
const [id, pw] = id_pw;
```

## 배운 점 / 느낀 점

### 1. 조건 분기 문제의 핵심

- 모든 경우의 수를 명확히 파악
- 순서대로 체크 (가장 빠르게 실패하는 것부터)

### 2. Early Return 패턴의 장점

- **가독성 향상**: 중첩 if문 줄이기
- **명확한 조건**: 각 조건이 독립적으로 보임
- **실무 추천 패턴**: 유지보수하기 좋음

### 3. `.find()` vs 반복문

**find() 사용 (추천)**

```typescript
const user = db.find((ele) => ele[0] === id);
```

**for문 사용**

```typescript
let user;
for (let i = 0; i < db.length; i++) {
  if (db[i][0] === id) {
    user = db[i];
    break;
  }
}
```

→ `find()`가 더 간결하고 읽기 쉬움!

### 4. 실무 연결

실제 로그인 시스템과 비슷한 로직:

- DB에서 사용자 조회
- 존재 여부 확인
- 비밀번호 검증 (실제론 해시 비교)

### 5. 이 문제는 쉬웠다!

- 조건 분기 로직이 명확함
- `.find()` 메서드만 알면 쉽게 풀림
- 실전에서 자주 마주치는 패턴

## 관련 개념

- **배열 메서드**: `.find()`, `.filter()`, `.some()`
- **조건 분기**: if-else, Early Return
- **구조분해 할당**
- **Truthy/Falsy**: `!user` (undefined는 falsy)
