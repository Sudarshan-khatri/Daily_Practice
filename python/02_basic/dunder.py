# Dunder method means the double unserscore
# List of dunder method :init ,str,repr,add , eq


class practice:
    def __init__(self,value):
        self.value=value


    def __repr__(self):
        print(f'Value :{self.value}')


obj1=practice(45)
print(repr(obj1))
