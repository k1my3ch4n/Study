// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  var answer = true;

  // 정렬
  phone_book.sort();

  // string 특성 상 , 바로 다음 값이랑만 비교하면 됨

  for (let i = 0; i < phone_book.length - 1; i++) {
    const preNum = phone_book[i];

    if (phone_book[i + 1].startsWith(preNum)) {
      return false;
    }
  }

  return answer;
}
