// https://school.programmers.co.kr/learn/courses/30/lessons/86971?language=javascript

function solution(n, wires) {
  var answer = n;

  const graph = Array.from(Array(n + 1), () => []);

  // 그래프 연결
  for (let i = 0; i < wires.length; i++) {
    const [from, to] = wires[i];
    graph[from].push(to);
    graph[to].push(from);
  }

  // 두 점 사이의 연결을 제외한 연결 갯수 확인
  const findLoad = (start, end, n) => {
    let count = 0;
    let queue = [start];
    let visited = Array.from(Array(n + 1), () => false);

    // 방문한 곳을 true 로 전환
    visited[start] = true;

    while (queue.length > 0) {
      const first = queue.shift();

      graph[first].forEach((element) => {
        // 연결점이 아닌곳을 제외한 곳 중 방문하지 않은 곳 확인
        if (element !== end && !visited[element]) {
          visited[element] = true;
          queue.push(element);
        }
      });

      count++;
    }

    return count;
  };

  wires.forEach((element) => {
    const [from, to] = element;
    answer = Math.min(
      answer,
      Math.abs(findLoad(from, to, n) - findLoad(to, from, n))
    );
  });

  return answer;
}
