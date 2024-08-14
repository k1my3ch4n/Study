// 효율성 문제
function solution(prices) {
  const length = prices.length;

  var answer = new Array(length).fill(0);

  let stack = [];

  let index = 0;

  while (index < length) {
    const dictionary = {};

    dictionary[index] = prices[index];

    if (stack.length < 1) {
      stack.push(dictionary);
      index++;
      continue;
    }

    while (true) {
      if (stack.length < 1) {
        break;
      }

      const stackTopPrice = Object.values(stack.at(-1));

      if (stackTopPrice > prices[index]) {
        const stackTop = stack.pop();

        const stackTopIndex = Number(Object.keys(stackTop));

        answer[stackTopIndex] = index - stackTopIndex;
      } else {
        break;
      }
    }

    stack.push(dictionary);

    index++;
  }

  while (true) {
    if (stack.length < 1) {
      break;
    }

    const stackTop = stack.pop();

    const stackTopIndex = Number(Object.keys(stackTop));

    answer[stackTopIndex] = index - stackTopIndex - 1;
  }

  return answer;
}
