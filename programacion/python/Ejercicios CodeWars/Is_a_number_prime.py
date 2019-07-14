#Is Prime
#Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False 
#depending on if the integer is a prime.
#Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors 
#other than 1 and itself.
#Example:
#isPrime(5)
#=> true
#Assumptions:
#You can assume you will be given an integer input.
#You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).

def is_prime(num):
    contador = 0
    for i in range(1,num+1):
        if (num% i)==0:
            contador = contador + 1

    if contador==2:
        return True
    else:
        return False

#Casos test:
	assert(is_prime(0) == False)
	assert(is_prime(1) == False)
	assert(is_prime(2) == True)