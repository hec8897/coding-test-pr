# Target Index Search (Binary Search)

## 문제 정보

- **플랫폼**: HackerRank
- **난이도**: Easy
- **풀이 날짜**: 2025-10-28
- **재풀이**: ❌ (복습 예정)

## 문제 설명

정렬된 고유한 정수 배열과 타겟 값이 주어질 때, 타겟의 인덱스를 반환하거나 찾을 수 없으면 -1을 반환하세요.

### 제한사항

- 배열은 정렬되어 있음 (오름차순)
- 배열의 모든 정수는 고유함 (중복 없음)
- **이진 탐색(Binary Search)을 사용해야 함**

### 입출력 예

**예제 #1**

```
Input:
nums = [1, 2, 3, 4, 5]
target = 3

Output:
2
```

**설명:**

- Initialize: `low = 0`, `high = 4`
- Compute: `mid = (0 + 4) // 2 = 2`
- `nums[2] = 3` matches target → return `2`

**예제 #2**

```
Input:
nums = [2, 4, 6, 8, 10, 12, 14, 16]
target = 16

Output:
7
```

**예제 #3**

```
Input:
nums = [1, 2, 3, 4, 5]
target = 6

Output:
-1
```

(타겟이 배열에 없음)

## 접근 방법

### 이진 탐색 (Binary Search) 알고리즘

**핵심 아이디어:** 정렬된 배열에서 중간값을 기준으로 탐색 범위를 절반씩 줄여나감!

### 알고리즘 단계:

```
1. low = 0, high = 배열 길이 - 1
2. while (low <= high):
   a. mid = (low + high) // 2 (중간 인덱스)
   b. if nums[mid] === target:
      → 찾았다! return mid
   c. if nums[mid] < target:
      → 타겟이 오른쪽에 있음 → low = mid + 1
   d. if nums[mid] > target:
      → 타겟이 왼쪽에 있음 → high = mid - 1
3. 못 찾으면 return -1
```

### 시각화:

```
배열: [1, 2, 3, 4, 5, 6, 7, 8, 9]
타겟: 7

1단계:
low=0                mid=4              high=8
[1, 2, 3, 4, 5, 6, 7, 8, 9]
            ^
nums[4]=5 < 7 → 오른쪽 절반 탐색!

2단계:
            low=5      mid=6    high=8
[1, 2, 3, 4, 5, 6, 7, 8, 9]
                  ^
nums[6]=7 === 7 → 찾았다! return 6
```

## 시간복잡도

- **시간**: O(log n) - 매번 절반씩 줄어듦
- **공간**: O(1) - 추가 공간 사용 안 함

**선형 탐색 vs 이진 탐색:**

- 선형 탐색: O(n) - 1,000,000개면 최악 1,000,000번
- 이진 탐색: O(log n) - 1,000,000개면 최악 20번!

## 풀이 코드

```typescript
function targetIndexSearch(nums: number[], target: number): number {
  let low = 0;                    // 탐색 범위 시작 (인덱스)
  let high = nums.length - 1;     // 탐색 범위 끝 (인덱스)

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);  // 중간 인덱스
    
    if (nums[mid] === target) return mid;  // 찾았다!
    
    if (nums[mid] < target) {
      low = mid + 1;   // 오른쪽 절반 탐색
    } else {
      high = mid - 1;  // 왼쪽 절반 탐색
    }
  }
  
  return -1;  // 못 찾음
}
```

## 핵심 개념 정리

### 1. 이진 탐색 (Binary Search) 완벽 정리 🎯

#### 언제 사용하나?
✅ **정렬된 배열**에서 값을 찾을 때
✅ O(log n)의 빠른 탐색이 필요할 때
✅ 큰 데이터에서 효율적인 검색이 필요할 때

#### 핵심 아이디어
**"중간을 보고, 절반씩 버려나간다!"**

```
전체 배열 [1, 2, 3, 4, 5, 6, 7, 8, 9]
                    ↓
         중간 확인 (5) → 타겟보다 작음
                    ↓
    오른쪽 절반만 [6, 7, 8, 9]
                    ↓
              중간 확인 (7 또는 8)
                    ↓
                  찾았다!
```

#### 3가지 핵심 변수 (모두 인덱스!)

