'''Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of 
negative numbers.

If the input array is empty or null, return an empty array:

C#/Java: new int[] {} / new int[0];
C++: std::vector<int>();
JavaScript/CoffeeScript/PHP/Haskell: [];
Rust: Vec::<i32>::new();
ATTENTION!

The passed array should NOT be changed. Read more here.

For example:

input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
return [10, -65].'''


def count_positives_sum_negatives(arr):
    maxim = len(arr)
    cont = 0
    suma = 0
    if maxim != 0:
        for numero in arr:
            if numero > 0:
                cont+= 1
            elif numero < 0:
                suma = suma + numero
            elif numero == 0:
                cont = cont
                suma = suma
        return  [cont,suma]
    else:
        return arr

#Casos test:
	assert(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) == [10,-65])
	assert(count_positives_sum_negatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]) == [8,-50])
	assert(count_positives_sum_negatives([1]) == [1,0])
	assert(count_positives_sum_negatives([-1]) == [0,-1])
	assert(count_positives_sum_negatives([0,0,0,0,0,0,0,0,0]) == [0,0])
	assert(count_positives_sum_negatives([]) == [])