/*
    뒤에서부터 빼는 곳에서 길이를 잼
*/

function solution(cap, n, deliveries, pickups) {
  var answer = 0;

  // 배달 / 수거가 남아있는 경우 반복
  while (deliveries.length > 0 || pickups.length > 0) {
    let delCap = cap;
    let picCap = cap;

    // 뒤에 0이 있는 경우 , 제거
    while (deliveries.at(-1) === 0) {
      deliveries.pop();
    }

    while (pickups.at(-1) === 0) {
      pickups.pop();
    }

    // 최대로 가야하는 거리 * 2 (왕복)
    answer += Math.max(deliveries.length, pickups.length) * 2;

    // 뒤에서부터 거리를 뺌
    while (deliveries.length > 0) {
      let delTop = deliveries.pop();

      if (delTop <= delCap) {
        delCap -= delTop;
      } else {
        deliveries.push(delTop - delCap);
        break;
      }
    }

    while (pickups.length > 0) {
      let picTop = pickups.pop();

      if (picTop <= picCap) {
        picCap -= picTop;
      } else {
        pickups.push(picTop - picCap);
        break;
      }
    }
  }

  return answer;
}
