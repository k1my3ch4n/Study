// https://school.programmers.co.kr/learn/courses/30/lessons/42884?language=javascript

function solution(routes) {
  var answer = 1;

  // 빨리 들어온 순서대로 정렬
  routes.sort((a, b) => a[0] - b[0]);

  // 처음으로 들어온 차량이 나가는 좌표
  let out = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    // 다음으로 들어온 차량의 in/out 좌표
    const [roadIn, roadOut] = routes[i];

    // 차량이 나간 후에 다음 차량이 들어온 경우
    // 카메라를 설치하고 , 다음 차량의 나가는 좌표를 out 좌표로 지정
    if (roadIn > out) {
      answer++;
      out = roadOut;
    }

    // 차량이 나가기 전에 다음 차량이 들어왔다 나가는 경우
    // 다음 차량의 나가는 부분을 out 좌표로 지정
    if (roadOut < out) {
      out = roadOut;
    }
  }

  return answer;
}
