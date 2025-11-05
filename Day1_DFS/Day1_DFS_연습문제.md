# 📝 Day 1 DFS 연습 문제

## 문제 1: 그래프 탐색 순서 맞히기 ⭐

### 문제 설명

다음과 같은 그래프가 있습니다:

```
      1
     /|\
    2 3 4
    |   |
    5   6
```

이 그래프를 인접 리스트로 표현하면:

```typescript
const graph = [
  [], // 0번 (사용 안 함)
  [2, 3, 4], // 1번 노드
  [1, 5], // 2번 노드
  [1], // 3번 노드
  [1, 6], // 4번 노드
  [2], // 5번 노드
  [4], // 6번 노드
];
```

### 질문

**`dfs(1)`을 실행했을 때, 방문 순서는?**

```typescript
function dfs(node: number, graph: number[][], visited: boolean[]) {
  visited[node] = true;
  console.log(node);

  for (const nextNode of graph[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode, graph, visited);
    }
  }
}

const visited = Array(7).fill(false);
dfs(1, graph, visited);
```

**선택지:**

- A) 1 → 2 → 3 → 4 → 5 → 6
- B) 1 → 2 → 5 → 3 → 4 → 6
- C) 1 → 4 → 6 → 3 → 2 → 5
- D) 1 → 3 → 4 → 6 → 2 → 5

<details>
<summary>💡 힌트</summary>

- 1번에서 시작하면 [2, 3, 4] 중 어디로 먼저 갈까요?
- for문은 배열 순서대로 돕니다!
- 한 곳을 끝까지 파고들어요 (깊이 우선!)

</details>

<details>
<summary>✅ 정답 및 해설</summary>

**정답: B) 1 → 2 → 5 → 3 → 4 → 6**

**단계별 실행:**

```
Step 1: dfs(1) 시작
  visited[1] = true → 출력: 1
  1번과 연결: [2, 3, 4]
  → 2번 먼저 방문!

Step 2: dfs(2) 호출
  visited[2] = true → 출력: 2
  2번과 연결: [1, 5]
  → 1번은 이미 방문함
  → 5번 방문!

Step 3: dfs(5) 호출
  visited[5] = true → 출력: 5
  5번과 연결: [2]
  → 2번은 이미 방문함
  → return (2로 돌아감)

Step 4: dfs(2)로 돌아옴
  → 더 갈 곳 없음 → return (1로 돌아감)

Step 5: dfs(1)로 돌아옴
  → 아직 3번 안 갔네!

Step 6: dfs(3) 호출
  visited[3] = true → 출력: 3
  3번과 연결: [1]
  → 1번은 이미 방문함
  → return (1로 돌아감)

Step 7: dfs(1)로 돌아옴
  → 아직 4번 안 갔네!

Step 8: dfs(4) 호출
  visited[4] = true → 출력: 4
  4번과 연결: [1, 6]
  → 1번은 이미 방문함
  → 6번 방문!

Step 9: dfs(6) 호출
  visited[6] = true → 출력: 6
  6번과 연결: [4]
  → 4번은 이미 방문함
  → return

끝!
```

</details>

---

## 문제 2: 모든 섬 찾기 ⭐⭐

### 문제 설명

바다에 여러 섬이 있습니다. 섬끼리 다리로 연결되어 있을 수 있습니다.

**섬의 개수를 구하세요!**

**입력 예시:**

```typescript
// 5개의 섬이 있고, 다리 정보는 다음과 같음:
const n = 5; // 섬 개수
const bridges = [
  [0, 1], // 0번과 1번이 다리로 연결
  [1, 2], // 1번과 2번이 다리로 연결
  [3, 4], // 3번과 4번이 다리로 연결
];

// 그림으로 보면:
// 0 - 1 - 2    (섬 그룹 1)
// 3 - 4        (섬 그룹 2)
// → 총 2개의 섬 그룹!
```

### 문제

**연결된 섬 그룹의 개수를 반환하는 함수를 작성하세요.**

```typescript
function solution(n: number, bridges: number[][]): number {
  // TODO: 여기에 코드 작성!

  return 0; // 섬 그룹 개수 반환
}

// 테스트
console.log(
  solution(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
); // 2
console.log(
  solution(4, [
    [0, 1],
    [2, 3],
  ])
); // 2
console.log(
  solution(3, [
    [0, 1],
    [1, 2],
  ])
); // 1
```

<details>
<summary>💡 힌트 1</summary>

먼저 bridges를 그래프(인접 리스트)로 변환해야 합니다!

```typescript
// bridges를 graph로 변환:
const graph = Array.from({ length: n }, () => []);
for (const [a, b] of bridges) {
  graph[a].push(b);
  graph[b].push(a); // 양방향!
}
```

</details>

<details>
<summary>💡 힌트 2</summary>

"네트워크" 문제랑 똑같은 패턴입니다!

1. 모든 섬을 확인하면서
2. 방문 안 한 섬에서 DFS 시작
3. DFS는 연결된 섬 전부 방문
4. DFS를 시작한 횟수 = 섬 그룹 개수!

</details>

<details>
<summary>✅ 정답 코드</summary>

```typescript
function solution(n: number, bridges: number[][]): number {
  // 1. 그래프 만들기
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [a, b] of bridges) {
    graph[a].push(b);
    graph[b].push(a); // 양방향 연결!
  }

  // 2. DFS 함수
  const visited = Array(n).fill(false);

  function dfs(island: number) {
    visited[island] = true;

    // 연결된 섬 모두 방문
    for (const next of graph[island]) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  }

  // 3. 모든 섬 확인
  let groupCount = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i); // 새 그룹 탐색!
      groupCount++; // 그룹 개수 증가!
    }
  }

  return groupCount;
}

// 테스트
console.log(
  solution(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
); // 2
console.log(
  solution(4, [
    [0, 1],
    [2, 3],
  ])
); // 2
console.log(
  solution(3, [
    [0, 1],
    [1, 2],
  ])
); // 1
```

