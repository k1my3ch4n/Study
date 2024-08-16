// 완전탐색으로는 실패
const findLoad = (now, columnLength, rowLength, map, count, output) => {
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

  findLoad([0, 0], columnLength, rowLength, maps, 1, answer);

  return Math.max(...answer);
}
