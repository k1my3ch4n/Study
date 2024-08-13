// https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  var answer = [];

  const dictionary = {};

  // dictionary 생성
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    const indexDictionary = {};
    indexDictionary[i] = play;

    if (genre in dictionary) {
      dictionary[genre].count += play;
      dictionary[genre].detail.push(indexDictionary);
    } else {
      dictionary[genre] = {
        count: play,
        detail: [],
      };
      dictionary[genre].detail.push(indexDictionary);
    }
  }

  // 많이 들은 순서대로 정렬
  const dictionaryEntries = Object.entries(dictionary);

  dictionaryEntries.sort((a, b) => b[1].count - a[1].count);

  // 데이터중 큰 값 2개만 정답에 넣기
  dictionaryEntries.forEach((data) => {
    const detail = data[1].detail;

    if (detail.length < 2) {
      answer.push(Number(Object.keys(detail[0])));
    } else {
      detail.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

      answer.push(Number(Object.keys(detail[0])));
      answer.push(Number(Object.keys(detail[1])));
    }
  });

  return answer;
}
