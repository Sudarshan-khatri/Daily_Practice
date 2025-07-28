// Write code to round a number to the nearest integer
let num=12.232323232322332323
console.log(num.toPrecision(3))
console.log(Math.floor(4.9))
// Write code to generate a random number between 1 and 10
for(let i=0;i<10;i++){
    console.log(Math.random()*100)
}


console.log(Math.max(1, 5, 3))


// Write code to calculate the square root of a number
let num1=Math.sqrt(4)
console.log(num1)

console.log(0.1 + 0.2 === 0.3)

// Write code to calculate absolute value of a number.
let num2=Math.abs(-12121212)
console.log(num2)

console.log(Math.ceil(4.1))


// Write code to get the minimum of an array using Math.min
const mn=[1,3,4,5,6,7,8,98,4,6,78]
console.log(Math.min(...mn))


console.log(Math.random() < 1)

// Write code to truncate decimal digits of a number
let nm=10.343434
console.log(Math.trunc(nm))

console.log(Math.pow(2, 3))


// Write code to check if a number is integer
let numb=121212121212
if(Number.isInteger(numb)){
    console.log("Number")
}
else{
    console.log("Not number")
}

console.log(Number.isNaN("NaN"))


// Write code to parse a float from a string
console.log(parseFloat("FF2"))

console.log(Math.sign(-5))

// Write code to calculate the factorial of a number using recursion
function factorial(num){
    if(num===0){
        return 1
    }
    else{
        return num*factorial(num-1)
    }
}
console.log(factorial(5))

console.log(Math.log(1))


function hypotenous(a,b){
    return Math.sqrt((a*a)+(b*b))
}
console.log(hypotenous(3,4))

console.log(Math.trunc(4.9))


// Write code to generate a random integer between two numbers (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomInt(2, 10))

console.log(Number.isInteger(4.0))
// Write code to calculate the cube root of a number
console.log(Math.cbrt(8))
console.log(Math.E)


// Write code to round a number to N decimal places
let v1 = 1.222222222243434343434;
console.log(v1.toPrecision(4));
console.log(v1.toPrecision(3));
console.log(v1.toPrecision(2));
console.log(v1.toPrecision(1));


console.log(Math.min())