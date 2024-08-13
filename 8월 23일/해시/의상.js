// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
  var answer = 1;

  const dictionary = {};

  // dictionary 생성
  clothes.forEach((each) => {
    const value = each[0];
    const key = each[1];

    if (key in dictionary) {
      dictionary[key].push(value);
    } else {
      dictionary[key] = [];
      dictionary[key].push(value);
    }
  });

  // 개수만 있는 배열을 만듬
  const countValues = Object.values(dictionary).map(
    (clothes) => clothes.length
  );

  // 개수 구하기
  // +1 을 한 이유는 , 예를 들어 모자가 3가지인 경우
  // 1번 모자, 2번 모자, 3번 모자 , 안입기 의 총 4가지가 있기 때문
  // 마지막에 모두 안입은 경우 1을 빼기
  countValues.forEach((value) => {
    answer *= value + 1;
  });

  return answer - 1;
}
