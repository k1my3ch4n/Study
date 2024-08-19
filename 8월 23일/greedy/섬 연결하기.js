// 크루스칼

// https://school.programmers.co.kr/learn/courses/30/lessons/42861
// 크루스칼 알고리즘

function solution(n, costs) {
  var answer = 0;

  // 연결된 노드의 head 를 나타냄
  const head = [];

  for (let i = 0; i < n; i++) {
    head.push(i);
  }

  // 비용이 낮은 순서대로 정렬
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);

  // head 를 찾는 과정
  const find = (index) => {
    // head가 다르다면, 올라가면서 head를 찾음
    if (head[index] !== index) {
      head[index] = find(head[index]);
    }

    return head[index];
  };

  const union = (x, y) => {
    // head 를 찾음
    const xHead = find(x);
    const yHead = find(y);

    // head가 다르다면 , head를 변경해준다
    if (xHead !== yHead) {
      head[yHead] = xHead;
    }
  };

  for (let [from, to, cost] of costs) {
    // head가 다른 경우 , 연결후 비용 추가
    if (find(from) !== find(to)) {
      union(from, to);
      answer += cost;
    }
  }

  return answer;
}
