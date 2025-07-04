# import random
# def sum(*args):
#     total=0
#     for arg in args:
#         total+=arg
#     return total


# for i in range(100):
#     print(sum(random.randint(0,10)))




def keyword_dec(func):
    def wrapper(*args,**kwargs):
        print("Before the wrapper function")
        result=func(*args,**kwargs)
        print("After the wrapper function")
        return result
    return wrapper

@keyword_dec
def function_call(a,b):
    return a+b

print(function_call(2,3))




