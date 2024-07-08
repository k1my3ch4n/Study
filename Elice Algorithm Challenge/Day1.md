## 시간복잡도

- Big O : 최악의 경우
- Big Ω : 최선의 경우

보통 최악의 경우를 고려하므로 , Big O 표기법 사용

### O(1)

- 입력값이 증가해도 , 실행 시간이 늘어나지 않는 일정한 복잡도

### O(log N)

- 로그 복잡도, N 이 커질수록 1에 가까워짐
- ex) 특정 숫자를 맞추는 up & down 게임

### O(N)

- 선형 복잡도 , 입력값이 증가함에 따라 , 실행 시간도 같은 비율로 증가
- ex) for 문

### O(N^2)

- 입력값이 증가함에 따라 실행시간이 N 의 제곱으로 증가하는 2차 복잡도
- ex ) 이중 for 문

### O(2^n)

- 지수 복잡도
- 알고리즘의 시간 복잡도가 지수 복잡도라면 , 다른 방법을 고려해야함
- ex ) 피보나치 수열

### O(N!)

- 팩토리얼 복잡도
- 시간 복잡도가 가장 큼 , 순열에서 등장

## 문제

입력받은 특정 수와 숫자의 구성이 같으면서 , 해당 숫자보다 큰 수중 가장 작은 수 출력

예를 들어 , 789 를 입력받은 경우 , 7,8,9 를 사용한 숫자 중 789 보다 크면서 가장 작은 수 -> 798

```py3
import itertools

n = input()

permutationsList = itertools.permutations(str(n))

sortedList = sorted(list(set([''.join(p) for p in permutationsList])))

indexN = sortedList.index(str(n))

print(sortedList[indexN+1])
```

1. 숫자 입력 후 조합 진행 ( `permutations` )
2. 중복 제거 후 정렬
3. 입력받은 수의 index 확인 후 1 더해서 출력
