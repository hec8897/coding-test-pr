/**
 * 영어 끝말잇기
 *
 * @param n - 참가자 수
 * @param words - 끝말잇기 단어 배열
 * @returns [탈락한 사람 번호, 차례] 또는 [0, 0]
 */

/**
 * 참가자수 1부터 n 까지 번호가 붙어있는 n명 -> 순환함
 * 마지막 문자로 시작하는 단어
 * 이전 등장한 단어 사용 x
 *
 */
function solution(n: number, words: string[]): number[] {
  const used = new Set<string>(); // 사용된 단어 저장

  for (let i = 0; i < words.length; i++) {
    const curruntWrod = words[i];

    if (used.has(curruntWrod)) {
      // 이미 있을때 (탈락)
    }

    if (i > 0) {
      const prevWord = words[i - 1];
      const prevLast = prevWord[prevWord.length - 1]; // 앞 단어의 마지막 글자
      const currutFisrt = curruntWrod[0];

      if (prevLast !== currutFisrt) {
        // 앞뒤 글자가 다름 (탈락)
      }
    }
  }

  return [];
}

// 테스트 케이스
console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
// [2, 3]

console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
// [0, 0]

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
// [1, 3]
