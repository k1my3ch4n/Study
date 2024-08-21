// https://school.programmers.co.kr/learn/courses/30/lessons/43105?language=javascript

function solution(triangle) {
  var answer = 0;

  for (let i = 1; i < triangle.length; i++) {
    const floor = triangle[i];

    for (let j = 0; j < floor.length; j++) {
      // 첫 번째 원소
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][j];
        continue;
      }

      // 마지막 원소
      if (j === floor.length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
        continue;
      }

      // 위에서 내려오는 경우 , 두 값 중 큰 값을 더함
      triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
    }
  }

  // 마지막 원소 중 가장 큰 값 return
  return Math.max(...triangle.at(-1));
}
