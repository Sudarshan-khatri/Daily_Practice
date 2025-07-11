let a=20
const b=30
var c=45


if (true){
    let a=20
    const b=30
    var c=4555
}

// console.log(a)
// console.log(b)
console.log(c)


let x=233
if(true){
    let x=343434
    console.log(x)
}


// nested scope 
function one(){
    const name="sudarshan"
    console.log(name)
    function two(){
        const media='youtube'
        console.log(name)
        console.log(media)


    }
    two()
}

one()


if(true){
    const userName='Hero'
    if(userName==="hero".toUpperCase()){
        const hi='youtube'
        console.log(website+ userName)
    }
    // console.log(website)

}
// console.log(userName)

function value(a){
    const val=a+1
    console.log(val)
}
value(67)


const addTwo=function (a,b){
    const sum=a+b
    return sum
}
console.log(addTwo(2,3))