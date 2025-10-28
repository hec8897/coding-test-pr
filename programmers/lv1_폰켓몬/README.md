# 폰켓몬

## 📌 문제 설명
당신은 폰켓몬을 연구하는 박사님의 연구실에서 일하는 연구원입니다. 박사님은 당신에게 자신의 연구 실험 데이터를 정리하여 몇 가지 문제를 풀어보라고 했습니다.

당신은 총 N 마리의 폰켓몬 중에서 N/2마리를 가질 수 있습니다.
폰켓몬은 종류에 따라 번호로 구분됩니다.
당신은 최대한 다양한 종류의 폰켓몬을 가지길 원합니다.
최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다.

## 💡 풀이 방법

### 1. Set을 사용한 방법 (Best)
```typescript
function solution(nums: number[]): number {
    const uniqueMonsters = new Set(nums);
    return Math.min(nums.length / 2, uniqueMonsters.size);
}
```

### 2. 일반 배열을 사용한 방법
```typescript
function solution(nums: number[]): number {
    const unique: number[] = [];
    for (const num of nums) {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    }
    return Math.min(nums.length / 2, unique.length);
}
```

### 3. filter와 indexOf를 사용한 방법
```typescript
function solution(nums: number[]): number {
    const unique = nums.filter((num, index) => nums.indexOf(num) === index);
    return Math.min(nums.length / 2, unique.length);
}
```

## 🔍 단계별 동작 설명

예시: `[3, 1, 2, 3]`의 경우

1. **중복 제거 단계**
   ```typescript
   const nums = [3, 1, 2, 3];
   const uniqueMonsters = new Set(nums);
   // Set(3) { 3, 1, 2 }
   ```

2. **선택 가능한 폰켓몬 수 계산**
   ```typescript
   const selectableCount = nums.length / 2;  // 4 / 2 = 2
   ```

3. **실제 폰켓몬 종류 수 확인**
   ```typescript
   const uniqueCount = uniqueMonsters.size;  // 3
   ```

4. **두 값 중 작은 값 선택**
   ```typescript
   return Math.min(2, 3);  // 2
   ```

## ⭐️ Set 자료구조 설명

### Set의 특징
1. 중복을 허용하지 않음
2. 순서를 보장
3. 빠른 검색 속도

### 주요 메서드
```typescript
// 생성
const set = new Set();
const set2 = new Set([1, 2, 3]);

// 추가
set.add(1);     // Set(1) { 1 }

// 삭제
set.delete(1);  // true

// 존재 확인
set.has(1);     // false

// 크기 확인
set.size;       // 0

// 모든 요소 제거
set.clear();
```

### Set과 배열 변환
```typescript
// 배열 → Set
const set = new Set([1, 2, 3]);

// Set → 배열
const array = [...set];
// 또는
const array2 = Array.from(set);
```

## 💡 배운 점

1. **Set의 활용**
   - 중복 제거가 필요할 때 Set을 사용하면 코드가 매우 간단해짐
   - `new Set(배열)`로 바로 중복 제거 가능

2. **Math.min의 활용**
   - 두 값 중 작은 값을 선택할 때 유용
   - 여러 개의 인자를 받을 수 있음: `Math.min(1, 2, 3, 4)`

3. **시간복잡도 비교**
   - Set 사용: O(n)
   - includes 사용: O(n²)
   - indexOf 사용: O(n²)

## 🚀 다양한 풀이 방법의 장단점

### 1. Set 사용
- ✅ 코드가 간단함
- ✅ 성능이 좋음 (O(n))
- ✅ 의도가 명확함
- ❌ 처음에는 낯설 수 있음

### 2. 일반 배열 사용
- ✅ 이해하기 쉬움
- ✅ 기본 자료구조만 사용
- ❌ 성능이 좋지 않음 (O(n²))
- ❌ 코드가 길어짐

### 3. filter + indexOf
- ✅ 메서드 체이닝으로 깔끔
- ✅ 함수형 프로그래밍 스타일
- ❌ 성능이 좋지 않음 (O(n²))
- ❌ 동작 방식 이해가 필요함

## ⚠️ 주의사항

1. **성능 고려**
   - 큰 데이터셋의 경우 Set 사용이 훨씬 효율적
   - includes나 indexOf는 매번 전체 배열을 순회

2. **Set vs Array**
   - 중복 제거가 목적이면 Set
   - 순서나 인덱스가 중요하면 Array

3. **타입 주의**
   - Set은 참조형 데이터의 경우 참조값 기준으로 중복 체크
   ```typescript
   new Set([{a:1}, {a:1}]).size  // 2 (다른 객체로 인식)
   ```