//for loop 

for(let i=0;i<10;i++){
    console.log("sudarshan khatri")
}


for(let i=0;i<10;i++){
    if(i%2!=0){
        console.log(`Number is ${i}`)
    }
}

for(let i=0;i<10;i++){
    console.log(`Outer loop ${i}`)
    for(let j=0;j<10;j++){
        console.log(`${i}*${j}:${i*j}`)
    }
}



//array
let myarray=['flash','hello','superman']
for(let i=0;i<myarray.length;i++){
    console.log(myarray[i])
}


//break and continue

for(let i=0;i<10;i++){
    if(i==5){
        console.log(i)
        continue
    }

}