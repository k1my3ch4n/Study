// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
  var answer = [];

  commands.forEach((command) => {
    // 구조 분해 할당
    const [start, end, index] = command;

    // 자른 후 정렬
    const newArray = array.slice(start - 1, end).sort((a, b) => a - b);

    answer.push(newArray[index - 1]);
  });

  return answer;
}
