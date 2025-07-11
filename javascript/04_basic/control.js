// if statement 

const  isUserlogin=true
if (isUserlogin){
    console.log("hello iam sudarshan")
}


if(3==="3"){
    console.log("condition not match")
}

const temperature=45
if(temperature<=50){
    console.log("Condition match")
}
else{
    console.log("Condition not  match")
}



//score based question
const score=345
if(score>100){
    const  power="fly"
    console.log(`user power::${power}`)
}
console.log(`User power:${score}`)



//implicit score
const balance=10000
// not recommended
// if(balance>2333) console.log("test"),console.log("tst2");

if(balance>500){
    console.log("greater than five hundred")
} else if (balance<950){
    console.log("Balance less than nine fifty")
}
else{
    console.log("chalo khayenga")
}


//multiple condition
const userLogin=true
const debitCard=true
if (userLogin && debitCard){
    console.log("allow to buy course")
}
else{
    console.log("Not allow to buy the course")
}


const loggedEmail=true 
const loggedGoogle=false
if(loggedEmail || loggedGoogle){
    console.log("Login allow")
}
else{
    console.log("Not login")
}