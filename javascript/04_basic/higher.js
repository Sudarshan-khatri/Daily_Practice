//for of loop
const myarr=[1,2,3,4,4,5]
for(const i of myarr){
    console.log(i)
}


const greeting="hello world"
for(const greet in greeting){
    console.log(greeting[greet])
}



//map
const map=new Map()
map.set('np','454545')
map.set('usa','sanscisos')
console.log(map)

for(const [key,values] of map){
    console.log(key,values)
}


const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by ruby"
}
for(const key in myobject){
    console.log(key)
}


const arr=['hello','js','iam ','learning','with',"your"]
for(const i in arr){
    console.log(arr[i])
}
