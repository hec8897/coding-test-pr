# 조합 (Combination)

## 📌 문제 설명

n개의 숫자 중에서 r개를 뽑는 모든 조합을 구하는 문제입니다.

예를 들어 `[1, 2, 3, 4]`에서 2개를 뽑는다면:
```
[1, 2]
[1, 3]
[1, 4]
[2, 3]
[2, 4]
[3, 4]
```

총 6가지 조합이 나옵니다.

배열 arr과 뽑을 개수 r이 주어질 때, 가능한 모든 조합의 개수를 return 하도록 solution 함수를 작성해주세요.

---

## 🔒 제한사항

- arr의 길이는 1 이상 10 이하입니다.
- r은 1 이상 arr.length 이하입니다.
- arr의 원소는 중복되지 않습니다.

---

## 📥 입출력 예

| arr          | r | result |
| ------------ | - | ------ |
| [1, 2, 3, 4] | 2 | 6      |
| [1, 2, 3]    | 1 | 3      |
| [1, 2, 3]    | 3 | 1      |

---

## 📥 입출력 예 설명

**입출력 예 #1**
- [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]
- 총 6가지

**입출력 예 #2**
- [1], [2], [3]
- 총 3가지

**입출력 예 #3**
- [1,2,3]
- 총 1가지

---

## 💡 백트래킹 (Backtracking) 개념

### 핵심 아이디어

**"선택하고 → 진행하고 → 되돌아가기"**

```
조합 [1,2,3,4]에서 2개 뽑기:

1을 선택 ✅
  → 2를 선택 ✅ (1,2) 완성! ✨
  → 2를 취소 ❌ (되돌아가기!)
  → 3을 선택 ✅ (1,3) 완성! ✨
  → 3을 취소 ❌
  → 4를 선택 ✅ (1,4) 완성! ✨
  → 4를 취소 ❌
1을 취소 ❌

2를 선택 ✅
  → 3을 선택 ✅ (2,3) 완성! ✨
  → 3을 취소 ❌
  → 4를 선택 ✅ (2,4) 완성! ✨
  → 4를 취소 ❌
2를 취소 ❌

3을 선택 ✅
  → 4를 선택 ✅ (3,4) 완성! ✨
  → 4를 취소 ❌
3을 취소 ❌
```

---

## 🔑 백트래킹 vs 분기 재귀

### 분기 재귀 (타겟 넘버)
```typescript
function dfs(index, sum) {
  // 모든 경우를 다 탐색
  const plus = dfs(index + 1, sum + num);
  const minus = dfs(index + 1, sum - num);
  return plus + minus;
}
```
**특징**: 모든 경로를 끝까지 탐색

---

### 백트래킹 (조합)
```typescript
function dfs(start, current) {
  // 조건 만족하면 기록
  if (current.length === r) {
    count++;
    return;  // 되돌아가기!
  }
  
  // 다음 선택지 탐색
  for (let i = start; i < arr.length; i++) {
    current.push(arr[i]);      // 선택
    dfs(i + 1, current);       // 진행
    current.pop();             // 취소 (되돌아가기!)
  }
}
```
**특징**: 조건을 만족하면 되돌아가고, 불필요한 경로는 가지치기

---

## 🌲 백트래킹 트리 구조

```
[1,2,3]에서 2개 뽑기:

              ()
          /   |   \
        1/   2|    \3
       [1]  [2]   [3]
      / \    |
    2/  3\   3|
  [1,2][1,3][2,3]  ← 완성! 되돌아가기
   ✨   ✨   ✨
```

---

## 🛠️ 백트래킹 패턴

### 1️⃣ 종료 조건
```typescript
if (current.length === r) {
  count++;  // 조합 1개 완성!
  return;   // 되돌아가기
}
```

### 2️⃣ 선택과 취소
```typescript
for (let i = start; i < arr.length; i++) {
  current.push(arr[i]);      // ✅ 선택
  dfs(i + 1, current);       // 🔄 재귀 호출
  current.pop();             // ❌ 취소 (백트래킹!)
}
```

### 3️⃣ 중복 방지
- `start` 파라미터 사용
- `i + 1`부터 시작 → 이전 원소 선택 안 함
- [1,2]와 [2,1]을 다른 것으로 보지 않음

---

## 📊 조합 공식

nCr = n! / (r! × (n-r)!)

예: 4C2 = 4! / (2! × 2!) = 24 / (2 × 2) = 6

---

## ⏰ 시간 복잡도

- **O(nCr)** - 가능한 조합의 개수만큼
- 4C2 = 6가지 → O(6)

---

## 💾 공간 복잡도

- **O(r)** - Call Stack 깊이 (최대 r번 재귀)

---

## 🎓 핵심 개념

- ⭐⭐⭐ **백트래킹** (Backtracking)
- ⭐⭐ **재귀**
- ⭐⭐ **조합** (Combination)
- ⭐ **가지치기** (Pruning)

---

## 💡 백트래킹이 필요한 경우

1. **순열/조합** 문제
2. **N-Queen** 문제
3. **스도쿠** 풀이
4. **미로 찾기**
5. **부분집합** 구하기

**공통점**: "선택 → 탐색 → 취소"의 반복

---

## 🚀 풀이 전략

### Step 1: DFS 함수 설계
```typescript
function dfs(start: number, current: number[]) {
  // start: 탐색 시작 인덱스
  // current: 현재까지 선택한 숫자들
}
```

### Step 2: 종료 조건
```typescript
if (current.length === r) {
  count++;
  return;
}
```

### Step 3: 재귀 호출
```typescript
for (let i = start; i < arr.length; i++) {
  current.push(arr[i]);
  dfs(i + 1, current);
  current.pop();  // 백트래킹!
}
```

---

## 💭 디버깅 팁

### 선택 과정 출력하기
```typescript
function dfs(start: number, current: number[]) {
  console.log("현재:", current);
  
  if (current.length === r) {
    console.log("완성! ✨", current);
    count++;
    return;
  }
  
  for (let i = start; i < arr.length; i++) {
    console.log(`${arr[i]} 선택`);
    current.push(arr[i]);
    dfs(i + 1, current);
    current.pop();
    console.log(`${arr[i]} 취소`);
  }
}
```

이렇게 하면 선택과 취소 과정을 눈으로 볼 수 있어요!

---

## 🎯 이 문제의 목표

- ✅ 백트래킹 패턴 이해
- ✅ `push`와 `pop`으로 선택/취소
- ✅ `start` 파라미터로 중복 방지
- ✅ 조합의 개수 세기

---

**같이 풀어봅시다!** 😊

