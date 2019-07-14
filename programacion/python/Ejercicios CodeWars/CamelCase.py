#Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. 
#All words must have their first letter capitalized without spaces.
#For instance:
#camelcase("hello case") => HelloCase
#camelcase("camel case word") => CamelCaseWord
#Don't forget to rate this kata! Thanks :)



def camel_case(string):
    if string =="":
        return ""
    else:
        for letra in string.title():
            if letra == " ":
                return (string.title()).replace(letra, "")
        return string.title()   



#Casos test
assert(camel_case("test case") == "TestCase")
assert(camel_case("camel case method") == "CamelCaseMethod")
assert(camel_case("say hello ") == "SayHello")
assert(camel_case(" camel case word") == "CamelCaseWord")
assert(camel_case("") == "")