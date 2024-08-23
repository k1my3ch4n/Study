// https://school.programmers.co.kr/learn/courses/30/lessons/84512

const AEIOU = ["A", "E", "I", "O", "U"];

// dictionary 생성, 조합
const getDictionary = (wordArray, output) => {
  output.add(wordArray.join(""));

  if (wordArray.length >= 5) {
    return;
  }

  AEIOU.forEach((word) => {
    getDictionary([...wordArray, word], output);
  });
};

function solution(word) {
  const dictionary = new Set([]);

  getDictionary([], dictionary);

  // dictionary 정렬
  const sortedDictionary = [...dictionary].sort();

  // 정렬한 값에서 특정 단어 찾기 , 처음에 null 이 들어가 있어서 굳이 +1 할 필요 없음
  return sortedDictionary.indexOf(word);
}
