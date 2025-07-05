//arrays in javascripts 

const myarr=[1,2,3,4,4,5,6]
console.log(myarr)
console.log(typeof(myarr))


//access array
console.log(myarr[2])



const myIntro=["sudarshan",'khatri',1,2,3,4]
console.log(myIntro)


const decArr=new Array(12,3,3,4,5,5,6,7,7)
console.log(decArr)


decArr.push(34,56)
console.log(decArr)
decArr.pop()
console.log(decArr)

decArr.unshift(0)
console.log(decArr)

//shift in array
decArr.shift()
console.log(decArr)

//includes in array
console.log(decArr.includes(7,122))

console.log(decArr.indexOf(7))
console.log(typeof (decArr))


const myn1=myarr.slice(1,3)
console.log(myn1)
console.log('B',myarr)

const myn2=myarr.splice(1,3)
console.log(myn1)
console.log(myn2)