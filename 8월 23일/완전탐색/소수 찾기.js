// 순열 함수
// 최소 1자리 ~ 최대 7자리 생성
const permutation = (array, numbers, output) => {
  if (numbers.length == 0) {
    return output.add(Number(array.join("")));
  }

  if (array.length > 0) {
    output.add(Number(array.join("")));
  }

  numbers.forEach((number, index) => {
    const numberData = [
      ...numbers.slice(0, index),
      ...numbers.slice(index + 1),
    ];
    permutation([...array, number], numberData, output);
  });
};

// 소수 판별
const checkPrimeNum = (number, output) => {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    const divideNum = number % i;

    if (divideNum === 0) {
      isPrime = false;
      return;
    }
  }

  if (isPrime && number >= 2) {
    output.push(number);
  }
};

function solution(numbers) {
  var answer = [];

  // 전체 수 데이터
  const numberData = new Set([]);
  let numberArr = numbers.split("");

  // 전체 수 조합으로 가져옴
  permutation([], numberArr, numberData);

  // 중복 제거 데이터를 리스트로 변경
  const numberList = [...numberData];

  // 가져온 수를 체크
  for (let i = 0; i < numberList.length; i++) {
    checkPrimeNum(numberList[i], answer);
  }

  // 개수 확인
  return answer.length;
}
