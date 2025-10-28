function solution(n: number, lost: number[], reserve: number[]): number {
  // 학생들의 체육복 상태를 저장할 배열 (1: 기본, 0: 도난, 2: 여벌)
  const students = Array(n).fill(1);

  // 도난당한 학생 처리
  lost.forEach((l) => students[l - 1]--);

  // 여벌 체육복 가진 학생 처리
  reserve.forEach((r) => students[r - 1]++);

  // 체육복 빌려주기
  for (let i = 0; i < n; i++) {
    if (students[i] === 0) {
      // 앞번호 학생이 여벌이 있는 경우
      if (i > 0 && students[i - 1] === 2) {
        students[i]++;
        students[i - 1]--;
      }
      // 뒷번호 학생이 여벌이 있는 경우
      else if (i < n - 1 && students[i + 1] === 2) {
        students[i]++;
        students[i + 1]--;
      }
    }
  }

  // 체육수업을 들을 수 있는 학생 수 계산
  return students.filter((s) => s > 0).length;
}
