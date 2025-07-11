const user={
    username:'sudarshan khatri',
    price:554545,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to webiste`)
        // console.log(this)

    }
}
user.welcomemessage()
user.username='syam'
user.welcomemessage()
console.log(this)



//function chai
function test(){
    console.log(this)
}
test()


const chai=()=>{
    let userTitle="username "
    console.log(userTitle)
}
chai()

const addTwo=(a,b)=>{
   return a+b
}
console.log(addTwo(2,3))


const sumTwo=(a,b)=>({height:12,cast:"khatri"})
console.log(sumTwo(2,3))