# K번째수

## 📌 문제 설명
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

## 💡 풀이 방법

### 1. 기본 접근법
```typescript
function solution(array: number[], commands: number[][]): number[] {
    const answer: number[] = [];

    for (const [i, j, k] of commands) {
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    }

    return answer;
}
```

### 2. map을 사용한 방법
```typescript
function solution(array: number[], commands: number[][]): number[] {
    return commands.map(([i, j, k]) => 
        array
            .slice(i - 1, j)    // i번째부터 j번째까지 자르기
            .sort((a, b) => a - b)  // 오름차순 정렬
            [k - 1]  // k번째 수 선택
    );
}
```

## 🔍 주요 개념 설명

### 1. 배열 자르기: slice()
```typescript
array.slice(startIndex, endIndex)
// startIndex: 포함
// endIndex: 불포함

// 예시
[1, 5, 2, 6, 3, 7, 4].slice(1, 4)  // [5, 2, 6]
```

### 2. 배열 정렬: sort()
```typescript
array.sort((a, b) => a - b)  // 오름차순
array.sort((a, b) => b - a)  // 내림차순

// 동작 원리
// a - b가 음수면 a가 앞으로
// a - b가 양수면 b가 앞으로
// a - b가 0이면 순서 유지
```

### 3. 구조 분해 할당
```typescript
for (const [i, j, k] of commands)
// commands의 각 요소 [2, 5, 3]을
// i = 2, j = 5, k = 3으로 분해
```

## ⚠️ 주의사항

1. **인덱스 vs 위치**
   - commands의 i, j, k는 1부터 시작하는 "위치"
   - 배열의 인덱스는 0부터 시작
   - 따라서 `slice(i-1, j)` 필요

2. **정렬 주의사항**
   ```typescript
   // ❌ 잘못된 정렬
   [1, 10, 2, 3].sort()  // [1, 10, 2, 3]
   
   // ✅ 올바른 정렬
   [1, 10, 2, 3].sort((a, b) => a - b)  // [1, 2, 3, 10]
   ```

## 💡 배운 점

1. **메서드 체이닝**
   - 여러 메서드를 연결해서 사용
   - 코드가 간결해짐
   - 가독성 향상

2. **배열 메서드의 활용**
   - slice(): 배열 자르기
   - sort(): 정렬
   - map(): 배열 변환

3. **구조 분해 할당**
   - 배열의 요소를 개별 변수로 분해
   - 코드 가독성 향상

## 🚀 개선 가능한 부분

1. **타입 안정성**
   ```typescript
   const answer: number[] = [];  // 타입 명시
   ```

2. **에러 처리** (실제 테스트에선 불필요)
   ```typescript
   if (i > j || k < 1) return 0;
   ```

3. **성능 최적화** (현재도 충분히 효율적)
   - 정렬이 필요한 경우에만 정렬
   - 매우 큰 배열의 경우 고려

## ⭐️ 시간복잡도

- slice(): O(n)
- sort(): O(n log n)
- 전체: O(m * n log n)
  - m: commands의 길이
  - n: 잘린 배열의 최대 길이

## 🎯 실제 코딩테스트에서는
- 현재 구현한 방식으로도 충분
- 불필요한 최적화는 피하기
- 코드 가독성 유지가 중요