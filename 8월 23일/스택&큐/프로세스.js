// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
  var answer = 0;

  let queueIndex = 0;

  while (true) {
    // 최대 우선순위 값 찾기
    const maxPriority = Math.max(...priorities);

    // 최대 우선순위 값과 같다면
    if (priorities[queueIndex] === maxPriority) {
      // 찾고자 하는 위치라면 return
      if (queueIndex === location) {
        answer++;
        return answer;
      }
      // 찾고자 하는 위치가 아니라면 , -1로 바꾸고 넘김
      else {
        priorities[queueIndex] = -1;
        answer++;
      }
    }
    // 최대 우선순위 값과 다르다면
    else {
      queueIndex++;

      // index 가 범위를 벗어난 경우
      if (queueIndex >= priorities.length) {
        queueIndex = 0;
      }
    }
  }
}
