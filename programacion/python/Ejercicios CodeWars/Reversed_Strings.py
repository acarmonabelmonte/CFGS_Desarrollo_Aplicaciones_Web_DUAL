#Complete the solution so that it reverses the string value passed into it.

def solution(string):
    return string [::-1]

#Casos test:
	assert(solution('world') == 'dlrow')
	assert(solution('hello') == 'olleh')
	assert(solution('') == '')
	assert(solution('h') == 'h')