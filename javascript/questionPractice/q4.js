// Write code to convert string "123" to number using Number(), parseInt(), and +
// // operator.
const var1="123"
console.log(Number(var1))

Number(" 123 ")
parseInt("10.5abc")


// Write code that converts number to string using .toString() and template literals
let num1=232233
val=num1.toString()
console.log(val)
console.log(typeof val)


console.log(Boolean(""));
console.log(!!"false")


// Write code that converts an array to a string using .join()
const len=["sudarshan","khatri","sudikshya","badarni"]
console.log(len.join())
console.log(len.join(""))
console.log(len.join("-"))


console.log(Number(null))


// Write code to safely convert a value to a number and check if it is NaN


function SafelyConvert(value){
    const num=Number(value)

    if(Number.isNaN(num)){
        console.log(`Number ${num} is nan`)
    }
    else{
        console.log(`Number ${num} is not nan`)
    }
}

SafelyConvert("123")
SafelyConvert("123abc");    // "123abc" cannot be converted to a valid number
SafelyConvert("   456 ");   // Converted value: 456
SafelyConvert(null);        // Converted value: 0
SafelyConvert(undefined);


console.log(Number(undefined))



function StringToDate(strValue){
    let dateValue=new Date(strValue)
    console.log(dateValue)
}
StringToDate("2024-02-12")


console.log(parseFloat("12.34abc"))


// Write code to convert number to boolean
function numberToboolean(numValue){
    let boll=Boolean(numValue)
    console.log(boll)
}
numberToboolean("121212")
numberToboolean(1)
numberToboolean(0)


console.log(Boolean("0"))


// Write code to convert date to string and back to date.
function stringToDate(newVal1,newVal2){
    let st1= String(newVal1)
    let dat1=new Date(newVal2)
    console.log(st1)
    console.log(dat1)
}
stringToDate("2024-12-12","1212121212")
stringToDate("2023-95-23","fdfdsfdsfsdf")

console.log(Number("0xF"))


// Write code to demonstrate implicit type coercion in addition
console.log(5 + "5")
console.log("5" + 3)


// Write code showing difference between explicit and implicit conversion.

console.log(5+"5") //implicit conversion
console.log(5+Number("5"))

console.log("5" - 3)

// Write code to demonstrate automatic conversion in boolean context
console.log("5"+Boolean("1"))
console.log("5"+Boolean(""))

console.log(typeof ([] + []))
console.log(parseInt(122,16))


console.log(Number("123abc"))


// Write code that converts a string with spaces to a number
console.log(Number("    12122    "))
console.log(parseInt(" 10"))


// Write code demonstrating .toFixed() for rounding numbers
let rounNum=12323.323233232
console.log(rounNum.toFixed(3))


console.log(Boolean(null))


const obj1={
    name:"sudarshan",
    cast:"khatri",
    age:12,
    level:"Bachelor",
    loveto:"myself"
}
const stringfy=JSON.stringify(obj1)
console.log(stringfy)

console.log(Number("Infinity"))

// Write code to convert string "false" to boolean false correctly.
stsd="false"
console.log(Boolean(!stsd))

console.log(Number(" "))
console.log("123" * 2)


// Write code showing how to convert boolean to string.

let b1=Boolean(1)
console.log(String(b1))
console.log(Number(true))


// Write code to convert string "NaN" to a number and check result
const str = "NaN";

// Convert string to number
const num = Number(str);

// Check if result is NaN
if (Number.isNaN(num)) {
    console.log(`"${str}" converted to NaN`);
} else {
    console.log(`Converted number is: ${num}`);
}

console.log(num);            // NaN
console.log(typeof num);     // "number"


// Write code to demonstrate type conversion inside template literals
let NumConvert=23232323
console.log(`convert boolean ${NumConvert} into string is ${Boolean(NumConvert)}`)
console.log("true" == true)


// Write code showing how to convert a function to string
function great(name){
    return `Name ${name}`
}
const funcString1=great("sudarshan")
console.log(funcString1.toString())

// Write code to convert number to exponential form string
const toexp=1212122212
console.log(toexp.toExponential(2))


console.log(Number("0b1010"))

console.log(new Date("2024-12-25T14:30:00"))
console.log(parseInt("0x10"))