/**
 * 프로그래머스 Lv.0 - 다음에 올 숫자
 *
 * 문제: 등차수열 혹은 등비수열 common이 주어질 때,
 * 마지막 원소 다음으로 올 숫자를 return하세요.
 */

function solution(common: number[]): number {
  // 여기에 코드를 작성하세요!
  const diff1 = common[1] - common[0];
  const diff2 = common[2] - common[1];

  if (diff1 === diff2) {
    // 이경우 등차 수열?
    return common[common.length - 1] + diff1;
  } else {
    // 아닌 경우 등비수열
    const ratio = common[1] / common[0];
    return common[common.length - 1] * ratio;
  }
}

// 테스트 케이스
console.log(solution([1, 2, 3, 4])); // 5 (등차수열, 공차=1)
console.log(solution([2, 4, 8])); // 16 (등비수열, 공비=2)
console.log(solution([3, 6, 9, 12])); // 15 (등차수열, 공차=3)
console.log(solution([5, 10, 15, 20, 25])); // 30 (등차수열, 공차=5)
console.log(solution([1, 2, 4, 8])); // 16 (등비수열, 공비=2)
