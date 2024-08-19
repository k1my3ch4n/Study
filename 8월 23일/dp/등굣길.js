// https://school.programmers.co.kr/learn/courses/30/lessons/42898?language=javascript

function solution(m, n, puddles) {
  var answer = 0;

  // 가로 수 + 1
  const xCount = m + 1;
  // 세로 수 + 1
  const yCount = n + 1;

  // 격자 생성
  let square = Array.from(Array(yCount), () => Array(xCount).fill(0));

  // 물 웅덩이 체크
  for (let [x, y] of puddles) {
    square[y][x] = -1;
  }

  square[1][1] = 1;

  for (var i = 1; i < yCount; i++) {
    for (var j = 1; j < xCount; j++) {
      // 현재 위치
      let now = square[i][j];

      // 물웅덩이인 경우는 넘어감
      if (now < 0) {
        continue;
      }

      // 위에서 내려오는 경우
      if (square[i][j - 1] > 0) {
        now += square[i][j - 1] % 1000000007;
      }

      // 오른쪽으로 가는 경우
      if (square[i - 1][j] > 0) {
        now += square[i - 1][j] % 1000000007;
      }

      square[i][j] = now % 1000000007;
    }
  }

  return square[yCount - 1][xCount - 1] % 1000000007;
}
