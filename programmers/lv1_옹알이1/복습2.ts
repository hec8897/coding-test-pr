/**
 * 프로그래머스 Lv.1 - 옹알이 (1) (복습 2회차)
 *
 * 문제: 조카는 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해
 * 조합한 발음밖에 하지 못합니다.
 * 발음할 수 있는 단어의 개수를 return하세요.
 *
 * 제한사항:
 * - 각 발음은 최대 한 번씩만 사용 가능
 * - 발음을 조합해서 만들 수 있어야 함
 * - 1 ≤ babbling의 길이 ≤ 100
 *
 * 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120956
 */

const regex = /^(aya|ye|woo|ma)+$/;
const duplicateRegex = /(aya|ye|woo|ma)\1/;

function solution(babbling: string[]): number {
  //   return valid.length;
  return babbling.filter(
    (word) => regex.test(word) && !duplicateRegex.test(word)
  ).length;
}

// 테스트 케이스
console.log("=== 기본 테스트 ===");
console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3

console.log("\n=== 단순 발음 ===");
console.log(solution(["aya"])); // 1
console.log(solution(["ye"])); // 1
console.log(solution(["woo"])); // 1
console.log(solution(["ma"])); // 1

console.log("\n=== 조합 발음 ===");
console.log(solution(["ayawoo"])); // 1 ("aya" + "woo")
console.log(solution(["wooma"])); // 1 ("woo" + "ma")
console.log(solution(["mayeaya"])); // 1 ("ma" + "ye" + "aya")
console.log(solution(["ayawooye"])); // 1 ("aya" + "woo" + "ye")
console.log(solution(["yemawooaya"])); // 1 (4개 모두 사용)

console.log("\n=== 발음 불가 ===");
console.log(solution(["ayaaya"])); // 0 (같은 발음 반복 - 문제에서 최대 한 번씩!)
console.log(solution(["yeye"])); // 0 (같은 발음 반복)
console.log(solution(["hello"])); // 0 (불가능한 발음)
console.log(solution(["ayaa"])); // 0 ("aya" + "a" 남음)
console.log(solution(["woooo"])); // 0 ("woo" + "oo" 남음)
