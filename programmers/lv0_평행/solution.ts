/**
 * 프로그래머스 Lv.0 - 평행
 *
 * 문제: 점 네 개의 좌표를 담은 이차원 배열 dots가 주어집니다.
 * 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return
 *
 * 제한사항:
 * - dots의 길이 = 4
 * - dots의 원소는 [x, y] 형태이며 x, y는 정수
 * - 0 ≤ x, y ≤ 100
 * - 서로 다른 두개 이상의 점이 겹치는 경우는 없음
 * - 두 직선이 겹치는 경우(일치하는 경우)에도 1을 return
 * - 임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않음
 */

function solution(dots: number[][]): number {
  // 여기에 코드를 작성하세요!

  const getSlope = (point1: number[], point2: number[]): number => {
    const [x1, y1] = point1;
    const [x2, y2] = point2;

    return (y2 - y1) / (x2 - x1);
  };

  if (getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])) {
    return 1;
  }

  if (getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])) {
    return 1;
  }
  if (getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])) {
    return 1;
  }

  return 0;
}

// 테스트 케이스
console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 1
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
); // 0
