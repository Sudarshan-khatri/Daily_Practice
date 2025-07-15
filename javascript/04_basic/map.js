const myNumber=[1,2,3,4,5,6,7,8,9,10]

const newNum=myNumber.map((num)=>{
     return  num+10
})
console.log(newNum)



const newNum1=myNumber.map((num) =>num*10).map((num)=>{
    return num*100
}).filter((num) =>num>100)
console.log(newNum1)



//reduce js

const snum=[1,2,3,4,4,5,5,6,6,7,8,9,10]
const myTotal=snum.reduce(function(acc,currval){
    console.log(`acc :${acc} and curval${currval}`)
    return acc+currval
},0)
console.log(myTotal)



const total=snum.reduce((acc,cur)=>acc+cur,0)
console.log(total)
