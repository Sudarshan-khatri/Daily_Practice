const myfunction=function(){
    console.log('Hello world')
}


myfunction()


function addTwoNumber(a,b){
    return a+b
}
console.log(addTwoNumber(2,3))


function addTwoNumber(a,b){
    let result=a+b
    return result
}
const value=addTwoNumber(2,3)
console.log(value)



function loginUserMessage(username='syam'){
    if (username===undefined){
        console.log('Please enter a username')
        return
    }
    return `${username} just logged in ` 
}

const res=loginUserMessage()
console.log(res)



function calculateCartPrice(val1,val2,val3, ...num1){
    return  val1,val2,val3,num1
}
console.log(calculateCartPrice(200,400,500,344,3434,3434,434))

const user={
    username:"sudarshan",
    price:134
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject({
    username:'sdud',
    price:23233
})
