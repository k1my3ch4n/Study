// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  // nums 의 길이
  const arrayLength = nums.length;

  // 중복을 제거한 nums
  const ponketmonSet = new Set(nums);

  // 중복을 제거한 부분이 사이즈가 더 작다면 , return
  // 사이즈가 더 크다면 , 길이의 절반 return
  return ponketmonSet.size < nums.length / 2
    ? ponketmonSet.size
    : nums.length / 2;
}
