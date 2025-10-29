function solution(progresses: number[], speeds: number[]): number[] {
  // 여기에 코드를 작성해주세요!
  const days = []; // 완료 가능일
  for (let i = 0; i < progresses.length; i++) {
    const ramainingDays = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(ramainingDays);
  }

  const answer: number[] = [];
  let count = 1;
  let currentDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= currentDay) {
      count++;
    } else {
      answer.push(count);
      currentDay = days[i];
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}

// 테스트
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
