# Show how Python allows dynamic typing by assigning a string, then a number, then a list to the same variable
# name=input("Enter  the name::")
# age=int(input("Enter the age::"))
# list1=[]
# list1.extend([name,age])
# print(list1)


# Create multiple variables and swap their values circularly (a → b, b → c, c → a).
a,b,c,d=10,12,13,14
a=b=c=d=a
print(a)
print(b)
print(c)
print(d)



# Use tuple unpacking to assign values from a tuple to separate variables
first_tup=(1,2,3,4,5,6,7,8,9)
a,b,*c=first_tup
print(a)
print(b)
print(*c)

#  Assign values from a list to separate variables using unpacking
