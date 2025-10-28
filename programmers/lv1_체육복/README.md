# 체육복

## 📌 문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.

예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

## 💡 풀이 방법

### 1. 학생들의 체육복 상태 초기화
```typescript
const students = Array(n).fill(1);  // 모든 학생이 체육복 1개씩 가지고 있음
```

### 2. 도난당한 학생과 여벌 체육복 처리
```typescript
lost.forEach(l => students[l-1]--);     // 도난당한 학생은 -1
reserve.forEach(r => students[r-1]++);   // 여벌 있는 학생은 +1
```

### 3. 체육복 빌려주기 로직
```typescript
for(let i = 0; i < n; i++) {
    if(students[i] === 0) {  // 체육복이 없는 학생
        // 앞번호 학생이 여벌이 있는 경우
        if(i > 0 && students[i-1] === 2) {
            students[i]++;    // 빌려받음
            students[i-1]--;  // 빌려줌
        }
        // 뒷번호 학생이 여벌이 있는 경우
        else if(i < n-1 && students[i+1] === 2) {
            students[i]++;    // 빌려받음
            students[i+1]--;  // 빌려줌
        }
    }
}
```

## 🔍 주요 개념 설명

### 1. Array.fill()
```typescript
Array(n).fill(1)  // [1, 1, 1, 1, ...] n개의 1로 채워진 배열 생성
```

### 2. 배열 인덱스와 학생 번호
```typescript
// 학생 번호는 1부터 시작하지만 배열 인덱스는 0부터 시작
lost.forEach(l => students[l-1]--)  // l-1로 인덱스 조정
```

### 3. 체육복 상태 표현
```typescript
0: 체육복 없음 (도난당함)
1: 체육복 1개 있음 (정상)
2: 체육복 2개 있음 (여벌 있음)
```

## ⚠️ 주의사항

1. **인덱스 범위 체크**
   ```typescript
   if(i > 0 && ...)  // 첫 번째 학생은 앞번호 확인 불필요
   if(i < n-1 && ...) // 마지막 학생은 뒷번호 확인 불필요
   ```

2. **여벌 체육복이 있는 학생도 도난당할 수 있음**
   ```typescript
   // 도난과 여벌을 순서대로 처리하면 자연스럽게 해결
   lost.forEach(l => students[l-1]--);     // 먼저 도난 처리
   reserve.forEach(r => students[r-1]++);   // 그 다음 여벌 처리
   ```

3. **앞번호 학생 우선 처리**
   ```typescript
   // 앞번호 학생을 먼저 확인하고, 없으면 뒷번호 학생 확인
   if(i > 0 && students[i-1] === 2) {
       // 앞번호 학생에게 빌림
   }
   else if(i < n-1 && students[i+1] === 2) {
       // 뒷번호 학생에게 빌림
   }
   ```

## 💡 배운 점

1. **상태 관리**
   - 배열을 사용한 효율적인 상태 관리
   - 증감 연산자를 활용한 상태 변경

2. **그리디 알고리즘**
   - 앞번호부터 처리하는 접근 방식
   - 최적의 선택을 통한 최대값 도출

3. **인덱스 처리**
   - 1-based 인덱스를 0-based로 변환
   - 경계 조건 처리

## 🚀 개선 가능한 부분

1. **타입 안정성**
```typescript
type Student = 0 | 1 | 2;  // 체육복 상태를 타입으로 정의
const students: Student[] = Array(n).fill(1);
```

2. **가독성**
```typescript
const hasExtraUniform = (student: number) => student === 2;
const needsUniform = (student: number) => student === 0;
```

## ⭐️ 시간복잡도
- O(n) - n은 전체 학생 수
- lost 배열 순회: O(l)
- reserve 배열 순회: O(r)
- 전체 학생 순회: O(n)
- 최종 카운트: O(n)
