// https://school.programmers.co.kr/learn/courses/30/lessons/43163?language=javascript

// 글자 수 비교 , 1개만 다른 경우
const isDifferentOneWord = (begin, target) => {
  const differentCount = begin
    .split("")
    .filter((word, index) => word !== target[index]).length;

  return differentCount === 1;
};

function solution(begin, target, words) {
  var answer = 0;

  // 단어 안에 target 이 없는 경우
  if (!words.includes(target)) {
    return 0;
  }

  // queue 에 집어넣음
  let queue = [];
  queue.push([begin, words, answer]);

  while (queue.length > 0) {
    const [now, wordArray, answer] = queue.shift();

    // 현재 단어가 target 인 경우 , return
    if (now === target) {
      return answer;
    }

    for (let i = 0; i < wordArray.length; i++) {
      // 단어가 1개만 다른 경우
      if (isDifferentOneWord(now, wordArray[i])) {
        // 해당 단어를 제외한 배열을 만듬
        // 단어와 배열을 교체 후 queue 에 넣음
        const newWords = [...wordArray.slice(0, i), ...wordArray.slice(i + 1)];

        queue.push([wordArray[i], newWords, answer + 1]);
      }
    }
  }

  return answer;
}
