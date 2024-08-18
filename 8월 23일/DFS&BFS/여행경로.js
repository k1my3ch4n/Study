// https://school.programmers.co.kr/learn/courses/30/lessons/43164?language=javascript

// 도착지 계산
const nextDestination = (origin, load) => {
  const [from, to] = load;

  if (origin === from) {
    return to;
  }

  return false;
};

const firstOrigin = "ICN";

function solution(tickets) {
  let queue = [];
  // 첫 위치, 경로 정렬해서 넣음
  queue.push([firstOrigin, tickets.sort(), [firstOrigin]]);

  while (queue.length > 0) {
    const [origin, loads, path] = queue.shift();

    // 모든 경로를 다 돈 경우
    if (loads.length === 0) {
      return path;
    }

    for (let i = 0; i < loads.length; i++) {
      // 다음 도착지 확인
      const destination = nextDestination(origin, loads[i]);

      // 도착지가 있다면
      if (destination) {
        const newLoads = [...loads.slice(0, i), ...loads.slice(i + 1)];

        queue.push([destination, newLoads, [...path, destination]]);
      }
    }
  }
}
