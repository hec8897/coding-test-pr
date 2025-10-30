function solution(participant: string[], completion: string[]): string {
  const map = new Map();
  let answer = "";

  for (let name of participant) {
    map.set(name, (map.get(name) || 0) + 1);
    // 동명이인 유저 카운트를 위한 map 생성
  }

  for (let name of completion) {
    map.set(name, map.get(name) - 1); // 완주자가 있을때마다 -1
  }

  for (const [name, count] of map) {
    if (count > 0) {
      answer = name;
    }
  }

  return answer;
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
