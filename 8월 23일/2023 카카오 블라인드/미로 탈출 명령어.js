// 불가능한지 확인
const isImposible = (x, y, r, c, k) => {
  const distance = k - (Math.abs(x - r) + Math.abs(y - c));

  return distance < 0 || distance % 2 !== 0;
};

function solution(n, m, x, y, r, c, k) {
  let answer = "z".repeat(k);

  if (isImposible(x, y, r, c, k)) {
    return "impossible";
  }

  // move
  let move = [
    [1, 0], // d
    [0, -1], // l
    [0, 1], // r
    [-1, 0], // u
  ];

  // move string
  let moveStr = {
    0: "d",
    1: "l",
    2: "r",
    3: "u",
  };

  const findPath = (moveLength, nowY, nowX, path, dist) => {
    // k 이상 이동한 경우, return
    if (moveLength > k) {
      return;
    }

    // 거리가 k 보다 커진 경우, return
    if (dist > k) {
      return;
    }

    // k 번째에 목적지에 도착한 경우
    if (moveLength === k && nowY === r && nowX === c) {
      if (answer > path) {
        answer = path;
        return;
      }
    }

    // answer 가 초기값이 아닌경우 return
    if (answer !== "z".repeat(k)) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      let dy = nowY + move[i][0];
      let dx = nowX + move[i][1];

      // 미로 내부에 있는 경우
      if (dy <= n && dy > 0 && dx <= m && dx > 0) {
        findPath(
          moveLength + 1,
          dy,
          dx,
          path + moveStr[i],
          Math.abs(dy - r) + Math.abs(dx - c) + moveLength + 1
        );
      }
    }
  };

  findPath(0, x, y, "", k);

  if (answer === "z".repeat(k)) {
    return "impossible";
  }

  return answer;
}
