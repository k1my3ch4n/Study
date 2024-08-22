function solution(today, terms, privacies) {
  var answer = [];

  // 오늘 날짜
  const [year, month, day] = today.split(".").map(Number);

  // 날짜를 숫자로 계산
  const todayDate = year * 12 * 28 + month * 28 + day;

  let termsMap = new Map();

  // 기간 map 생성
  terms.forEach((term) => {
    const [type, period] = term.split(" ");

    termsMap.set(type, Number(period));
  });

  for (let i = 0; i < privacies.length; i++) {
    const [term, type] = privacies[i].split(" ");

    const [termYear, termMonth, termDay] = term.split(".").map(Number);

    // 기간을 숫자로 변환
    let termDate = termYear * 12 * 28 + termMonth * 28 + termDay;

    // 달 숫자로 더하기
    termDate += termsMap.get(type) * 28 - 1;

    if (termDate < todayDate) {
      answer.push(i + 1);
    }
  }

  return answer;
}
