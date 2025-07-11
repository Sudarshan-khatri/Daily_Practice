class Animal:
    def sound(self):
        print(f"Animal have sound")


class Dog(Animal):
    def sound(self):
        print(f"Dog vok vok")


class cat(Animal):
    def sound(self):
        print(f"cat meow ")


if __name__=="__main__":
    animal=Animal()

    dog=Dog()
    c=cat()

    animal.sound()
    dog.sound()
    c.sound()