// 할인율 조합을 만드는 함수
const makeDiscountArr = (origin, discountArr, size, output) => {
  // 다 만들었다면
  if (origin.length === size) {
    output.push(origin);
    return;
  }

  for (let discount of discountArr) {
    makeDiscountArr([...origin, discount], discountArr, size, output);
  }
};

function solution(users, emoticons) {
  var answer = [0, 0];
  const discountArr = [];
  const originDiscountArr = [10, 20, 30, 40];
  // 할인율 생성
  makeDiscountArr([], originDiscountArr, emoticons.length, discountArr);

  // 할인율을 돌면서
  discountArr.forEach((discount) => {
    const discountEmoticonsArr = Array.from({ length: discount.length }, () =>
      Array(2).fill(0)
    );

    // [할인율 , 할인가격] 배열 생성
    for (let i = 0; i < discount.length; i++) {
      discountEmoticonsArr[i][0] = discount[i];
      discountEmoticonsArr[i][1] = (emoticons[i] * (100 - discount[i])) / 100;
    }

    let priceSum = 0;
    let subscribeUser = 0;

    // 유저를 돌면서
    users.forEach(([discountRate, maximum]) => {
      let userPriceSum = 0;

      // 할인율이 더 큰 경우 , 구매
      discountEmoticonsArr.forEach(([rate, price]) => {
        if (discountRate <= rate) {
          userPriceSum += price;
        }
      });

      // 한계가격을 넘는 경우 , 구독으로 전환
      if (userPriceSum >= maximum) {
        subscribeUser++;
        userPriceSum = 0;
      }

      priceSum += userPriceSum;
    });

    // 구독자가 더 많은 경우
    if (subscribeUser > answer[0]) {
      answer[0] = subscribeUser;
      answer[1] = priceSum;
    }
    // 구독자는 같은데 , 판매가가 더 많은 경우
    else if (subscribeUser === answer[0] && priceSum > answer[1]) {
      answer[1] = priceSum;
    }
  });

  return answer;
}
