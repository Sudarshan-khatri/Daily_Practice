class Bank:
    def __init__(self,name,amount):
        self.name=name
        self.__amount=amount


    def get_balance(self,balance):
        self.__amount+=balance
        return  f"{self.name} has the amount {self.__amount} "
    




if __name__=="__main__":
    obj1=Bank("Hello",7)
    print(obj1.get_balance(56566))
         



    