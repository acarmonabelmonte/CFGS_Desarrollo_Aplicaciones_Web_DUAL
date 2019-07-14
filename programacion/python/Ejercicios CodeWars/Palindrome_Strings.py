#Palindrome strings
#A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. 
#This includes capital letters, punctuation, and word dividers.
#Examples
#"anna"   ==> true
#"walter" ==> false
#12321    ==> true
#123456   ==> false

def is_palindrome(string):
    if str(string) == str(string)[::-1]:
        return True
    else:
        return False

#Casos test:
	assert(is_palindrome("anna")==True)
	assert(is_palindrome("walter")==False)
	assert(is_palindrome(12321)==True)
	assert(is_palindrome(123456)==False)
