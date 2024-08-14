// https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

function solution(arr) {
  var answer = [];

  arr.forEach((num) => {
    // 비어있는 경우, 넣기
    if (answer.length < 1) {
      answer.push(num);
    }
    // 정답의 마지막 원소와 같이 않은 경우 push
    else if (answer[answer.length - 1] !== num) {
      answer.push(num);
    }
  });

  return answer;
}
