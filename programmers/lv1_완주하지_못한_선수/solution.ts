function solution(participant: string[], completion: string[]): string {
  const map = new Map<string, number>();
  const noneCompletion = [];

  for (const name of participant) {
    map.set(name, (map.get(name) || 0) + 1); // 같은 이름이 있을때마다 +1
  }

  for (const name of completion) {
    map.set(name, (map.get(name) || 0) - 1); // 완주자에서 이름이 있을때 마다 -1
  }

  for (const [name, count] of map) {
    if (count > 0) noneCompletion.push(name); // 완주하지 못한 사람 찾아내기
  }

  return noneCompletion.join("");
}

// 테스트 1
console.log("\n테스트 1 ===============");
console.log("참가자:", ["leo", "kiki", "eden"]);
console.log("완주자:", ["eden", "kiki"]);
console.log("결과:", solution(["leo", "kiki", "eden"], ["eden", "kiki"]));

// 테스트 2
console.log("\n테스트 2 ===============");
console.log("참가자:", ["marina", "josipa", "nikola", "vinko", "filipa"]);
console.log("완주자:", ["josipa", "filipa", "marina", "nikola"]);
console.log(
  "결과:",
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);

// 테스트 3
console.log("\n테스트 3 ===============");
console.log("참가자:", ["mislav", "stanko", "mislav", "ana"]);
console.log("완주자:", ["stanko", "ana", "mislav"]);
console.log(
  "결과:",
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
