# 완주하지 못한 선수

## 📌 문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

## 제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

## 💡 문제 풀이

### 1. Map을 사용한 풀이 (효율적인 방법)
```typescript
function solution(participant: string[], completion: string[]): string {
    const map = new Map<string, number>();
    
    // 1. 참가자 등록
    for (const name of participant) {
        map.set(name, (map.get(name) || 0) + 1);
    }
    
    // 2. 완주자 처리
    for (const name of completion) {
        map.set(name, map.get(name)! - 1);
    }
    
    // 3. 미완주자 찾기
    for (const [name, count] of map) {
        if (count > 0) return name;
    }
    
    return "";
}
```

### 2. 정렬을 사용한 풀이 (직관적인 방법)
```typescript
function solution(participant: string[], completion: string[]): string {
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    
    return participant[participant.length - 1];
}
```

## 🔍 Map 객체 이해하기

### 1. Map 기본 사용법
```typescript
const map = new Map<string, number>();

// 값 설정
map.set("mislav", 1);  // { "mislav" => 1 }

// 값 가져오기
map.get("mislav");     // 1
map.get("unknown");    // undefined

// 값 존재 확인
map.has("mislav");     // true
```

### 2. 우리 코드에서 Map 동작 예시
```typescript
// 참가자: ["mislav", "stanko", "mislav", "ana"]
// 완주자: ["stanko", "ana", "mislav"]

// 1. 참가자 등록 과정
map.set("mislav", 1)   // 첫 번째 mislav
map.set("stanko", 1)   // stanko 등록
map.set("mislav", 2)   // 두 번째 mislav
map.set("ana", 1)      // ana 등록

// 2. 완주자 처리 과정
map.set("stanko", 0)   // stanko 완주
map.set("ana", 0)      // ana 완주
map.set("mislav", 1)   // mislav 한 명 완주

// 3. 결과
// Map { "mislav" => 1, "stanko" => 0, "ana" => 0 }
// mislav가 완주하지 못한 선수!
```

## ⭐️ 핵심 포인트

### 1. Map을 사용하는 이유
- 빠른 검색/수정 (O(1))
- 동명이인 처리 가능
- 각 이름의 등장 횟수를 효율적으로 관리

### 2. `map.set(name, (map.get(name) || 0) + 1)` 이해하기
- `map.get(name)`: 현재 등록된 횟수 가져오기
- `|| 0`: undefined일 경우 0으로 초기화
- `+ 1`: 횟수 1 증가

### 3. TypeScript에서 주의할 점
```typescript
// 1. Non-null assertion (!) 사용
map.get(name)! - 1;  // 위험할 수 있음

// 2. 더 안전한 방법
map.set(name, (map.get(name) || 0) - 1);
```

## 🎯 시간복잡도 비교

### Map 사용
- 참가자 등록: O(n)
- 완주자 처리: O(n)
- 미완주자 찾기: O(n)
- **총 시간복잡도: O(n)**

### 정렬 사용
- 정렬: O(n log n)
- 비교: O(n)
- **총 시간복잡도: O(n log n)**

## 💡 배운 점
1. Map 자료구조의 효율적인 활용
2. 동명이인 처리 방법
3. TypeScript에서 undefined 처리하기
4. 시간복잡도를 고려한 알고리즘 선택

## 🚀 확장 가능성
- 현재는 완주하지 못한 선수가 "한 명"이라는 조건이 있지만, 여러 명일 경우를 대비해 코드를 확장할 수 있음
- 완주하지 못한 선수들의 통계 정보를 추가할 수 있음 (예: 동명이인 수 등)