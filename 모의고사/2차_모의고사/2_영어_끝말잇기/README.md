# 영어 끝말잇기

## 📌 문제 정보

- **레벨**: Lv.2
- **목표 시간**: 25분
- **개념**: Hash(Set), 문자열, 구현

---

## 📝 문제 설명

1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 합니다.

영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다:

1. 1번부터 번호 순서대로 한 사람씩 단어를 말합니다.
2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
3. 앞사람이 말한 단어의 **마지막 문자**로 시작하는 단어를 말해야 합니다.
4. 이전에 등장했던 단어는 사용할 수 없습니다.
5. 한 글자인 단어는 인정되지 않습니다.

다음은 3명이 끝말잇기를 하는 상황입니다.

```
tank → kick → know → wheel → land → dream → mother → robot → tank
```

이 경우 8번째 단어인 `tank`를 말한 사람(2번)이 자신의 세 번째 차례에 이미 나왔던 단어를 말했으므로 탈락합니다.

**가장 먼저 탈락하는 사람의 번호**와 **그 사람이 자신의 몇 번째 차례에 탈락하는지**를 구하세요.

만약 주어진 단어들로 탈락자가 생기지 않는다면, `[0, 0]`을 반환합니다.

---

## 🎯 제한사항

- 끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
- words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
- 단어의 길이는 2 이상 50 이하입니다.
- 모든 단어는 알파벳 소문자로만 이루어져 있습니다.

---

## 📊 입출력 예

| n   | words                                                                                                                                                              | result |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| 3   | ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]                                                                                      | [2, 3] |
| 5   | ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"] | [0, 0] |
| 2   | ["hello", "one", "even", "never", "now", "world", "draw"]                                                                                                          | [1, 3] |

### 입출력 예 설명

**예제 #1**

```
1번: tank
2번: kick
3번: know
1번: wheel
2번: land
3번: dream
1번: mother
2번: robot
3번: tank ← 중복! (3번 사람이 3번째 차례)
```

아니다! 8번째 단어를 말한 사람은:

- 8 % 3 = 2 → **2번 사람**
- Math.floor(8 / 3) = 2 → 0번째, 1번째, **2번째**(3번째 차례)

답: [2, 3]

**예제 #2**

```
모든 단어가 규칙을 만족하고 중복도 없음
```

답: [0, 0]

**예제 #3**

```
1번: hello
2번: one ← 끝말잇기 규칙 위반! (hello의 마지막 'o', one의 첫 'o' 맞지만)
```

실제로는:

- hello (마지막: o)
- one (첫: o) ✅
- even (첫: e, one 마지막: e) ✅
- never (첫: n, even 마지막: n) ✅
- now (첫: n, never 마지막: r) ❌

5번째 단어 "now"를 말한 사람:

- (5-1) % 2 = 0 → 1번 사람 (인덱스는 4)
- Math.floor(4 / 2) = 2 → 3번째 차례

답: [1, 3]

---

## 💡 핵심 개념

### 규칙 체크

#### 1. 중복 체크

```typescript
const used = new Set<string>();
if (used.has(word)) {
  // 중복!
}
used.add(word);
```

#### 2. 끝말잇기 체크

```typescript
if (i > 0) {
  const prevWord = words[i - 1];
  const currWord = words[i];

  if (prevWord[prevWord.length - 1] !== currWord[0]) {
    // 끝말잇기 실패!
  }
}
```

#### 3. 사람 번호와 차례 계산

```typescript
const personNumber = (i % n) + 1; // 1번부터 시작
const turn = Math.floor(i / n) + 1; // 1번째 차례부터
```

---

## 🔑 풀이 전략

1. Set을 사용해서 중복 단어 체크
2. 각 단어를 순회하면서:
   - 중복 체크
   - 끝말잇기 규칙 체크
   - 위반 시 사람 번호와 차례 계산
3. 모든 단어가 통과하면 [0, 0] 반환

---

## ⏱️ 시간 복잡도

- **O(n × m)**: n은 단어 개수, m은 평균 단어 길이
- Set의 has/add는 O(1)

---

## 🎯 테스트 케이스

```typescript
console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
// [2, 3]

console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
// [0, 0]

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
// [1, 3]
```
