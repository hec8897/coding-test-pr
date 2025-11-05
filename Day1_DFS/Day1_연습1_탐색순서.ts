/**
 * 📝 문제 1: 그래프 탐색 순서 맞히기
 *
 * 그래프:
 *       1
 *      /|\
 *     2 3 4
 *     |   |
 *     5   6
 *
 * dfs(1)을 실행했을 때 방문 순서를 예측해보세요!
 */

function dfs(node: number, graph: number[][], visited: boolean[]) {
  visited[node] = true;
  console.log(node); // 방문!

  for (const nextNode of graph[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode, graph, visited);
    }
  }
}

// 그래프 표현 (인접 리스트)
const graph = [
  [], // 0번 (사용 안 함)
  [2, 3, 4], // 1번 노드
  [1, 5], // 2번 노드
  [1], // 3번 노드
  [1, 6], // 4번 노드
  [2], // 5번 노드
  [6], // 6번 노드 - 수정: 4와 양방향 연결
];

// 양방향 연결 확인 (6번 수정)
graph[6] = [4]; // 6번은 4번과 연결

const visited = Array(7).fill(false);

console.log("=== DFS 탐색 순서 ===");
dfs(1, graph, visited);

console.log("\n✅ 정답: 1 → 2 → 5 → 3 → 4 → 6");
console.log("💡 자신의 예상과 맞았나요?");

/**
 * 🎯 학습 포인트:
 * 1. for문은 배열 순서대로 탐색 (2, 3, 4 순서)
 * 2. 한 방향을 끝까지 간 후 돌아옴 (깊이 우선!)
 * 3. visited로 중복 방지
 */
