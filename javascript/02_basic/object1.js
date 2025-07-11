//singleton object

// const tinderUser =new Object()
const tinderUser={}

tinderUser.id='123abc'
tinderUser.name='sudarshan'

console.log(tinderUser)


const regularUser={
    email:'some@gmail.com',
    fullName:{
        firstName:'sudarshan',
        lastName:'khatri'
    },
    age:20
}
console.log(regularUser)
console.log(regularUser.fullName)
console.log(regularUser.fullName.firstName)



const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3={obj1,obj2}

const obj4=Object.assign(obj1,obj2)
console.log(obj3)
console.log(obj4)

//spread object
const obj6={...obj1,...obj2}
console.log(obj6)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))


//object destructuring 
const course={
    courseName:'js in Nepali',
    price:99,
    cousrseInstructor:'sudarshan'
}
const {cousrseInstructor:instructor}=course
console.log(instructor)
