// https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

// 노란색의 개수 => width * height
// 갈색의 개수 => 2 * ( width + height ) + 4
// 가로의 길이 => width + 1
// 세로의 길이 => height + 1

function solution(brown, yellow) {
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    const height = i;
    const width = yellow / i;

    const calcBrown = 2 * (width + height + 2);

    if (calcBrown === brown) {
      return [width + 2, height + 2];
    }
  }
}
