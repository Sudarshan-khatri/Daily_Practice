// Create an object with three properties: name, age, city
let obj={
    name:"sudarshan",
    age:23,
    city:"kathmandu"
}
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))


// Access a property using dot notation and bracket notation.
console.log(obj["name"])
console.log(obj.name)

console.log(obj.name1="hello")
let hel=obj["name2"]="hayanju"
console.log(hel)

// Delete a property from an object.
let del=delete obj.name
console.log(del)
console.log(obj)

// Check if a property exists in an object
for(const key in obj){
    if(obj[key]=="name"){
        console.log("value find")
    }
    else{
        console.log("sorry")
    }

}
// Loop through all keys of an object using for...in
for(const key in obj){
    console.log(obj[key])
}


// Get an array of all keys using Object.keys()
console.log(Object.keys(obj))

// Get an array of all values using Object.values()
console.log(Object.values(obj))
// Get an array of entries (key-value pairs) using Object.entries(
console.log(Object.entries(obj))

//  Merge two objects using Object.assign()
let Obj={
    status:"single",
    sourec:"not earning",
}
console.log(Object.assign(Obj,obj))

// Use spread operator to clone an object
function sum(a,b){
    return a+b
}

const num=[1,2]
console.log(sum(...num))

// Write code to freeze an object and show that it can’t be changed
let question={
    name:"sudiksha",
    city:"ktm"
}
//freeze the object 
Object.freeze(question)

question.name="hfdfds"
question.city="fdsffsdfsd"

console.log(question)

console.log(Object.isFrozen(question))

// Write code to seal an object and explain difference with freeze
let sl1={
    propertyA:"hello",
    propertyB:"hi"
}
Object.seal(sl1)
console.log(sl1)
sl1.propertyC="gsfsdfsdf"
console.log(Object.isSealed(sl1))
console.log(sl1)

// Create an object with a method that uses this
let person1={
    name:"sudarshan",
    eat:"john doe",
    perfom:function(){console.log(`my name is ${this.name} and eat ${this.eat}`)}
}
let person2={
    name:"sud",
    eat:"john oe",
    perfom:function(){console.log(`my name is ${person2.name} and eat ${person2.eat}`)}
}

person1.perfom()
person2.perfom()


// Use computed property names to create dynamic keys in an object
const key1 = "name";
const key2 = "age";
const key3 = "city";

const person = {
  [key1]: "Sudarshan",
  [key2]: 21,
  [key3]: "Kathmandu"
};

console.log(person);
// Output: { name: 'Sudarshan', age: 21, city: 'Kathmandu' }
//  Create a nested object and access nested properties
let nestedObj={
    name:"sudarshan",
    age:12,
    level:"bachelor",
    hid:{
        crush:"aashika",
        memory:"not good",
        axis:"y_axia"
    }
}
console.log(nestedObj.hid.crush)
console.log(nestedObj)
console.log(nestedObj.hid)
console.log(nestedObj.hid)
console.log(nestedObj.hid.axis)
// Use destructuring to extract properties from an object
const {name,age,level,hid}=nestedObj
console.log(name)
console.log(age)
console.log(hid)

const {crush,memory,axis}=hid
console.log(crush)
console.log(memory)
console.log(axis)

// Rename properties while destructuring
const {name:personname,age:helloage}=nestedObj
console.log(personname)
console.log(helloage)
// Provide default values while destructuring an object
let assignObj={
    name:"suddddd",
    age1:123
}
const {name:personname1="khatricode",age1}=assignObj
console.log(personname1)
console.log(age)


// Write code to convert an object to JSON string using JSON.stringify().
let z=JSON.stringify(assignObj)
console.log(z)
// Parse a JSON string into an object using JSON.parse().
console.log(JSON.parse(z))
// Use hasOwnProperty() to check if a property belongs directly to an object
console.log(assignObj.hasOwnProperty("name"))



// Explain prototype chain and show how to access the prototype of an object.
const myObject = {};
const prototypeOfMyObject = Object.getPrototypeOf(myObject);
console.log(prototypeOfMyObject); 

// 27. Add a method to an object’s prototype.
myObject.name=function (){
    return "hello iam bindahs"
}
console.log(myObject.name())
// 28. Create an object using Object.create().
const CreateObj=Object.create(prototypeOfMyObject,helloAssing={
    nameX:{value:"sudarshan",writable:true,enumarable:true},
    nameY:{value:"aayush",writable:"suddddd",enumarable:true} 
})
console.log(prototypeOfMyObject)
console.log(helloAssing)
console.log(helloAssing.nameX)
console.log(helloAssing.nameY)
// 29. Explain difference between own and inherited properties.

// 30. Write code to demonstrate enumerability of object properties.
// 31. Use Object.defineProperty() to create a property with specific descriptors.
let dax=Object.defineProperty(CreateObj,"dam",{
    value:"this is the secret value",
    writable:true,
    enumerable:false,
    configurable:false
})
console.log(dax)
// 32. Create a non-enumerable property and test with for...in.
for(let key in dax){
    console.log(dax.dam)
}
// 33. Explain and show how getters and setters work in objects.
let getter={
    first_name:"sudarshan",
    last_name:"Khatri",
    get fullname(){
        return `Full_Name::${this.first_name}${this.last_name} `
    }
}
console.log(getter)
console.log(getter.fullname)
let setter={
    first_name:"sudarashan",
    last_name:"Khatri",
    set bio(value){
        this.first_name=value,
        this.last_name="dfsfsdfs"
    }
}
setter.bio="khatricode"
console.log(setter)
console.log(setter.first_name)
console.log(setter.last_name)
// 34. Create a read-only property using Object.defineProperty().
let readonly=Object.defineProperty(setter,"newval",{
    value:"This is only reading property",
    writable:false,
    enumerable:true,
})
console.log(readonly)
console.log(readonly.newval)
// 35. Use Object.freeze() on nested objects and explain effect.
let freezeObj={
    name:"santosh",
    role:"data miner",
    profile:{
        facebook:"santosh khatri",
        instagram:"khatrisantosh",
        whatshapp:"+977 9751324000"
    }
}
let frz=Object.freeze(freezeObj.profile)
console.log(frz)
console.log(freezeObj.profile.twitter="dfdsfdsf")
console.log(typeof frz)
// 36. Write code to list all enumerable property names, including inherited ones.
// 37. Create an object with symbol keys and show how to access them.
// 38. Use Object.getOwnPropertyNames() and explain difference from
// Object.keys().
// 39. Create an object with a method that returns the object’s keys.
// 40. Explain how to prevent extensions to an object.
// 41. Demonstrate prototype pollution risks with examples.
// 42. Write code to merge objects with conflicting keys, explaining overwrites.
// 43. Use Object.entries() and Object.fromEntries() together.
// 44. Write code to clone an object without prototype using Object.create(null).
// 45. Show how to add multiple properties at once using Object.defineProperties().
// 46. Create an object with dynamic getter property.
// 47. Use in operator to check property presence.
// 48. Write code to check if an object is empty (no own properties).
// 49. Explain how this differs inside arrow functions in object methods.
// 50. Write code to create an immutable object using proxies