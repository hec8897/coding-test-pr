# 코딩 테스트 연습 & 취업 준비 📚

TypeScript 기반 코딩 테스트 문제 풀이 및 학습 일지

## 📌 목표

- 매일 꾸준히 알고리즘 문제 풀이
- TypeScript로 문제 해결 능력 향상
- 취업 준비를 위한 체계적인 학습

## 🗂️ 폴더 구조

```
coding-test-pr/
├── programmers/      # 프로그래머스 문제
├── baekjoon/         # 백준 문제
├── leetcode/         # 리트코드 문제
├── algorithms/       # 알고리즘별 정리
├── data-structures/  # 자료구조별 정리
└── notes/            # 학습 노트 및 팁
```

## 📊 진행 상황

- 총 풀이 문제: 1개
- 현재 연속 학습일: 1일

## 📝 학습 일지

### 2025년 10월

#### 2025-10-25 (금)

- **오늘의 목표**: 코딩테스트 저장소 세팅 및 첫 문제 풀기
- **풀이한 문제**:
  - ✅ [프로그래머스 Lv.0] 대소문자 바꾸기
- **새롭게 배운 것**:
  - JavaScript/TypeScript에서 대소문자 판별: `char === char.toUpperCase()`
  - `.join('')`에 빈 문자열 전달로 콤마 없이 결합
  - 메서드 체이닝으로 가독성 향상
  - 삼항 연산자로 if-else 간결하게 작성
- **어려웠던 점**:
  - 처음에 `.join()`의 기본값이 콤마라는 걸 몰라서 `.replaceAll()`로 제거했었음
  - 대소문자 판별 메서드가 없어서 약간 헤맸지만, 변환 후 비교하는 방법으로 해결!
- **느낀 점**:
  - "깔끔한 코드"는 짧은 코드가 아니라 읽기 쉬운 코드라는 것을 깨달음
  - 과도한 최적화보다 가독성이 더 중요!
- **내일 계획**: Lv.0 or Lv.1 문제 하나 더 풀어보기

---

<!-- 아래에 매일 일지를 추가하세요 -->

## 🛠️ 개발 환경 설정

### TypeScript 설정

```bash
# Node.js 및 TypeScript 설치
npm install -g typescript ts-node

# 프로젝트 초기화 (필요시)
npm init -y
npm install --save-dev typescript @types/node

# tsconfig.json 생성
tsc --init
```

### 추천 VSCode 확장 프로그램

- TypeScript 지원
- ESLint
- Prettier
- Code Runner

## 📚 학습 자료

- [프로그래머스](https://programmers.co.kr/)
- [백준 온라인 저지](https://www.acmicpc.net/)
- [LeetCode](https://leetcode.com/)

## 💡 팁

- 문제를 풀기 전에 시간복잡도를 먼저 생각하기
- 테스트 케이스를 직접 만들어보기
- 풀이 후 다른 사람의 코드 참고하기
- 같은 문제를 일정 시간 후에 다시 풀어보기