**핵심 패턴:**

```typescript
let count = 0;
for (let i = 0; i < n; i++) {
  if (!visited[i]) {
    dfs(i); // 연결된 것들 전부 방문!
    count++; // 새 그룹 발견!
  }
}
```

이 패턴은 정말 자주 나옵니다! 외워두세요! 🔥

</details>

---

## 문제 3: 미로 탈출 ⭐⭐⭐

### 문제 설명

2차원 격자 미로에서 시작점(S)에서 출구(E)까지 갈 수 있는지 확인하세요.

```
S . . #
# . # .
. . . E

S = 시작 (0, 0)
E = 출구 (3, 2)
# = 벽
. = 길
```

### 입력

```typescript
const maze = [
  ["S", ".", ".", "#"],
  ["#", ".", "#", "."],
  [".", ".", ".", "E"],
];
```

### 문제

**시작점에서 출구까지 갈 수 있으면 `true`, 없으면 `false`를 반환하세요.**

```typescript
function solution(maze: string[][]): boolean {
  // TODO: 여기에 코드 작성!

  return false;
}

// 테스트
const maze1 = [
  ["S", ".", ".", "#"],
  ["#", ".", "#", "."],
  [".", ".", ".", "E"],
];
console.log(solution(maze1)); // true

const maze2 = [
  ["S", "#", "#"],
  ["#", "#", "E"],
];
console.log(solution(maze2)); // false
```

<details>
<summary>💡 힌트 1</summary>

2차원 그래프에서 DFS를 하려면:

- 상하좌우 4방향으로 이동
- 범위 체크 필수!
- 벽('#')은 못 감!

```typescript
const directions = [
  [-1, 0], // 위
  [1, 0], // 아래
  [0, -1], // 왼쪽
  [0, 1], // 오른쪽
];
```

</details>

<details>
<summary>💡 힌트 2</summary>

DFS 함수는 이런 형태:

```typescript
function dfs(row: number, col: number): boolean {
  // 1. 출구 도착하면 성공!
  if (maze[row][col] === 'E') return true;

  // 2. 방문 처리
  visited[row][col] = true;

  // 3. 상하좌우 탐색
  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;

    // 범위 체크, 벽 체크, 방문 체크
    if (/* 조건 */) {
      if (dfs(newRow, newCol)) return true;
    }
  }

  return false;  // 못 찾음
}
```

</details>

<details>
<summary>✅ 정답 코드</summary>

```typescript
function solution(maze: string[][]): boolean {
  const rows = maze.length;
  const cols = maze[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  // 상하좌우 방향
  const directions = [
    [-1, 0], // 위
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [0, 1], // 오른쪽
  ];

  function dfs(row: number, col: number): boolean {
    // 1. 출구 도착!
    if (maze[row][col] === "E") {
      return true;
    }

    // 2. 방문 처리
    visited[row][col] = true;

    // 3. 상하좌우 탐색
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // 범위 체크
      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
        continue;
      }

      // 벽이거나 이미 방문한 곳은 패스
      if (maze[newRow][newCol] === "#" || visited[newRow][newCol]) {
        continue;
      }

      // 재귀 탐색
      if (dfs(newRow, newCol)) {
        return true; // 경로 찾음!
      }
    }

    return false; // 이 경로로는 못 찾음
  }

  // 시작점 찾기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maze[i][j] === "S") {
        return dfs(i, j);
      }
    }
  }

  return false;
}

// 테스트
const maze1 = [
  ["S", ".", ".", "#"],
  ["#", ".", "#", "."],
  [".", ".", ".", "E"],
];
console.log(solution(maze1)); // true

const maze2 = [
  ["S", "#", "#"],
  ["#", "#", "E"],
];
console.log(solution(maze2)); // false
```

**핵심 포인트:**

1. 2차원 배열에서 상하좌우 탐색
2. 범위 체크 (`newRow < 0 || ...`)
3. 조건 체크 (벽, 방문)
4. 재귀로 깊이 우선 탐색

</details>

---

## 🎯 학습 체크리스트

연습 문제를 풀면서 체크해보세요!

- [ ] **문제 1**: 그래프 탐색 순서를 예측할 수 있다
- [ ] **문제 2**: 연결된 그룹(컴포넌트) 개수를 구할 수 있다
- [ ] **문제 3**: 2차원 격자에서 DFS를 사용할 수 있다

### 추가 개념 정리

**1. 그래프 vs 2차원 격자**

```typescript
// 그래프: 인접 리스트 사용
const graph = [[1, 2], [0, 3], ...];
for (const next of graph[node]) { ... }

// 2차원 격자: 상하좌우 이동
const directions = [[-1,0], [1,0], [0,-1], [0,1]];
for (const [dr, dc] of directions) { ... }
```

**2. DFS의 반환값**

```typescript
// 1) void - 탐색만 하기
function dfs(node) {
  visited[node] = true;
  // ...
}

// 2) boolean - 찾았는지 여부
function dfs(node): boolean {
  if (찾았으면) return true;
  // ...
  return false;
}

// 3) number - 개수 세기
function dfs(node): number {
  let count = 1;
  for (const next of graph[node]) {
    count += dfs(next);
  }
  return count;
}
```

---

## 💡 다음 단계

이 연습 문제들이 편하게 풀린다면:

1. ✅ 프로그래머스 "네트워크" 문제 도전!
2. ✅ 프로그래머스 "타겟 넘버" 다시 풀기!
3. ✅ 백준 "DFS와 BFS (1260)" 도전!

**화이팅! 🔥**
