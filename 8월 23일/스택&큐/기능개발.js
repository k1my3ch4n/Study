// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
  var answer = [];

  let dateArr = [];

  // 남은 일자 계산
  for (let i = 0; i < progresses.length; i++) {
    const progress = progresses[i];
    const speed = speeds[i];

    dateArr.push(Math.ceil((100 - progress) / speed));
  }

  let date = 0;

  while (date < dateArr.length) {
    const deployDate = dateArr[date];
    let deployCount = 1;

    date++;

    // 현재 배포일에 이후 작업들이 완료되어있는 경우 , count 증가시킴
    while (deployDate >= dateArr[date]) {
      date++;
      deployCount++;
    }
    // 완료된 작업의 수를 한번에 push
    answer.push(deployCount);
  }

  return answer;
}
