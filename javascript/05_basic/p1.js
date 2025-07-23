// Task: You have three fake API calls (simulate with setTimeout). Each returns a different message after 1s, 2s, and 3s. Use Promise.all() to show all results only when all are completed.


const api1=fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"Post",
    headers:{
        'content-type':'application/Json',
    },
    body:JSON.stringify(data)
})
.then(Response=>Response.json())
.then(data=>console.log(data))


const p1=new Promise((resolve,reject),{
    
})