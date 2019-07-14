#It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a 
#string. You're given one parameter, except in C, where, to keep the difficulty at the level of the kata, you are 
#given two parameters, the first a buffer with length exactly the same as the second parameter, the original string. 
#You don't have to worry with strings with less than two characters.


def remove_char(s):
	palabra = s[1:-1]
	return palabra

#Casos test:
	assert(remove_char('eloquent') == 'loquen')
	assert(remove_char('country') == 'ountr')
	assert(remove_char('person') == 'erso')
	assert(remove_char('place') == 'lac')
	assert(remove_char('ok') == '')