/**
 * [Lv.2] 구명보트
 *
 * 🎯 문제: 구명보트를 최소한으로 사용하여 모든 사람 구출하기
 *
 * 📌 조건:
 * - 구명보트는 한 번에 최대 2명만 탈 수 있음
 * - 구명보트 무게 제한이 있음
 *
 * 💡 접근법:
 * 1. 배열을 정렬 (오름차순)
 * 2. 투 포인터 사용 (가장 가벼운 사람 + 가장 무거운 사람)
 * 3. 두 사람을 태울 수 있으면 같이, 아니면 무거운 사람만
 *
 * ⏰ 시간 복잡도: O(n log n) - 정렬
 * 💾 공간 복잡도: O(1)
 */

function solution(people: number[], limit: number): number {
  const peoples = people.sort((a, b) => a - b);
  let boats = 0;
  let left = 0;
  let right = peoples.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }

    boats++;
  }

  return boats;
}

// 테스트 케이스
console.log("=== 구명보트 테스트 ===\n");

console.log("테스트 1:");
console.log("people: [70, 50, 80, 50], limit: 100");
console.log("예상 결과: 3");
console.log("실제 결과:", solution([70, 50, 80, 50], 100));
console.log();

console.log("테스트 2:");
console.log("people: [70, 80, 50], limit: 100");
console.log("예상 결과: 3");
console.log("실제 결과:", solution([70, 80, 50], 100));
console.log();

console.log("테스트 3 (추가):");
console.log("people: [50, 50, 50, 50], limit: 100");
console.log("예상 결과: 2");
console.log("실제 결과:", solution([50, 50, 50, 50], 100));
console.log();

console.log("테스트 4 (추가):");
console.log("people: [100, 100, 100], limit: 100");
console.log("예상 결과: 3 (모두 혼자)");
console.log("실제 결과:", solution([100, 100, 100], 100));

/**
 * 💡 문제 해결 과정
 *
 * Step 1: 정렬
 * - 가벼운 사람부터 무거운 사람 순서로 정렬
 * - people.sort((a, b) => a - b)
 *
 * Step 2: 투 포인터
 * - left = 0 (가장 가벼운)
 * - right = people.length - 1 (가장 무거운)
 *
 * Step 3: 그리디 선택
 * - 가벼운 + 무거운 <= limit?
 *   YES: 둘 다 태우기 (left++, right--)
 *   NO: 무거운 사람만 (right--)
 *
 * Step 4: 반복
 * - left <= right 동안 반복
 * - 매번 보트 개수 +1
 */
