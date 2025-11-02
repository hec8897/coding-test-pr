function solution(priorities: number[], location: number): number {
  // 여기에 코드를 작성하세요

  const queue: { priority: number; index: number }[] = [];
  let count = 0;
  for (let i = 0; i < priorities.length; i++) {
    queue.push({ priority: priorities[i], index: i });
  }

  while (queue.length > 0) {
    const current = queue.shift() || { priority: 0, index: 0 };
    if (queue.some((p) => p.priority > current?.priority)) {
      queue.push(current);
    } else {
      count++;
      if (current.index === location) {
        return count;
      }
    }
  }

  return 0;
}

// 테스트
console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5

export default solution;
