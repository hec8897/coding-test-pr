/**
 * 📝 문제 3: 미로 탈출
 *
 * 2차원 격자 미로에서 시작점(S)에서 출구(E)까지 갈 수 있는지 확인하세요.
 *
 * S = 시작
 * E = 출구
 * # = 벽
 * . = 길
 */

function solution(maze: string[][]): boolean {
  const rows = maze.length;
  const cols = maze[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  // 상하좌우 방향 (위, 아래, 왼쪽, 오른쪽)
  const directions = [
    [-1, 0], // 위
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [0, 1], // 오른쪽
  ];

  function dfs(row: number, col: number): boolean {
    // TODO: DFS 로직 작성

    // 1. 출구 도착 체크
    // if (maze[row][col] === 'E') return true;

    // 2. 방문 처리
    // visited[row][col] = true;

    // 3. 상하좌우 탐색
    // for (const [dr, dc] of directions) {
    //   const newRow = row + dr;
    //   const newCol = col + dc;
    //
    //   // 범위 체크
    //   // 벽('#') 체크
    //   // 방문 체크
    //
    //   // 재귀 호출
    // }

    return false;
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

// 테스트 케이스
console.log("=== 문제 3: 미로 탈출 ===\n");

const maze1 = [
  ["S", ".", ".", "#"],
  ["#", ".", "#", "."],
  [".", ".", ".", "E"],
];

console.log("미로 1:");
maze1.forEach((row) => console.log(row.join(" ")));
console.log(`결과: ${solution(maze1)} (정답: true)\n`);

const maze2 = [
  ["S", "#", "#"],
  ["#", "#", "E"],
];

console.log("미로 2:");
maze2.forEach((row) => console.log(row.join(" ")));
console.log(`결과: ${solution(maze2)} (정답: false)\n`);

const maze3 = [
  ["S", ".", "."],
  [".", "#", "."],
  [".", ".", "E"],
];

console.log("미로 3:");
maze3.forEach((row) => console.log(row.join(" ")));
console.log(`결과: ${solution(maze3)} (정답: true)\n`);

/**
 * 💡 힌트:
 *
 * 1. 출구 도착:
 *    if (maze[row][col] === 'E') return true;
 *
 * 2. 방문 처리:
 *    visited[row][col] = true;
 *
 * 3. 상하좌우 탐색:
 *    for (const [dr, dc] of directions) {
 *      const newRow = row + dr;
 *      const newCol = col + dc;
 *
 *      // 범위 체크
 *      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
 *        continue;
 *      }
 *
 *      // 벽이거나 방문한 곳 패스
 *      if (maze[newRow][newCol] === '#' || visited[newRow][newCol]) {
 *        continue;
 *      }
 *
 *      // 재귀 호출
 *      if (dfs(newRow, newCol)) return true;
 *    }
 */

/**
 * 🎯 학습 포인트:
 * - 2차원 배열에서 DFS
 * - 상하좌우 이동 패턴
 * - 범위 체크 중요!
 * - boolean 반환으로 경로 찾기
 */

