/*
    선물을 주고 받은 횟수 기록해야 함
    선물 지수 기록해야 함 
    -> 2차원 배열로 기록
*/

function solution(friends, gifts) {
  var answer = 0;

  // 친구들의 수
  const friendsCount = friends.length;

  // 선물 지수
  const giftIndex = Array.from({ length: friendsCount }, () => 0);

  // 다음달 선물을 주고받아야 하는 수
  const giftCount = Array.from({ length: friendsCount }, () => 0);

  // 선물을 주고받은 배열
  const giftArray = Array.from({ length: friendsCount }, () =>
    Array.from({ length: friendsCount }, () => 0)
  );

  // 가로 : 선물을 준 사람
  // 세로 : 선물을 받은 사람
  for (let gift of gifts) {
    const [from, to] = gift.split(" ");

    // 선물을 주고 받은 사람들의 index
    const fromIndex = friends.indexOf(from);
    const toIndex = friends.indexOf(to);

    // 선물 지수 증감
    giftIndex[fromIndex]++;
    giftIndex[toIndex]--;

    giftArray[fromIndex][toIndex]++;
  }

  for (let i = 0; i < friendsCount; i++) {
    for (let j = 0; j < i; j++) {
      // 본인한테 주고받은 경우 제외
      if (i == j) {
        continue;
      }

      // i 가 j 에게 선물을 적게 준 경우 , j가 받음
      if (giftArray[i][j] < giftArray[j][i]) {
        giftCount[j]++;
      }

      // j 가 i 에게 선물을 적게 준 경우 , i가 받음
      if (giftArray[i][j] > giftArray[j][i]) {
        giftCount[i]++;
      }

      // 주고받은 횟수가 같은 경우
      if (giftArray[i][j] === giftArray[j][i]) {
        // 선물 코드가 큰 쪽이 받음
        if (giftIndex[i] > giftIndex[j]) {
          giftCount[i]++;
        }

        if (giftIndex[i] < giftIndex[j]) {
          giftCount[j]++;
        }
      }
    }
  }

  return Math.max(...giftCount);
}
