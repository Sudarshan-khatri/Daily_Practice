// Write code to check the type of a variable holding a string, number, boolean, null,
// undefined, symbol, and object.

const val1=34
const val2="sudarshan"
const val3=true
const  val4={
    name:"sudarshan",
    roll:12,
    level:"Bachelor"
}
let val5
let val6=null
let val7=Symbol("helllo")




console.log(typeof val1)
console.log(typeof val2)
console.log(typeof val3)
console.log(typeof val4)
console.log(typeof val5)
console.log(typeof val6)
console.log(typeof val7)



// Create a symbol and compare it to another symbol with the same description
const symb1=Symbol("id")
const symb2=Symbol("id")
console.log(symb1 ===symb2)


// access globally use symbol.for
const symb3=Symbol.for("id")
const symb4=Symbol.for("id")

console.log(symb3===symb4)



const bigInt=12345678901234567812345678534546453453454354353453454353454353454353453453454354334534435345435435345435
console.log(BigInt(bigInt))
console.log(typeof bigInt)
console.log(true + false);




// Write code to convert string "123" to number and explain.
let convertString="123"
let cv1=Number(convertString)
console.log(cv1)
console.log(typeof cv1)



let a;
console.log(typeof a);


// Write code to demonstrate type coercion with == and strict equality ===.
let h1='10.3'
let h2=10.3
console.log(h1==h2)
console.log(h1===h2)



console.log([] == false);



// Write code to check if a value is an array\
const checkValue=["hello","sid","val1"]
for(let i=0;i<checkValue.length;i++){
    if(checkValue[i]==="helllo"){
        console.log("hello found sucessfully")
        break
    }
    else{
        console.log("Prajjwal Location Marking.....")
        console.log("Found.....");
        console.log("Found at: PAtan Hospital!!!")
        break
    }
}


console.log(typeof function() {});


//Write code showing that functions are objects in JavaScript.
function prajjwal(){
    console.log("hello")
}
result=prajjwal()
console.log(typeof result)



// Write a program that differentiates primitive and reference data types.


//primitive data types 
let pVal=23
let pVal2=343434
console.log(pVal)



//value by reference : objects ,array ,function,

let obj1={
    name:"sudarshan",
    cast:"khatri",
    age:12,
    level:"Bachelor"
}
console.log(obj1)

let obj2=obj1    //pass value by reference
console.log(obj2)


console.log(typeof []);



// Write code to convert boolean to string and vice versa.
let bValue=true
const sValue=String(bValue)
console.log(bValue)
console.log(sValue)

let sValue1="true"
const bValue1=Boolean(sValue1)
console.log(sValue1)
console.log(bValue1)



console.log(typeof new Date());


console.log(typeof undefined);


// Write code to demonstrate use of typeof with null
const null1=null
console.log(typeof null1)


console.log(typeof new Date());

// Write a program that creates a number from a string with spaces and explains the result

let st1="    123   "
let st2="  123 45    "

let st3=Number(st1)
let st4=Number(st2)
console.log(st3)
console.log(parseInt(st4))



console.log(null == undefined)



// Write code that throws an error when trying to modify a symbol

let sVal1=Symbol("foo")
sVal1=Symbol("helllo")
console.log(sVal1)

console.log(typeof /regex/);


// Write code to demonstrate typeof on a Map object
const myMap= new Map()
console.log(typeof myMap)


console.log(typeof 123n);


// Write code that shows conversion from number to string using template literals

let num1=13232323
const st=String(num1)
console.log(`After conversion of number ${num1} to string ${st}`)
console.log(`After conversion of number ${ typeof num1} to string ${typeof st}`)
console.log(typeof NaN);


// Write code that shows what happens when you add a string to a number.
let addSt="vale of my own is zero"
const addNum=2323232323
const addSn=addSt+addNum
console.log(addSn)



console.log(typeof JSON);

// Write code demonstrating conversion of string to boolean
const st11="hello iam sudarshan khatri"
const bol1= Boolean(st11)
console.log(bol1)

console.log(typeof null);

// Write code showing that objects are mutable even when declared with const.
const examp={
    name:"kripa",
    level:"Bachelor",
}
console.log(examp)
examp.age=20
console.log(examp)


console.log(typeof Symbol.iterator);


// Write code that demonstrates converting a symbol to string throws an error unless
// explicitly converted
console.log(typeof Array)



// Write code showing that arrays are objects and how to check it.
const arrbo=["sudarshan","khatri","badarni"]
console.log(typeof arrbo)


console.log(typeof undefinedVariable);


// Write code demonstrating the difference between null and "" (empty string)
const anull=null
const anull1=""
console.log(typeof anull)
console.log(typeof anull1)

// Write code demonstrating how to check for NaN correctly
const nulla=NaN
console.log(Number.isNaN(nulla))
console.log(Number.isNaN("hello"))

console.log(typeof Symbol("desc"))

// Create a unique Symbol
const uniqueKey = Symbol("id");

// Create an object
const user = {
    name: "Sudarshan",
    age: 22
};

// Add property using the Symbol
user[uniqueKey] = 101;

console.log(user);               // { name: 'Sudarshan', age: 22 }
console.log(user[uniqueKey]);


console.log(typeof new WeakMap())

console.log(typeof (() => {}));





