//string 

const name='sudarshan'
const repocount=50


console.log(name+repocount) //this is not preferred 


console.log(`Hello my name is ${name} and my repo is ${repocount}`)


const grandName = new String('suda   rshan')
console.log(grandName[3])
console.log(grandName.length)
console.log(grandName.toUpperCase())
console.log(grandName.charAt(5))
console.log(grandName.indexOf('n'))

//substring function 
const newString = grandName.substring(-0,4)
console.log(newString)

//slice function 
const anotherString=grandName.slice(-8,4)
console.log(anotherString)

//trim function

const anotherTrim= '   hellosudu'
console.log(anotherTrim.trim())
