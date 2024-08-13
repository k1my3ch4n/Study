// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  // 정렬
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  // 같지 않으면 다른 값이므로 , return
  for (let i = 0; i < completion.length; i++) {
    if (sortedParticipant[i] !== sortedCompletion[i]) {
      return sortedParticipant[i];
    }
  }

  return sortedParticipant[completion.length];
}