| 변수 | 의미 | 초기값 |
|------|------|--------|
| `low` | 탐색 범위의 **시작 인덱스** | `0` |
| `high` | 탐색 범위의 **끝 인덱스** | `nums.length - 1` |
| `mid` | 탐색 범위의 **중간 인덱스** | `Math.floor((low + high) / 2)` |

**주의:** low, high, mid는 **자리 번호(인덱스)**예요! 값이 아님!

```typescript
nums = [10, 20, 30, 40, 50]
인덱스:   0   1   2   3   4  ← low, high, mid

low = 0      // 0번 자리
high = 4     // 4번 자리
mid = 2      // 2번 자리

nums[mid] = 30  // 2번 자리의 값
```

#### 이진 탐색 3단계 로직

```typescript
1. 중간값 확인
   mid = Math.floor((low + high) / 2)

2-1. 중간값 === 타겟
   → 찾았다! return mid

2-2. 중간값 < 타겟
   → 타겟이 오른쪽에 있음
   → low = mid + 1 (왼쪽 절반 버림)

2-3. 중간값 > 타겟
   → 타겟이 왼쪽에 있음
   → high = mid - 1 (오른쪽 절반 버림)
```

---

### 2. while 루프 완벽 정리 🔄

#### 기본 구조
```typescript
while (조건) {
  // 조건이 true인 동안 반복
  // 언젠가 조건이 false가 되어야 함!
}
```

#### 이진 탐색에서 while 사용

```typescript
while (low <= high) {  // ← 탐색 범위가 있는 동안
  // ...
}
```

**왜 `low <= high`일까?**

```
✅ low <= high:
low=2, high=2  → [2]번 자리 확인 가능 (1개 남음)
low=3, high=2  → 종료! (범위 없음)

❌ low < high:
low=2, high=2  → 바로 종료 (마지막 1개를 못 봄!)
```

#### while vs for 비교

**while이 좋은 경우:**
```typescript
// ✅ 반복 횟수를 모를 때
while (low <= high) {  // 언제 끝날지 모름
  // ...
}
```

**for가 좋은 경우:**
```typescript
// ✅ 반복 횟수를 알 때
for (let i = 0; i < nums.length; i++) {  // 정확히 n번
  // ...
}
```

---

### 3. 시간복잡도 이해하기 ⏱️

#### 왜 O(log n)일까?

```
배열 크기가 n일 때, 최대 몇 번 비교?
→ log₂(n)번!

예시:
  100개 → 7번
1,000개 → 10번
1,000,000개 → 20번!
```

**왜?** 매번 절반으로 줄어들기 때문!

```
100 → 50 → 25 → 12 → 6 → 3 → 1 (7번)
```

#### 선형 탐색 vs 이진 탐색

```
배열: 1,000,000개

선형 탐색 (findIndex):
최악: 1,000,000번 확인 😱
시간복잡도: O(n)

이진 탐색:
최악: 20번 확인! 🚀
시간복잡도: O(log n)
```

---

### 4. 주의사항 ⚠️

#### 1) 배열이 정렬되어 있어야 함!
```typescript
❌ [5, 2, 8, 1, 9]  // 정렬 안 됨
✅ [1, 2, 5, 8, 9]  // 정렬됨
```

#### 2) 중간 인덱스 계산 시 내림
```typescript
✅ Math.floor((low + high) / 2)
❌ Math.ceil((low + high) / 2)  // 무한루프 가능!
```

#### 3) mid + 1, mid - 1 사용
```typescript
✅ low = mid + 1   // mid는 이미 확인했으니 제외
❌ low = mid       // 무한루프!

✅ high = mid - 1  // mid는 이미 확인했으니 제외
❌ high = mid      // 무한루프!
```

---

### 5. 실전 팁 💡

#### 외울 템플릿
```typescript
function binarySearch(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  
  return -1;
}
```

**이 템플릿만 외우면 대부분의 이진 탐색 문제 해결!**

---

## 관련 개념

- **이진 탐색 (Binary Search)**: 정렬된 배열에서 O(log n) 탐색
- **분할 정복 (Divide and Conquer)**: 문제를 절반으로 나눠서 해결
- **시간복잡도 최적화**: O(n) → O(log n)
- **while 루프**: 조건이 참인 동안 반복
