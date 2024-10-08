## 유클리드 호제법

### N 의 약수 개수 구하기

1. 1 부터 N 이하의 정수를 N 으로 나누어서 , 나머지가 0이 되는 수의 개수를 찾기

- 시간복잡도 : O(N)

2. 1부터 √N 이하의 정수로 N 을 나누어서 나머지가 0이 되는 수의 개수를 찾고, 그 수에 2를 곱함. 제곱수라면 1을 뺌

- 시간 복잡도 : O (√N)

### 유클리드 호제법

두 자연수 a, b 에 대해서 a 를 b 로 나눈 나머지를 r 이라고 하면 , a 와 b 의 최대공약수는 b 와 r 의 최대공약수와 동일하다.

```
a % b = r1

b % r1 = r2

r1 % r2 = 0

--> r2 가 최대공약수가 됨
```

### 최대공약수와 최대공배수 ( GCD 와 LCM )

- a 와 b 의 최대공약수가 r1 , 최대공배수가 r2 일 때 , `a x b = r1 x r2`

## 소수 판별법

- 소수 : 1과 자기 자신으로만 나누어지는 수 , 약수가 2개인 경우 소수

### 에라토스테네스의 체

- 2 부터 N 까지의 정수를 적고 , 앞에서부터 지워지지 않은 수의 배수를 모두 지운다. 그 이후 , 그 다음 지워지지 않은 숫자를 선택해서 반복한다.
- 시간복잡도 : O ( N log ( log N ))
