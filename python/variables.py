import random as r
#variable are the container to store the data

# a=5
# b=10
# print(a+b)

# Data types 
# primitives and non primitive Data Types
# primitive Data Types =int ,float,complex ,str
#sequence type:list,tuple ,set
#mapping type :dictionary
#Non primitive data type _linear and non linear


# a=int(input("Enter the number:"))
# b=float(input("Enter the number"))
# c=str(a+b)
# print(c)
# print(type(c))


# Conditional statement
# if =if condition is true then exectue
age=20
if(age>20):
    print(f'Age:{age}')

# if else = if condition is true then execute that statement otherwise exectue the else statement
while True:
    number=r.randint(0,9)
    guess=input("Enter the guess:")
    if(guess==number):
        print(f'Guess match {number}')
        break
    else:
        print(f'Guess not mathc{guess}')
        break


# if elif else : check condition manually if the conditio is true then exectue the statement and exit the program



