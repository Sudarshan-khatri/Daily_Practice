#for loop : execute the statement untill the condition is true

for i in range(0,1000):
    if i%2==0:
        print(i)
        break

fruits=[1,2,3,5,6,'hello','hi']

for i in fruits:
    print(i) 


a=1.1
b=1.3
print(a+b)

while True:
    x=[i for i in range(1,100) if i%2==0]
    print(x)
    break

#List :ordered ,mutable ,allow duplicate

list1=[1,2,3,5,"hello",'hi','ta',"list"]
list1.append('Python')
print(list1)
list1.extend([2,3,4,'c++','java'])
print(list1)
list1.insert( 3 , 'Hello')
print(list1)
list1.remove("hello")
print(list1)
print(list1.pop())
print(list1)
print(f'Index:{list1.index(2)}')
print(f'count:{list1.count(1)}')
list2=[2,45,67,78,12,56,7,54,3,5,7,8]
list2.sort()
print(list2)
list2.reverse()
print(list2)

list3=list1.copy()
list4=list2.copy()
print(list3) 
print(list4) 
list5=list4.copy()
print(list5) 

