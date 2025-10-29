function solution(participant: string[], completion: string[]): string {
  const map = new Map();

  for (let runner of participant) {
    map.set(runner, (map.get(runner) || 0) + 1);
  }

  for (let runner of completion) {
    map.set(runner, (map.get(runner) || 0) - 1);
  }

  const answer = [];

  for (let [runner, count] of map) {
    if (count > 0) {
      answer.push(runner);
    }
  }

  return answer.join("");
}

// 테스트
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"
