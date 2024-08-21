// https://school.programmers.co.kr/learn/courses/30/lessons/42895

function solution(N, number) {
  // 횟수마다 저장할 수 있는 배열을 만듬
  // set 사용으로 중복 제거
  let numberArray = Array.from(Array(9), () => new Set());

  for (let i = 1; i <= 8; i++) {
    // 111,333 등의 숫자 생성
    numberArray[i].add(Number(String(N).repeat(i)));

    // 1부터 ~ i - 1 까지
    // i 개 생성을 위해서는 (j개 사용 + i-j 개 사용)
    for (let j = 1; j < i; j++) {
      for (const num1 of numberArray[j]) {
        for (const num2 of numberArray[i - j]) {
          // j 개 사용 , i - j 개 사용의 사칙연산을 구함
          const plus = num1 + num2;
          const min = num1 - num2;
          const mul = num1 * num2;
          const div = Math.floor(num1 / num2);

          numberArray[i].add(plus);
          numberArray[i].add(min);
          numberArray[i].add(mul);
          numberArray[i].add(div);
        }
      }
    }

    // 만약 해당 사용에 원하는 정답이 있다면
    if (numberArray[i].has(number)) {
      return i;
    }
  }

  // 8번이 했는데도 나오지 않는다면
  return -1;
}
