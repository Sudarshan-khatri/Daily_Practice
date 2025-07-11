class my_data:
    def __init__(self,first_name,last_name,age,level):
        self.first_name=first_name
        self.last_name=last_name
        self.age=age
        self.level=level

    def introduction(self):
        if (self.age<0):
            print('Age less than 0 !!!')
        elif (self.age>20):
            return {f"Name:{self.first_name+self.last_name} ,Age:{self.age} ,Level:{self.level}"}
        else:
            print(f" Childhood memories are sweet")
            return {f"Name:{self.first_name+self.last_name} ,Age:{self.age} ,Level:{self.level}"}
        



if __name__=="__main__":
    for i in range(3):
        first_name=input('Enter the first name:')
        last_name=input('Enter the last name:')
        age=int(input('Enter the age'))
        level=input('Enter the school level:')
        obj1=my_data(first_name,last_name,age,level)
        print(obj1.introduction())
