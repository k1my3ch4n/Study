// target 이 되는 수가 배열에 있는지 확인
const findTarget = (cards, target) => {
  const length = cards.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (cards[i] + cards[j] == target) {
        return [cards[i], cards[j]];
      }
    }
  }

  return [];
};

function solution(coin, cards) {
  let round = 1;
  const length = cards.length;

  // 내 카드뭉치
  let myCard = cards.slice(0, cards.length / 3);

  // 차례로 받을 카드뭉치
  let cardQueue = cards.slice(cards.length / 3);

  // 저장해 둘 카드뭉치
  let saveQueue = [];

  while (true) {
    // 더이상 카드뭉치에 카드가 없다면
    if (cardQueue.length === 0) {
      return round;
    }

    // coin이 0개인 경우
    if (coin === 0) {
      // queue 에서 꺼내오지 않음
      const noCoinTargetArray = findTarget(myCard, length + 1);

      if (noCoinTargetArray.length === 0) {
        return round;
      }

      myCard = myCard.filter(
        (element) =>
          element !== noCoinTargetArray[0] && element !== noCoinTargetArray[1]
      );

      round++;

      continue;
    }

    // queue 에서 꺼내옴
    saveQueue = [...saveQueue, ...cardQueue.slice(0, 2)];
    cardQueue = cardQueue.slice(2);

    const targetArray = findTarget([...myCard, ...saveQueue], length + 1);

    // 타겟이 되지 않는 경우
    if (targetArray.length === 0) {
      return round;
    }

    // 각각에서 원소 제거
    for (let i = 0; i < 2; i++) {
      if (myCard.includes(targetArray[i])) {
        myCard = myCard.filter((element) => element !== targetArray[i]);
      }

      if (saveQueue.includes(targetArray[i])) {
        saveQueue = saveQueue.filter((element) => element !== targetArray[i]);
        coin--;
      }
    }

    // 코인이 0보다 작아지는 경우 , 마무리
    if (coin < 0) {
      return round;
    }

    round++;
  }
}
