// https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

function solution(people, limit) {
  var answer = 0;

  // 낮은 -> 높은 순서로 정렬
  const sortedPeople = people.sort((a, b) => a - b);

  let index = 0;

  while (sortedPeople.length > index) {
    // 무거운 사람
    const fat = sortedPeople.pop();
    // 가벼운 사람
    const thin = sortedPeople[index];

    // 합해서 보트에 태울 수 있다면 , 태웠다고 가정하고 index 증가
    if (fat + thin <= limit) {
      index++;
    }

    answer++;
  }

  return answer;
}
