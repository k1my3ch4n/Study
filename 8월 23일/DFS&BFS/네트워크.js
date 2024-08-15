// https://school.programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

const dfs = (network, number, visitedNode) => {
  let visited = [];
  let nodes = [];

  nodes.push(number);

  while (nodes.length !== 0) {
    const node = nodes.shift();

    // 이번에 방문하지 않았다면
    if (!visited.includes(node)) {
      // 전체 순회
      for (let i = 0; i < network[node].length; i++) {
        // 연결되어 있다면 , 확인
        if (network[node][i] === 1) {
          visitedNode.push(i);
          nodes = [i, ...nodes];
        }
      }
    }

    // 해당 노드는 방문 완료 기록
    visited.push(node);
  }
};

function solution(n, computers) {
  var answer = 0;

  let visited = [];

  // 전체 순회
  for (let i = 0; i < n; i++) {
    // 방문하지 않았다면
    if (!visited.includes(i)) {
      // 방문하면서 , 방문 체크 .
      // 한 방문에는 1개의 네트워크가 되므로
      // answer 증가
      dfs(computers, i, visited);
      answer++;
    }
  }

  return answer;
}
