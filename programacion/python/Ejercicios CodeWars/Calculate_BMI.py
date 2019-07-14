#Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
#if bmi <= 18.5 return "Underweight"
#if bmi <= 25.0 return "Normal"
#if bmi <= 30.0 return "Overweight"
#if bmi > 30 return "Obese"

def bmi(weight, height):
	imc = weight/height**2
	if imc <= 18.5:
		return "Underweight"
	elif imc <= 25.0:
		return "Normal"
	elif imc <= 30.0:
		return "Overweight"
	else:
		return "Obese"

#Casos test:
	assert(bmi(50, 1.80) == "Underweight")
	assert(bmi(80, 1.80) == "Normal")
	assert(bmi(90, 1.80) == "Overweight")
	assert(bmi(110, 1.80) == "Obese")
	assert(bmi(50, 1.50) == "Normal")