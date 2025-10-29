function solution(progresses: number[], speeds: number[]): number[] {
  const days = [];
  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let count = 1;
  let currentDay = days[0];
  const answer = [];

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
