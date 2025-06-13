import random
def sum(*args):
    total=0
    for arg in args:
        total+=arg
    return total


for i in range(100):
    print(sum(random.randint(0,10)))




