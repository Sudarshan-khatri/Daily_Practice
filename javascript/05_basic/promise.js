const bada=new Promise((resolve,reject) =>{
    const num=Math.random()*10
    if(num>3){
        resolve("promise full filled")
    }
    else{
        reject("promise not fill filled")
    }
})

async function handle(){
    try{
        const result=await bada
        console.log("sucess",result)
    }
    catch(err){
        console.log("unsucess",err)
    };
}
handle()