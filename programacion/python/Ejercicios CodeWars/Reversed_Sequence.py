#Get the number n to return the reversed sequence from n to 1.
#Example : n=5 >> [5,4,3,2,1]

def reverseseq(n):
    lista = list(range(1,n+1))
    lista.reverse()
    return lista

#Casos test:
	assert(reverse_seq(5) == [5,4,3,2,1])