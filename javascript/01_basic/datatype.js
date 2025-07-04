//Number 
let x=34
let y=45.45
console.log(x+y);
console.log(typeof(y))


//String 
const h='hello'
const j="hi"

console.log(typeof(h))


//boolean 
let isbirth=true
let isdeath=false
console.log(typeof(isbirth))
let hi=isbirth+isdeath
console.log(hi)
console.log(typeof(hi))


// objects

const details={
    firstname:"sudarshan",
    lastName:"hell0"
}
console.log(details)
console.log(typeof(details))


const data=[1,2,3,4,5]
console.log(data)
console.log(typeof(data))

//data of account

const accountId=112122
let acccountEmail="khatrisudarshan360@gmail.com"
var accountPassword="12345"

// accountId=3

acccountEmail="khatisudarsha@gmail.com"
accountPassword=32232333
console.log(acccountEmail);
console.table([acccountEmail,accountId,accountPassword])


if(accountId==112122){
    console.table([acccountEmail,accountId,accountPassword])
}
let accountState

console.log(accountState)



// data types in javascripts
 //treat all js code as newer version 
// alert(3+3) -we are using node js not browser

console.log(3+3)
console.log("hello")


let name="sudarshan"  //string 
let age=18 //number
let isLoggedIn=true //boolean 
let state    //undefined
let val=null //standalone value

console.log(typeof(Symbol))
console.table([typeof(name),typeof(age),typeof(isLoggedIn),typeof(state),typeof(val)])



