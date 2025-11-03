function solution(phone_book: string[]): boolean {
  // 여기에 코드를 작성하세요!
  const set = new Set(phone_book);

  for (let phone of phone_book) {
    for (let i = 0; i < phone.length; i++) {
      const prefix = phone.substring(0, i);
      if (set.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}

// 테스트
console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false

export default solution;
