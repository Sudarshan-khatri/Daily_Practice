const promiseone=new Promise(function(resovle,reject){
    setTimeout(function(){
        console.log("async task is complete")
        resovle()
    },100)
})
promiseone 
   .then(function(){
    console.log("promise consumed")
   })


new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("async task 2")
        resolve()
    }, timeout=100);
}).then(function(){
    console.log("asnync 2 resolved")
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"helloUser@gmail.com"})
        
    },100)
})

promiseThree
     .then(function(user){
        console.log(user)
     })


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(error){
            resolve({username:"sudarshan",password:"123"})
        }else{
            reject('Error:something went wrong')
        }
    },100)
})

promiseFour.then((user)=>{
    console.log(user.username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("All done")
})