// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(citations) {
  var answer = 0;

  // 숫자 순 정렬
  const sortedCitations = citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    const overCitations = citations.length - i;

    // 인용된 횟수보다 편수가 많은 경우
    if (overCitations >= sortedCitations[i]) {
      answer = sortedCitations[i];
    }
    // 인용된 횟수가 편수보다 많은 경우, 현재 정답보다 큰 경우만 인정
    else if (answer < overCitations) {
      answer = overCitations;
    }
  }

  return answer;
}
