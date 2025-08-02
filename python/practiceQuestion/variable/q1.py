import sys
# Declare three variables in one line and assign values 1, 2, and 3. Print their sum
a,b,c=10,12,11
print(a+b+c)

# Swap two variables’ values without using a temporary variable
x=111
y=34
y,x=x,y
print(x,y)


# Store your name and age in variables and print: "My name is X and I am Y years old."
name="sudarshan"
age=20
print(f"my name is {name} and age is {age}")


# Assign the same value to multiple variables in one line and verify they share the same reference using id()
num1=num2=num3=1212
print(num1)
print(num2)
print(num3)
print(id(num1))
print(id(num2))
print(id(num3))


# Show how variable names are case-sensitive by creating two variables A and a with different values
z=20
Z=34
print(z)
print(Z)


# Write a program where a variable changes type (int → str → float) and print its type at each step
var1=12121
print(type(var1))
var2=str(var1)
print(type(var2))
var3=float(var2)
print(type(var3))


# Demonstrate variable shadowing inside a function vs outside (global vs local).
demo=343434
def show(num):
    print(demo)
    print(num)

show(455)

# Assign a large integer to a variable and print its memory size using sys.getsizeof()
assign=121212212
print(sys.getsizeof(assign))


# Create variables of all basic data types and print their types in one loop
st1=["hello sudarshan",22323.444343,2323232323232,True]
for i in st1:
    print(type(i))


# Change a variable’s value based on user input (e.g., increment a counter).
changeValue=int(input("Enter the number::"))
while changeValue<=10:
   changeValue+=1
print(changeValue)

