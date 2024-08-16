// https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

function solution(numbers, target) {
  let calcCount = 0;
  let numberArray = [];

  while (calcCount < numbers.length) {
    // 다음 숫자
    const nextNumber = numbers[calcCount];

    // 처음 시작하는 경우, 배열에 넣음
    if (numberArray.length === 0) {
      numberArray.push(nextNumber);
      numberArray.push(-nextNumber);
      calcCount++;
      continue;
    }

    // 배열에 존재하는 경우 , 계산해서 넣음
    const newArray = [];

    numberArray.forEach((number) => {
      // 각각 더하고 빼기를 진행해서 새 배열을 만듬
      newArray.push(number + nextNumber);
      newArray.push(number - nextNumber);
    });

    numberArray = newArray;

    calcCount++;
  }

  // 만들어진 수 중 target 과 같은 갯수
  return numberArray.filter((element) => element === target).length;
}
