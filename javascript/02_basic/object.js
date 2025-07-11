// object declerate as literal 

//singleton 

//using symbol
const mySym=Symbol("key1")

const jdUser={
    name:'sudarshan khatri',
    age:20,
    'fullName':'sudarsja',
    [mySym]:"mykey1",
    location:'kathmandu',
    last_login:['monday','saturday']
}
// Object.freeze(jdUser)

jdUser.location="googleoffice"

console.log(jdUser.name)
console.log(jdUser['name'])
console.log(jdUser)
console.log(jdUser.mySym)
// Object.freeze(jdUser)
console.log(jdUser.location)




//adding the new object
jdUser.greeting=function(){
    console.log("hello world")
    
}

console.log(jdUser.greeting())