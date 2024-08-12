// https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

function solution(answers) {
  let people = [];

  // 정답 배열
  let person1 = [1, 2, 3, 4, 5];
  let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 정답 수
  let count = [0, 0, 0];

  // 정답 찾는 로직
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === person1[i % 5]) {
      count[0]++;
    }

    if (answers[i] === person2[i % 8]) {
      count[1]++;
    }

    if (answers[i] === person3[i % 10]) {
      count[2]++;
    }
  }

  // 가장 많이 맞은 값
  const maxValue = Math.max(...count);

  // 최대값인 경우 , 정답에 추가
  for (let j = 0; j < 3; j++) {
    if (count[j] === maxValue) {
      people.push(j + 1);
    }
  }

  return people;
}

// 다른 사람의 풀이

function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

/*
    filter 를 사용한 방법이 좋았음 . filter, map 등을 사용하고 싶음
*/
