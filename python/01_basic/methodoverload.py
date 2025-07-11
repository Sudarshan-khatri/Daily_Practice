class method_overloading:
    def add(self,a,b,c=5):
        return a+b+c
    
   
    
    def product(self,a,b,c=3):
        return a*b*c
    

if __name__=="__main__":
    obj1=method_overloading()
    print(obj1.add(2,3))
    print(obj1.add(2,3,5))
    print(obj1.product(2,3))
    print(obj1.product(2,3,5))