'''Round any given number to the closest 0.5 step

I.E.

solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5
Round up if number is as close to previous and next 0.5 steps.

solution(4.75) == 5'''

def solution(n):
    return round(n*2.0) / 2.0

#Casos test:
	assert(solution(4.2) == 4)
	assert(solution(4.25) == 4.5)
	assert(solution(4.4) == 4.5)
	assert(solution(4.6) == 4.5)
	assert(solution(4.75) == 5)
	assert(solution(4.8) == 5)