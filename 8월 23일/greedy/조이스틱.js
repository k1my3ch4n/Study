// https://school.programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

function solution(name) {
  const aCharCode = "A".charCodeAt();
  const zCharCode = "Z".charCodeAt() + 1;

  var answer = 0;

  let leftRight = name.length - 1;

  name.split("").forEach((word, index) => {
    // 단어의 코드 , 상하 움직임으로
    const upDown = word.charCodeAt();

    // N (78) 보다 큰 경우와 작은 경우로 계산
    answer += upDown >= 78 ? zCharCode - upDown : upDown - aCharCode;

    let newIndex = index + 1;

    // 연속되는 A 의 수
    while (newIndex < name.length && name.charCodeAt(newIndex) === aCharCode) {
      newIndex += 1;
    }

    // 좌로 이동 , 우로 이동, 현재 값의 최소값
    leftRight = Math.min(
      leftRight,
      index * 2 + name.length - newIndex,
      index + 2 * (name.length - newIndex)
    );
  });

  return answer + leftRight;
}
