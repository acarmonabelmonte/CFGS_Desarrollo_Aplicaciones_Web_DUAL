#Create a function that takes 2 numbers in form of a string as an input, and outputs the sum (also as a string):
#sumStr("4", "5")    // should output "9"
#sumStr("34", "5")   // should output "39"
#If either input is an empty string, consider it as zero. If both inputs are empty, output "0".

def sum_str(a, b):
    return str(int('0' + a) + int('0' + b))

#Casos test:
	assert(sum_str("4","5") == "9")
	assert(sum_str("34","5") == "39")

