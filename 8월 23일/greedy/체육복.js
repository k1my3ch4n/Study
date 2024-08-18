// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
  let answer = Array(n).fill(1);

  // 잃고 얻은 갯수 설정
  for (let i of lost) {
    answer[i - 1]--;
  }

  for (let j of reserve) {
    answer[j - 1]++;
  }

  // 여유분이 있는 경우 , 뒤 -> 앞 순으로 나눠줌
  for (let k = 0; k < n; k++) {
    if (answer[k] == 0 && answer[k - 1] > 1) {
      answer[k]++;
      answer[k - 1]--;
    }

    if (answer[k] == 0 && answer[k + 1] > 1) {
      answer[k]++;
      answer[k + 1]--;
    }
  }

  return answer.filter((key) => key > 0).length;
}
