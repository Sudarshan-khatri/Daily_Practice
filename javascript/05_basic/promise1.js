const newPromise=new Promise((resolve,reject)=> {
    setTimeout(() =>{
        resolve("too fool"),3000
    })
})
newPromise
   .then(data =>{
    console.log("hello iam sudarshan")
   })
   .catch(data =>{
     console.log("hi iam sudau")
   })
   .finally( data=>{
     console.log("today is my birthday")
   } )