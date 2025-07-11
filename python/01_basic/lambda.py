# product of two number using lambda function 
product=lambda x,y:x*y
print(product(2,3))


#sum of two number using lambda function
sum=lambda a,b:a+b
print(sum(2,3))


#division of two number using lambda function

div=lambda x,y:x/y if y!=0 else  f"Division not possible"
print(div(2,0))

# lambda is a small anomonous function 


# using filter function in python 

ages=[12,34,56,77,12,67,23,89,34]

check=filter(lambda age: age>18 ,ages)
print(list(check))


# to check odd or even using filter
num=[1,3,645,454,342,57,8989,2323]
result=filter(lambda number:  number%2==0 ,num)
print(list(result))



# using map with lambda 
number=[1,2,3,5,6,7,8]
result1=map(lambda x: x%2==0,number)
print(list(result1))

#convert word
word=['apple','cherry','juice','vegetable']
uppWord=map(lambda x: x.upper(),word)
print(list(uppWord))


filWord=filter(lambda x: x=='cherry',word)
print(list(filWord))