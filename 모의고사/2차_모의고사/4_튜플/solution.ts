/**
 * 튜플
 * 
 * @param s - 튜플을 표현하는 문자열
 * @returns 튜플 배열
 */
function solution(s: string): number[] {
  const answer: number[] = [];
  
  // 여기에 코드를 작성하세요
  
  return answer;
}

// 테스트 케이스
console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
// [2, 1, 3, 4]

console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
// [2, 1, 3, 4]

console.log(solution("{{20,111},{111}}"));
// [111, 20]

console.log(solution("{{123}}"));
// [123]

console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
// [3, 2, 4, 1]


