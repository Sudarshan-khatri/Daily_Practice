// Write code to create an array with 5 elements
let arr=["sudarsha","aayush","khatri","dhami","pransansa"]
console.log(arr)
console.log([1,2,3].length)
console.log([...arr,45])
console.log(arr.concat(34))

console.log([1, 2, 3].push(4))
// Write code to add an element to the beginning of an array
let ushift=arr.unshift("sudu")
let con=["sudu",...arr]
console.log(ushift)
console.log(con)
// Write code to remove the first element of an array
console.log(arr.splice(1,1))


console.log([1, 2, 3].shift())
// Write code to find the index of an element in an array
console.log(arr.indexOf("khatri"))
console.log([1, 2, 3].indexOf(2))

// Write code to check if an array includes a certain value
console.log(arr.includes("dhami"))
console.log([1, 2, 3].includes(4))

// Write code to create a copy of an array
const copy=[...arr]
console.log(copy)
console.log([...[1, 2, 3]])


// Write code to concatenate two arrays
cot=[1,2,3,4,5]
conct1=cot.concat(arr)
console.log(conct1)
console.log([1, 2].concat([3, 4]))


// Write code to remove duplicates from an array
console.log([... new Set(conct1)])
// Write code to reverse an array
console.log(conct1.reverse())
console.log([1, 2, 3].reverse())

// Write code to sort an array of numbers ascending.
console.log(conct1.sort())
console.log([3, 1, 2].sort())

// Write code to slice a portion of an array
console.log(conct1.slice(1,3))
console.log([1, 2, 3, 4].slice(1, 3))

// Write code to splice elements from an array
console.log(conct1.splice(5,"hello"))
let arr3 = [1, 2, 3];
arr3.splice(1, 1);
console.log(arr3)


let sq=[1,2,3,4,5]
let square=sq.map(num=>num*num)
console.log(sq)
console.log(square)


console.log([1, 2, 3].map(x => x * x))
filt=sq.filter(num=>num%2===0)
console.log(filt)
console.log([1, 2, 3, 4].filter(x => x % 2 === 0))

// Write code to reduce an array to the sum of its elements.
red=sq.reduce((a,b)=>a+b)
console.log(red)
console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0))


// Write code to find the maximum number in an array
console.log(Math.max(...sq))


//  Write code to join array elements into a string separated by commas
console.log(sq.join(","))

console.log(sq.length==0)
console.log([].length === 0)

len=sq.length
console.log(sq[len-2])
console.log([1, 2, 3, 2].lastIndexOf(2))

// Write code to find the maximum number in an array
let maxValue=[1,2,3,4,5,7,12]
let maxNumber=Math.max(...maxValue)
console.log(maxNumber)

console.log(Math.max(...[1, 2, 3]))

// Write code to join array elements into a string separated by commas
let stArr=["nepal","ktm","hi","hd"]
console.log(stArr.join(","))
let ln=stArr.length
if(ln===0){
    console.log("Array is empty")
}
else{
    console.log("Array is not empty")
}
console.log([1, 2, 3].join("-"))
console.log([].length === 0)
// Write code to find the last index of an element in an array
console.log(stArr.lastIndexOf())