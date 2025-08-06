// Write a constructor function to create objects with name and age properties.
function detail(name,age){
    this.name=name
    this.age=age
    this.greet=function(){
        console.log(`my name is ${this.name} and age is ${this.age}`)
    }
}
const detail1=new detail("sudarshan","khatri")
detail1.greet()

// using class//
class detail2{
    detail(name,age){
        this.name=name
        this.age=age
    }
    displayInfo(){
        console.log(`my name is ${this.name} and age is ${this.age}`)
    }
}
const dt=new detail2("sudarshan","khatri")
dt.displayInfo()
// 3. Add a method to the constructor’s prototype.
class car{
    constructor(brand,id){
        this.brand=brand
        this.id=id
    }
    displayCar(){
        console.log(`car id::${this.brand} and car brand::${this.brand}`)
    }
}
const cr=new car("hayanju",432432432)
cr.displayCar()
// 4. Explain difference between methods added inside constructor vs prototype.
function stat(nm,age){
    this.name=nm
    this.age=age
    this.greet1=function(){
        console.log(`name :: ${this.name} age::${this.age}`)
    }
}
const protObj=new stat("sudarshan","khatri")
protObj.greet1()

// class 
class bio{
    constructor(relation,status){
        this.relation=true
        this.status=true
    }
    displayRelation(){
        console.log(`Relationship ${this.relation} and the status is ${this.status}`)
    }
}
const Bio=new bio("hello","sudarshan")
Bio.displayRelation()
// 5. Write code to check if an object is instance of a constructor.
console.log(Bio instanceof(bio))
// 6. Write a constructor that accepts parameters and assigns properties.
class Construct{
    constructor(data,no){
        this.data=data
        this.no=no
    }
    displayConstruct(){
        console.log(`Data ${this.data} and no is ${this.no}`)
    }
}
const hlo=new Construct("This is the bunch of data",2323)
hlo.displayConstruct()
// 7. Override a prototype method for a specific object instance.
function OverrideMethod(data1,data2){
    this.data1=data1
    this.data2=data2
    this.OverrideMethod=function(){
        console.log("gfgfgdfgfdgdfgdfgfd")
    }
}
const  over=new OverrideMethod()
over.OverrideMethod()
// 8. Write code to create multiple objects using a constructor function.
function multipleObj(Obj1,Obj2){
    console.log(Obj1)
    console.log(Obj2)
}
const object1={
    dog:"japnese blitz",
    age:34
}
const object2={
    cat:"malian safert",
    agec:34 
}
multipleObj(object1,object2)
// 9. Dmonstrate constructor function hoisting.
// 10. Write code to add static properties or methods to a constructor function.
// 11. Explain what happens if you call a constructor function without new.
// 12. Write code to create inheritance using constructor functions.
// 13. Show how to call parent constructor inside child constructor.
// 14. Use Object.create() to set prototype of an object created by constructor.
// 15. Write code to override prototype method in child constructor.
// 16. Create a constructor function that has private variables using closures.
// 17. Write code to list all properties (own and prototype) of an instance.
// 18. Explain difference between class constructors and function constructors.
// 19. Write code to convert a constructor function to ES6 class syntax.
// 20. Write code to demonstrate constructor function default parameters.
// 21. Create a constructor function with methods that use this.
// 22. Show prototype chain for an object created via constructor.
// 23. Write code to check enumerable properties of an object created via constructor.
// 24. Use instanceof to verify inheritance between constructors.
// 25. Write code to extend native constructors using function constructors.
// 26. Explain what happens if you assign a new object to prototype inside constructor.
// 27. Write code to add multiple methods to prototype using Object.assign().
// 28. Write a constructor that creates objects with private properties accessible via getters.
// 29. Write code demonstrating constructor property on instances.
// 30. Write a constructor function that throws an error if called without new.
// 31. Write code to create circular references using constructors.
// 32. Explain performance difference between prototype and instance methods.
// 33. Write code to delete prototype methods and observe effect on instances.
// 34. Show how to add properties to the prototype after instance creation.
// 35. Write code demonstrating prototypal inheritance using constructor functions.
// 36. Explain prototype pollution in the context of constructor functions.
// 37. Write a constructor function that validates parameters.
// 38. Create a constructor function with a static method.
// 39. Explain how new.target can be used in constructor functions.
// 40. Write code to check if a property is own or prototype on a constructed object.
// 41. Write a constructor that mixes instance and prototype properties.
// 42. Write code to simulate private methods inside constructor functions.
// 43. Explain what happens if prototype is reassigned after instances are created.
// 44. Create a constructor function that returns a different object explicitly.
// 45. Write code to demonstrate chaining constructors using .call().
// 46. Show how this behaves inside constructor vs prototype methods.
// 47. Write a constructor that logs every creation of an instance.
// 48. Write code to freeze prototype and observe effects.
// 49. Create a constructor function that supports method chaining.
// 50. Explain memory usage differences between methods on prototype vs instance.