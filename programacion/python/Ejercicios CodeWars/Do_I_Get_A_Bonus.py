#It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make 
#the most money?
#Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
#If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money 
#and must receive only his stated salary.
#Return the total figure the individual will receive as a string prefixed with '£'

def bonus_time(salary, bonus):
    if bonus == True:
        return '$' + (str(salary*10))
    else:
    	return '$' + str(salary)



#Casos test:
	assert(bonus_time(10000, True) == '$100000')
	assert(bonus_time(25000, True) == '$250000')
	assert(bonus_time(10000, False) == '$10000')
	assert(bonus_time(60000, False) == '$60000')
	assert(bonus_time(2, True) == '$20')
	assert(bonus_time(78, False) == '$78')
	assert(bonus_time(67890, True) == '$678900')