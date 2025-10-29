# 기능개발

## 📌 문제 설명

프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

## 제한 사항

- 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다.
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%이고 하루에 4%씩 작업이 진행된다면 배포는 2일 뒤에 이루어집니다.

## 입출력 예

| progresses               | speeds             | return    |
| ------------------------ | ------------------ | --------- |
| [93, 30, 55]             | [1, 30, 5]         | [2, 1]    |
| [95, 90, 99, 99, 80, 99] | [1, 1, 1, 1, 1, 1] | [1, 3, 2] |

## 입출력 예 설명

**입출력 예 #1**

첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업이 가능하므로 7일간 작업 후 배포가 가능합니다.
두 번째 기능은 30%가 완료되어 있고 하루에 30%씩 작업이 가능하므로 3일간 작업 후 배포가 가능합니다. 하지만 이전 첫 번째 기능이 아직 완성되지 않았기 때문에 첫 번째 기능이 배포되는 7일째 배포됩니다.
세 번째 기능은 55%가 완료되어 있고 하루에 5%씩 작업이 가능하므로 9일간 작업 후 배포가 가능합니다.

따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포됩니다.

**입출력 예 #2**

모든 기능이 하루에 1%씩 작업이 가능하므로, 작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다. 어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이 완성되어야 배포가 가능합니다.

따라서 5일째에 1개의 기능, 10일째에 3개의 기능, 20일째에 2개의 기능이 배포됩니다.

## 💡 풀이 방법

### 1. 각 기능의 완료까지 남은 일수 계산

```typescript
const days: number[] = [];
for (let i = 0; i < progresses.length; i++) {
  const remainingProgress = 100 - progresses[i];
  const daysNeeded = Math.ceil(remainingProgress / speeds[i]);
  days.push(daysNeeded);
}
```

### 2. 큐를 활용한 배포 계산

```typescript
const answer: number[] = [];
let currentDay = days[0];
let count = 1;

for (let i = 1; i < days.length; i++) {
  if (days[i] <= currentDay) {
    // 현재 배포일에 함께 배포 가능
    count++;
  } else {
    // 새로운 배포일
    answer.push(count);
    currentDay = days[i];
    count = 1;
  }
}
answer.push(count); // 마지막 배포
```

## 🔍 주요 개념 설명

### 1. Math.ceil() - 올림 함수

```typescript
Math.ceil(7.1); // 8
Math.ceil(7.9); // 8
Math.ceil(7.0); // 7

// 남은 일수 계산
// 진도 93%, 속도 1% → (100-93)/1 = 7일
// 진도 95%, 속도 4% → (100-95)/4 = 1.25일 → 올림 → 2일
```

### 2. 큐(Queue)의 개념

- **FIFO** (First In First Out): 먼저 들어간 것이 먼저 나옴
- 이 문제에서는 앞 기능이 먼저 배포되어야 함
- 배열의 순서대로 처리하는 것이 큐의 특성

### 3. 예제 #1 동작 과정

```typescript
progresses: [93, 30, 55]
speeds:     [1, 30, 5]

// 1단계: 각 기능의 완료 일수 계산
기능1: (100-93)/1 = 7일
기능2: (100-30)/30 = 2.33... → 올림 → 3일
기능3: (100-55)/5 = 9일

days: [7, 3, 9]

// 2단계: 배포 계산
currentDay = 7 (첫 번째 기능 배포일)
count = 1

i=1: days[1]=3 ≤ 7 → 함께 배포 가능 → count=2
i=2: days[2]=9 > 7 → 새로운 배포 → answer=[2], currentDay=9, count=1

마지막 배포: answer=[2, 1]
```

## ⚠️ 주의사항

1. **올림 처리**

   ```typescript
   // ❌ 잘못된 방법
   const days = (100 - progress) / speed; // 소수점이 나올 수 있음

   // ✅ 올바른 방법
   const days = Math.ceil((100 - progress) / speed);
   ```

2. **마지막 배포 처리**

   ```typescript
   // 반복문이 끝난 후 마지막 배포 그룹을 추가해야 함
   answer.push(count);
   ```

3. **순서 중요**
   - 앞 기능이 완료되지 않으면 뒤 기능도 배포 불가
   - 배열의 순서를 유지하며 처리해야 함

## 💡 배운 점

1. **큐 자료구조의 활용**

   - FIFO 특성을 활용한 순차 처리
   - 배열의 순서를 유지하며 처리

2. **Math.ceil()의 활용**

   - 올림이 필요한 경우 사용
   - 일수 계산 시 소수점 처리

3. **그룹화 로직**
   - 조건에 따라 요소들을 그룹으로 묶기
   - 카운팅 패턴 활용

## 🚀 다른 풀이 방법

### shift()를 사용한 방법

```typescript
function solution(progresses: number[], speeds: number[]): number[] {
  const answer: number[] = [];
  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  while (days.length > 0) {
    const currentDay = days.shift()!;
    let count = 1;

    while (days.length > 0 && days[0] <= currentDay) {
      days.shift();
      count++;
    }

    answer.push(count);
  }

  return answer;
}
```

## ⭐️ 시간복잡도

- 일수 계산: O(n)
- 배포 계산: O(n)
- **총 시간복잡도: O(n)**

## 🎯 실전 팁

- 먼저 각 기능의 완료 일수를 계산하면 문제가 단순해짐
- 큐의 특성(FIFO)을 이해하고 있으면 쉽게 접근 가능
- 그룹화/카운팅 패턴은 자주 나오는 유형
