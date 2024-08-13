// https://school.programmers.co.kr/learn/courses/30/lessons/87946

// 탐험하는 함수
const exploration = (fatigue, dungeons, dungeonCount, countArray) => {
  // 모든 던전을 다 탐험한 경우
  if (dungeons.length < 1) {
    countArray.push(dungeonCount);
    return;
  }

  dungeons.forEach((dungeon, index) => {
    const needFatigue = dungeon[0];
    const useFatigue = dungeon[1];

    // 남은 피로도보다 필요 피로도가 많은 경우, 끝.
    if (needFatigue > fatigue) {
      countArray.push(dungeonCount);
      return;
    }

    const dungeonData = [
      ...dungeons.slice(0, index),
      ...dungeons.slice(index + 1),
    ];

    exploration(
      fatigue - useFatigue,
      dungeonData,
      dungeonCount + 1,
      countArray
    );
  });
};

function solution(k, dungeons) {
  var answer = -1;

  const countArray = [];

  exploration(k, dungeons, 0, countArray);

  // 최대 갯수 return
  return Math.max(...countArray);
}
