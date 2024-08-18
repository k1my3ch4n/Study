// https://school.programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

function solution(number, k) {
  let stack = [];

  let index = 0;

  for (let i of number) {
    // 전부 제거했다면
    if (index >= k) {
      stack.push(i);
      continue;
    }

    // stack 에 본인보다 작은 수가 있는 경우 제거
    // 다만 한계를 넘어가는 경우에는 그대로 넣음
    while (stack.length > 0) {
      const top = stack.at(-1);

      if (i <= top) {
        stack.push(i);
        break;
      } else {
        stack.pop();
        index++;
      }

      if (index >= k) {
        stack.push(i);
        break;
      }
    }

    // stack 이 비었다면
    if (stack.length === 0) {
      stack.push(i);
    }
  }

  return stack.join("").slice(0, number.length - k);
}
