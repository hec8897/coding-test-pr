/**
 * 🎯 Day 1 연습 문제 정답 코드
 * 
 * 막히면 이 파일을 참고하세요!
 */

console.log("=== Day 1 연습 문제 정답 ===\n");

// ========================================
// 문제 2: 섬 찾기 - 정답
// ========================================
console.log("📝 문제 2: 섬 찾기\n");

function solution2(n: number, bridges: number[][]): number {
  // 1. 그래프 만들기
  const graph: number[][] = Array.from({ length: n }, () => []);
  
  for (const [a, b] of bridges) {
    graph[a].push(b);
    graph[b].push(a);  // 양방향 연결!
  }
  
  // 2. DFS 함수
  const visited = Array(n).fill(false);
  
  function dfs(island: number) {
    visited[island] = true;
    
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
      dfs(i);           // 연결된 섬 전부 방문!
      groupCount++;     // 그룹 개수 증가!
    }
  }
  
  return groupCount;
}

console.log(solution2(5, [[0,1], [1,2], [3,4]]));  // 2
console.log(solution2(4, [[0,1], [2,3]]));         // 2
console.log(solution2(3, [[0,1], [1,2]]));         // 1
console.log(solution2(3, []));                     // 3

console.log("\n✅ 핵심 패턴:");
console.log("   - bridges → graph 변환 (양방향!)");
console.log("   - DFS로 연결된 것 한 번에 방문");
console.log("   - DFS 시작 횟수 = 그룹 개수\n");

// ========================================
// 문제 3: 미로 탈출 - 정답
// ========================================
console.log("📝 문제 3: 미로 탈출\n");

function solution3(maze: string[][]): boolean {
  const rows = maze.length;
  const cols = maze[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () => 
    Array(cols).fill(false)
  );
  
  const directions = [
    [-1, 0],  // 위
    [1, 0],   // 아래
    [0, -1],  // 왼쪽
    [0, 1]    // 오른쪽
  ];
  
  function dfs(row: number, col: number): boolean {
    // 1. 출구 도착!
    if (maze[row][col] === 'E') {
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
      
      // 벽이거나 방문한 곳 패스
      if (maze[newRow][newCol] === '#' || visited[newRow][newCol]) {
        continue;
      }
      
      // 재귀 탐색
      if (dfs(newRow, newCol)) {
        return true;
      }
    }
    
    return false;
  }
  
  // 시작점 찾기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maze[i][j] === 'S') {
        return dfs(i, j);
      }
    }
  }
  
  return false;
}

const maze1 = [
  ['S', '.', '.', '#'],
  ['#', '.', '#', '.'],
  ['.', '.', '.', 'E']
];
console.log(solution3(maze1));  // true

const maze2 = [
  ['S', '#', '#'],
  ['#', '#', 'E']
];
console.log(solution3(maze2));  // false

console.log("\n✅ 핵심 패턴:");
console.log("   - 2차원 배열에서 상하좌우 이동");
console.log("   - 범위 체크 필수! (newRow < 0 || ...)");
console.log("   - 조건 체크 (벽, 방문)");
console.log("   - boolean 반환으로 경로 찾기\n");

// ========================================
// 🎯 핵심 DFS 패턴 정리
// ========================================
console.log("🎯 DFS 핵심 패턴 정리\n");

console.log("1️⃣ 기본 DFS (그래프 탐색):");
console.log(`
function dfs(node, graph, visited) {
  visited[node] = true;
  
  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next, graph, visited);
    }
  }
}
`);

console.log("2️⃣ 그룹 개수 세기:");
console.log(`
let count = 0;
for (let i = 0; i < n; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;  // DFS 시작 횟수 = 그룹 개수!
  }
}
`);

console.log("3️⃣ 2차원 격자 DFS:");
console.log(`
const directions = [[-1,0], [1,0], [0,-1], [0,1]];

function dfs(row, col) {
  visited[row][col] = true;
  
  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;
    
    // 범위 + 조건 체크
    if (유효한_위치 && 갈_수_있으면) {
      dfs(newRow, newCol);
    }
  }
}
`);

console.log("\n🎉 수고하셨습니다! 이제 실전 문제를 풀어보세요!");

