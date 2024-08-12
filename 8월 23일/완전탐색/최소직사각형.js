// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

function solution(sizes) {
  var answer = 0;

  // 큰 값을 width , 작은 값을 heigth 으로 설정
  var walletWidth = 0;
  var walletHeight = 0;

  for (var i = 0; i < sizes.length; i++) {
    const cardWidth = sizes[i][0];
    const cardHeight = sizes[i][1];

    // 두 값중 큰 값을 width에 몰고 , 작은 값을 height 에 몰 수 있도록
    // 큰 값중 최대값 , 작은 값중 최대값을 구함
    if (cardWidth > cardHeight) {
      if (walletWidth < cardWidth) {
        walletWidth = cardWidth;
      }

      if (walletHeight < cardHeight) {
        walletHeight = cardHeight;
      }
    } else {
      if (walletWidth < cardHeight) {
        walletWidth = cardHeight;
      }

      if (walletHeight < cardWidth) {
        walletHeight = cardWidth;
      }
    }
  }

  answer = walletWidth * walletHeight;

  return answer;
}

// 다른 사람의 풀이
function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}

/*
    각각의 값을 먼저 정렬 후 , 구조분해로 한 번에 정의하는 방법이 좋았다. 
*/
