// 간선으로 map 생성
const getInfo = (edges) => {
  const info = edges.reduce((map, key) => {
    if (!map.has(key[0])) {
      map.set(key[0], [1, 0]);
    } else {
      const [give, receive] = map.get(key[0]);
      map.set(key[0], [give + 1, receive]);
    }
    if (!map.has(key[1])) {
      map.set(key[1], [0, 1]);
    } else {
      const [give, receive] = map.get(key[1]);
      map.set(key[1], [give, receive + 1]);
    }
    return map;
  }, new Map());
  return info;
};

// 그래프를 찾음
const findGraphs = (map) => {
  const graphCount = Array(4).fill(0);

  for (const [key, data] of map) {
    const [give, recieve] = data;

    // 나가는게 2개 이상 , 들어오는게 없다면 -> 새로 만든 정점
    if (give >= 2 && recieve === 0) {
      graphCount[0] = key;
    }
    // 막대 그래프의 마지막 점은 나가는게 없음
    else if (give === 0) {
      graphCount[2]++;
    }
    // 8자의 가운데는 2개가 들어오고 2개가 나감
    else if (give >= 2 && recieve >= 2) {
      graphCount[3]++;
    }
  }

  // 도넛 갯수 = 새로 만든 정점에서 나가는 갯수 - 막대 갯수 - 8자 갯수
  graphCount[1] = map.get(graphCount[0])[0] - graphCount[2] - graphCount[3];

  return graphCount;
};

function solution(edges) {
  const infoMap = getInfo(edges);
  const answer = findGraphs(infoMap);

  return answer;
}
