# Function is a block of code that perform specific task 

# def sum(a,b):
#     return a+b

# print(sum(2,3))


# def check(n):
#     if n%2==0:
#         return 'Love you sweet hard'
#     else:
#         return 'Miss you sweet hard'
    

# num=int(input("Enter the number to check:"))
# print(check(num))



# def factorial(num):
#     if num==0:
#         return 1
#     else:
#         return num*factorial(num-1)
    
# num1=int(input('Enter the number:'))
# print(factorial(num1))


# # Fibonacci series
# def fibonacci_series(num):
#     if num<0:
#         return 0
#     elif num==1:
#         return 1
#     else:
#         return fibonacci_series(num-1)+fibonacci_series(num-2)
    

# #call function and print output:
# num3=int(input('Enter the number:'))
# for i in range(0,num3):
#     print(fibonacci_series(i))



def Asynchro(num):
    add=lambda x,y:x+y
    print(add(2,3))
    if num>4:
        return 'hello'
    else:
        return 'hi'
    
print(Asynchro(6))




def multiply(num):
    product=lambda x1:x1+num
    result=product(0)
    print(result)
    if result==num:
        return 'same number '
    else:
        return 'Not same number'
      
print(multiply(5))