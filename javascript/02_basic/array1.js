//array
const myHero=['sc','sv',1,2,4,6]
const myarr=['sc hero','hihero',4,5,6]

myHero.push(myarr)
console.log(myHero)
console.log(myHero[6][3])



//concat array
const allhero=myHero.concat(myarr)
console.log(allhero)


//spread the array
const herospread=[...myHero,...myarr]
console.log(herospread)


//flat 
const another_array=[1,2,[2,3,4,5],[2,3,5,[,6,5,77,89]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)


//check array
console.log(Array.isArray('sudarshan'))
console.log(Array.from('sudarshan'))
console.log(Array.of('sudarshan'))

