// 완전탐색으로는 실패
const findLoads = (now, columnLength, rowLength, map, count, output) => {
  let isLast = false;

  const [column, row] = now;

  if (row === rowLength - 1 && column === columnLength - 1) {
    output.push(count);
    return;
  }

  // 아래쪽 1칸
  if (column + 1 < columnLength && map[column + 1][row] === 1) {
    isLast = true;
    map[column][row] = 0;
    findLoad(
      [column + 1, row],
      columnLength,
      rowLength,
      map,
      count + 1,
      output
    );
  }

  // 오른쪽 1칸
  if (row + 1 < rowLength && map[column][row + 1] === 1) {
    isLast = true;
    map[column][row] = 0;
    findLoad(
      [column, row + 1],
      columnLength,
      rowLength,
      map,
      count + 1,
      output
    );
  }

  // 위쪽 1칸
  if (column - 1 >= 0 && map[column - 1][row] === 1) {
    isLast = true;
    map[column][row] = 0;
    findLoad(
      [column - 1, row],
      columnLength,
      rowLength,
      map,
      count + 1,
      output
    );
  }

  // 오른쪽 1칸
  if (row - 1 >= 0 && map[column][row - 1] === 1) {
    isLast = true;
    map[column][row] = 0;
    findLoad(
      [column, row - 1],
      columnLength,
      rowLength,
      map,
      count + 1,
      output
    );
  }

  if (!isLast) {
    output.push(-1);
  }
};

function solution(maps) {
  var answer = [];

  const rowLength = maps[0].length;
  const columnLength = maps.length;

  findLoads([0, 0], columnLength, rowLength, maps, 1, answer);

  return Math.max(...answer);
}

// BFS 로는 성공
// https://school.programmers.co.kr/learn/courses/30/lessons/1844?language=javascript

// 길 찾는 함수
const findLoad = (maps, columnLength, rowLength) => {
  // 아래쪽 , 오른쪽 , 왼쪽, 위쪽 이동
  const move = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  // BFS 탐색
  const queue = [[0, 0, 1]];
  maps[0][0] = 0;

  while (queue.length > 0) {
    const [column, row, distance] = queue.shift();

    // 목적지라면 , 출력
    if (column === columnLength - 1 && row === rowLength - 1) {
      return distance;
    }

    for (let [columnMove, rowMove] of move) {
      // 이동한 좌표
      let newColumn = column + columnMove;
      let newRow = row + rowMove;

      // 이동 좌표가 지도 내부이면서 , 1인 경우
      // 이동 후 0으로 만듬
      if (
        newColumn >= 0 &&
        newColumn < columnLength &&
        newRow >= 0 &&
        newRow < rowLength &&
        maps[newColumn][newRow] === 1
      ) {
        queue.push([newColumn, newRow, distance + 1]);
        maps[newColumn][newRow] = 0;
      }
    }
  }

  return -1;
};

function solution(maps) {
  const columnLength = maps.length;
  const rowLength = maps[0].length;

  return findLoad(maps, columnLength, rowLength);
}
