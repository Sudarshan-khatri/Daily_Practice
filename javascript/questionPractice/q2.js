// What will be logged?
console.log(a)
var a = 10
// What will this print?
let b = 1
b = 2
console.log(b)
console.log(b)


const x=10
console.log(x)

{const x=12
console.log(x)}



// What error occurs when you access let before declaration?
// just undefined is logged
var a = 1;
function test() {
console.log(a);
var a = 2;
console.log(a);
}
test();


for(let i=0;i<10;i++){
    console.log(i)
}


// for(var i=0; i<3; i++) {
// setTimeout(() => console.log(i), 100);
// }


const obj = {};
obj.name = "JS";
console.log(obj.name);


// Declare a variable inside an if block using var and log it outside the block.

let ch=10
if(ch=10){
    var value=23
}
console.log(value)


// What will happen if you do let a = 10; let a = 20; in the same scope?
{
    let a=10
    a=20
    console.log(a)
}

// Create a variable a without declaring it. What scope does it have?
var decl
console.log(decl)



// Explain and demonstrate the difference between globalThis and window

// window.myVar = 10;
// console.log(myVar);


// Use const to declare an array and push a new element to it. Will it work?
const myArray=[1,2,3,4,5,6,7]
myArray.push(88)
console.log(myArray)


// Write a program to swap two variables without a temporary variable using let.

let s1=10
let s2=12
s1=s1+s2
s2=s1-s2
s1=s1-s2
console.log(s1)
console.log(s2)



// Declare a const object and try to reassign it. What happens?

const obj1={
    name:"sudarshan",
    age:20,
    level:"Bachelor",
}
obj1.height=12
console.log(obj1)


console.log(typeof undeclaredVariable);

// Write code to demonstrate how var variables are hoisted

var hello
console.log(hello)
hello=12
console.log(hello)



let foo = "bar";
console.log(foo);


// Explain and show the difference between var and let in loops with closures.

for(var i=10;i<14;i++){
    console.log(i)
}
console.log(i)
console.log("ENd")


for(let j=10;j<14;j++){
    console.log(j)
}
// console.log(j)


// What happens if you declare a variable with the same name in two different scopes?
for(var k=10;k<14;k++){
    console.log(k)
}
console.log("fuck u")

for(let k=10;k<14;k++){
    console.log(k)
}

var a = 1;
function test() {
a = 2;
console.log(a);
var a;
}
test();


// Create a global variable inside a function without var/let/const.
function createGlobal(){
    x1=3434
}
createGlobal()

console.log(globalThis.x1)


// 29. Write a function that declares a variable with the same name as a global variable and
// // explain scope

const x12=34343
function access(){
    var x12=343456
    console.log(x12)
}
access()
console.log(x12)


{
let a = 10;
{
console.log(a);
}
}



// How do let and const affect the global object? Demonstrate.
// Write code to demonstrate how variables declared with var behave inside if blocks.

if(true){
    var X=123
    console.log(X)
}
console.log(X)



// Write code that shows the difference between declaring a variable inside and outside a function.

var valDeclare=121212
function show(){
    var valdec=1212
    console.log(valdec)
}
show()
console.log(valDeclare)
console.log(globalThis.valdec)



var a = 10;
function test() {
console.log(a);
}
test();



// What will happen if you declare a variable with const but do not initialize it?


// Explain and show the difference in redeclaring variables with var and let
var redec=45
var redec=56
console.log(redec)

let redec2=50
let redec1=60
console.log(redec1)



// let a = 5;
// {
//    var a = 10;
//    console.log(a)
// }


// Write code to swap two variables using destructuring and let

function swap(a, b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
    console.log(a); // 32
    console.log(b); // 23
}

swap(23, 32);


let a21 = 5;
let b21 = 10;

console.log("Before swap: a =", a21, ", b =", b21);

// Swap using destructuring
[a21, b21] = [b21, a21];

console.log("After swap: a =", a21, ", b =", b21);




// Write code showing that const variables cannot be reassigned but their contents can be
// mutated if they are objects


const examp=23
console.log(examp)

const examp1={
    name:"sudarshan",
    cast:"khatri",
    level:"bachelor",
}
console.log(examp1)
examp1.height=2323
console.log(examp1)
