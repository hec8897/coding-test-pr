// 하노이의 탑 복습
// n개의 원판을 1번 기둥에서 3번 기둥으로 최소 횟수로 옮기는 방법

function solution(n: number): number[][] {
  function hanoi(n: number, from: number, to: number, via: number): number[][] {
    if (n === 1) {
      return [[from, to]];
    }

    const result: number[][] = [];
    result.push(...hanoi(n - 1, from, via, to)); // 일단 맨밑의 원판이 나올떄 까지 여분으로 옮긴다
    result.push([from, to]);
    result.push(...hanoi(n - 1, via, to, from));

    return result;
  }
  return hanoi(n, 1, 3, 2);
}
