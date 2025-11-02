function solution(clothes: string[][]): number {
  // 여기에 코드를 작성하세요
  const map = new Map();
  let answer = 1;

  for (const [_, type] of clothes) {
    map.set(type, (map.get(type) || 0) + 1);
  }

  for (const count of map.values()) {
    answer *= count + 1;
  }
  return answer - 1;
}

// 테스트
console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5

console.log(
  solution([
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3

export default solution;
