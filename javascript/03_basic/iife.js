//immediately invoked function expression

function practice(){
    console.log("DB connected")
 }
// )()

// ()()

practice()

// (function suduarmuti(){
//     console.log("DB connected two")
// }) ();


( (name) => {
    console.log( `hello vai ${name}`)
})('sudu');