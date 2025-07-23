const result=function(name){
    return name + "world !";
}
console.log(result("sudarshan"))


// convert this function to array function
const result1=(name)=>{
    return name + "  world !!!"
}
console.log(result1("sudarshan khatri"))



// write an array function to return the array of Number 
const square=(num1)=>{
    return  num1*num1
}
console.log(square(4))


const check=(num)=>{
    if(num%2==0){
        return `${num} is even`
    }
    else{
        return `${num} is odd`
    }
}
console.log(check(45))



// Rewrite this function as an arrow function with implicit return:
// function add(a, b) {
// return a + b;


const convertToArray=(a,b)=>{
    return  a+b
}
console.log(convertToArray(2,3))



const f = () => ({ name: "Alice" });
console.log(typeof f())


// . Write an arrow function that multiplies three numbers.
const threeProduct=(a,b,c)=>{
    return a*b*c
}
console.log(threeProduct(2,3,5))

// Create an array of arrow functions and call them one by one
const arrayOfarray=(arr1)=>{
    for(let i=0;i<arr1.length;i++){
        console.log(arr1[i])
    }
}
arr1=["hello","i am","sudarshan ","khatri"]
arrayOfarray(arr1)


// Use an arrow function in a setTimeout().

setTimeout((num) => {
        if(num%2==0){
            console.log(num)
        }
        else{
            console.log("sorry")
        }
    }, timeout=100,3);


// Write an arrow function that returns the length of a string
const lengthOfstring=(name)=>{
    console.log(name.length)
}
lengthOfstring("sudarshan")


// Return the first character of a string using arrow syntax
const lengthOfstring1=(name)=>{
    console.log(name[0])
}
lengthOfstring1("sudarshan")



