// Write code to find the length of a string.
const lenStr="hello iam Sudarshan khatri"
console.log(lenStr)
console.log(lenStr.length)

console.log("hello".charAt(1))

// Write code to convert a string to uppercase and lowercase
console.log(lenStr.toUpperCase())
console.log(lenStr.toLowerCase())
console.log("hello world".indexOf("world"))


// Write code to check if a string starts with a substring
console.log(lenStr.substring(1,4))
console.log(lenStr.substring(1))
console.log(lenStr.substring(7))


console.log("hello world".includes("wor"))

// Write code to extract a substring using .slice()
const animal=["sudarshan","khatri","hello","hi","gf","xyz"]
console.log(animal.slice(1,3))
console.log(animal.slice(3))
console.log(animal.slice(7,9))
console.log(animal.slice(-2,-4))
console.log(animal.slice(5,-3))


console.log("abc".repeat(3))


// Write code to trim spaces from a string.
const trimexmp="   hello iam sudarsha   "
console.log(trimexmp.trim())
console.log("123".padStart(5, "0"))


// Write code to split a string by spaces into an array
const spVar=" the lazy brown fox jump over the borwn dog"

const words=spVar.split(" ")
console.log(words)
console.log(words[8])
console.log(words[0,4])
console.log("hello".replace("l", "L"))


//  Write code to check equality of strings ignoring case
let str1 = "Hello";
let str2 = "hello";

if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("Strings are equal (ignoring case)");
} else {
    console.log("Strings are not equal");
}

console.log("abc".concat("def"))

console.log(lenStr.split("").reverse().join(""))
console.log(" a ".trim())

// Write code to convert a string to an array of characters
let  letVar=" heismynnoyingfriend  "
let var1=letVar.split("")
console.log(var1)


// Write code to check if a string ends with a certain substring
let strman="helllo"
if(strman.endsWith("o")){
    console.log("Stman end with o")
}
else{
    console.log("stman not end with o")
}

console.log("abcde".substr(1, 3))


// Write code to find the first non-repeated character in a string

console.log("hello world".split(" "))

// Write code to replace all instances of a substring using regex
let value="i love apples and apples are sweet"
console.log(value.replace( /apples/gi,"mangoes"))


console.log("12345".slice(-3))


//  Write code to check if a string contains only digits
let digitStr="student1212"
console.log(/^\d+$/.test(digitStr))


console.log("JavaScript".indexOf("script"))


// Write code to pad a string to a certain length with characters.
let stpad="hello iam og"
let stpad1=stpad.padStart(4,"0")
console.log(stpad1)

console.log("a,b,c".split(","))


// Write code to capitalize the first letter of a string
let firstlet="hello iam sudu"
let x1=firstlet.charAt(0).toUpperCase()
let r1=x1+firstlet.slice(1)
console.log(r1)


console.log("hello".startsWith("h"))
// Write code to remove vowels from a string
let rep1="hello iam sudarshan"
let reo=str1.replace(/[aeiou]/gi,'')
console.log(reo)
console.log("hello".match(/l/g))
console.log("hello world".lastIndexOf("o"))

// Write code to convert numbers to strings
let n1=23232323
console.log(String(n1))

// Write code to convert camelCase string to snake_case
function camelToSnakeCase(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

// Example usage:
const camelCaseString = "thisIsACamelCaseString";
const snakeCaseString = camelToSnakeCase(camelCaseString);
console.log(snakeCaseString); // Output: this_is_a_camel_case_string

// Write code to check if a string is a palindrome.
let stud="sas"
let rev=stud.split('').reverse().join('')
if(stud===rev){
    console.log(" string is pallindrone")
}
else{
    console.log("string is not pallindrome")
}

console.log("a".charCodeAt(0))


// Write code to repeat a string N times without using .repeat()
let con="hello ism "
let st=" "
for(let i=0;i<10;i++){
    st+=con
}
console.log(st)

console.log("Hello World".toLowerCase())

console.log("Hello World".split(" ")[1])


// Write code to convert a string to title case
function toTitleCase(str) {
  return str
    .toLowerCase()                 // convert entire string to lowercase
    .split(" ")                     // split by spaces
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first letter
    .join(" ");                     // join back into a single string
}

let text = "hello i am sudu";
console.log(toTitleCase(text));  // Output: Hello I Am Sudu



// Write code to find the longest word in a string
function findLongestWord(str) {
  let words = str.split(" ");            // Split string into words
  let longest = "";                       // Initialize longest word

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;                     // Update longest if current is bigger
    }
  }

  return longest;
}

let t= "I am learning JavaScript programming";
console.log(findLongestWord(t));


console.log("abcde".charAt(10))


