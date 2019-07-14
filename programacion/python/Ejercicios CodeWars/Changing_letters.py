#When provided with a String, capitalize all vowels
#For example:
#Input : "Hello World!"
#Output : "HEllO WOrld!"

def swap(st):
    s = ""
    vowels = ['a','e','i','o','u']
    for i in st:
        if i in vowels:
            s = s+i.upper()
        else :
            s = s+i
    return s

#Casos test:
	assert(swap("HelloWorld!") == "HEllOWOrld!")
	assert(swap("Sunday") == "SUndAy")