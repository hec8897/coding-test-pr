# 🚀 Day 1 연습 문제 실행 방법

## 📂 파일 목록

### TypeScript 파일 (.ts)
- `Day1_연습1_탐색순서.ts`
- `Day1_연습2_섬찾기.ts`
- `Day1_연습3_미로탈출.ts`
- `Day1_정답.ts`

### JavaScript 파일 (.js) - 바로 실행 가능!
- `Day1_연습1_탐색순서.js` ⭐
- `Day1_연습2_섬찾기.js` ⭐
- `Day1_연습3_미로탈출.js` ⭐
- `Day1_정답.js` ⭐

---

## 🎯 추천 학습 순서

### 1️⃣ 문제 1: 탐색 순서 (5분)
**이미 완성된 코드 - 바로 실행!**

```bash
cd Day1_DFS
node Day1_연습1_탐색순서.js
```

DFS가 어떻게 탐색하는지 눈으로 확인하세요!

---

### 2️⃣ 문제 2: 섬 찾기 (20분)
**직접 코드 작성!**

#### Step 1: 파일 열기
```bash
# VS Code나 에디터로 열기
cd Day1_DFS
code Day1_연습2_섬찾기.js
```

#### Step 2: TODO 부분 채우기
```javascript
// TODO 1: 그래프 만들기
for (const [a, b] of bridges) {
  graph[a].push(b);
  graph[b].push(a);  // 양방향!
}

// TODO 2: DFS 함수
function dfs(island) {
  visited[island] = true;
  for (const next of graph[island]) {
    if (!visited[next]) dfs(next);
  }
}

// TODO 3: 그룹 세기
for (let i = 0; i < n; i++) {
  if (!visited[i]) {
    dfs(i);
    groupCount++;
  }
}
```

#### Step 3: 실행
```bash
cd Day1_DFS
node Day1_연습2_섬찾기.js
```

#### 막히면?
```bash
# 힌트를 파일 아래에 제공해뒀어요!
# 정말 막히면 정답 파일 확인:
cd Day1_DFS
node Day1_정답.js
```

---

### 3️⃣ 문제 3: 미로 탈출 (30분)
**조금 더 어려운 문제!**

#### Step 1: 파일 열기
```bash
cd Day1_DFS
code Day1_연습3_미로탈출.js
```

#### Step 2: DFS 함수 완성하기
```javascript
function dfs(row, col) {
  // 1. 출구 도착
  if (maze[row][col] === 'E') return true;
  
  // 2. 방문 처리
  visited[row][col] = true;
  
  // 3. 상하좌우 탐색
  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;
    
    // 범위 체크
    if (newRow < 0 || newRow >= rows || 
        newCol < 0 || newCol >= cols) continue;
    
    // 벽/방문 체크
    if (maze[newRow][newCol] === '#' || 
        visited[newRow][newCol]) continue;
    
    // 재귀 호출
    if (dfs(newRow, newCol)) return true;
  }
  
  return false;
}
```

#### Step 3: 실행
```bash
cd Day1_DFS
node Day1_연습3_미로탈출.js
```

---

## 💡 실행 팁

### 테스트만 하나씩 실행하고 싶다면
파일 내용을 수정해서 특정 테스트만 주석 해제:

```javascript
// console.log(solution(...));  // 이건 주석
console.log(solution(...));     // 이것만 실행
```

### 디버깅하고 싶다면
```javascript
function dfs(node) {
  console.log(`방문: ${node}`);  // 추가!
  visited[node] = true;
  // ...
}
```

---

## 🎓 정답 확인

막혔을 때:

```bash
node Day1_정답.js
```

정답 파일에는:
- ✅ 문제 2, 3의 완전한 정답 코드
- ✅ 핵심 패턴 정리
- ✅ 설명 포함

---

## 📝 학습 체크리스트

- [ ] 문제 1 실행해서 DFS 흐름 이해
- [ ] 문제 2 혼자 힘으로 풀어보기
- [ ] 문제 3 도전 (어려우면 내일!)
- [ ] 정답 코드와 비교해보기
- [ ] 핵심 패턴 외우기

---

## 🚀 다음 단계

이 연습 문제들이 편하게 풀렸다면:

1. **프로그래머스 네트워크** 문제 도전
2. **프로그래머스 타겟 넘버** 다시 풀기
3. **Day 2: BFS** 학습 시작!

---

## ❓ 문제 있나요?

- TypeScript로 실행하고 싶다면: `npx ts-node 파일명.ts`
- JavaScript가 더 편하면: `.js` 파일 사용
- 막히면 언제든 질문하세요! 🙋

**화이팅! 🔥**

