// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s) {
  var answer = true;

  let bracketStack = [];

  for (let bracket of s) {
    // 비어있는 경우 push
    if (bracketStack.length < 1) {
      bracketStack.push(bracket);
    }
    // 여는 괄호인 경우 push
    else if (bracket === "(") {
      bracketStack.push(bracket);
    }
    // 맨 마지막이 여는 괄호 , 현재가 닫는 괄호인 경우 제거
    else if (bracketStack.at(-1) === "(" && bracket === ")") {
      bracketStack.pop();
    }
  }

  // 괄호가 남아있으면, 짝이 없는 경우임
  return !(bracketStack.length > 0);
}
