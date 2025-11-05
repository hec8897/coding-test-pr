/**
 * 📝 문제 2: 모든 섬 찾기
 *
 * 바다에 여러 섬이 있고, 섬끼리 다리로 연결되어 있습니다.
 * 연결된 섬 그룹의 개수를 구하세요!
 *
 * 예시:
 * 5개의 섬, 다리: [[0,1], [1,2], [3,4]]
 * → 0-1-2 (그룹1), 3-4 (그룹2) → 총 2그룹
 */

function solution(n: number, bridges: number[][]): number {
  // 1단계: 그래프 만들기 (인접 리스트)
  const graph: number[][] = Array.from({ length: n }, () => []);

  // TODO: bridges를 graph로 변환하세요
  // 힌트: 양방향 연결을 잊지 마세요!

  // 2단계: DFS 함수 작성
  const visited = Array(n).fill(false);

  function dfs(island: number) {
    // TODO: DFS 로직 작성
    // 1. 방문 처리
    // 2. 연결된 섬 탐색
  }

  // 3단계: 모든 섬 확인하며 그룹 개수 세기
  let groupCount = 0;

  // TODO: 모든 섬을 순회하며 DFS 실행
  // 힌트: 방문 안 한 섬에서 DFS를 시작할 때마다 groupCount++

  return groupCount;
}

// 테스트 케이스
console.log("=== 문제 2: 섬 찾기 ===\n");

const test1 = solution(5, [
  [0, 1],
  [1, 2],
  [3, 4],
]);
console.log(`테스트 1: ${test1} (정답: 2)`);

const test2 = solution(4, [
  [0, 1],
  [2, 3],
]);
console.log(`테스트 2: ${test2} (정답: 2)`);

const test3 = solution(3, [
  [0, 1],
  [1, 2],
]);
console.log(`테스트 3: ${test3} (정답: 1)`);

const test4 = solution(3, []);
console.log(`테스트 4: ${test4} (정답: 3) - 연결 안 된 섬 3개`);

/**
 * 💡 힌트:
 *
 * 1. 그래프 만들기:
 *    for (const [a, b] of bridges) {
 *      graph[a].push(b);
 *      graph[b].push(a);  // 양방향!
 *    }
 *
 * 2. DFS:
 *    visited[island] = true;
 *    for (const next of graph[island]) {
 *      if (!visited[next]) dfs(next);
 *    }
 *
 * 3. 그룹 세기:
 *    for (let i = 0; i < n; i++) {
 *      if (!visited[i]) {
 *        dfs(i);
 *        groupCount++;
 *      }
 *    }
 */

/**
 * 🎯 학습 포인트:
 * - bridges → graph 변환 (양방향!)
 * - DFS로 연결된 것들 한 번에 방문
 * - DFS 시작 횟수 = 그룹 개수
 */
