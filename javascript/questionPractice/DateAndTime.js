// Write code to get the current date and time
let Datenow=Date.now()
let timeNow=new Date().toLocaleTimeString()
console.log(Datenow)
console.log(timeNow)

console.log(new Date(0))


// Write code to get the year, month, and day from a Date object

// Write code to convert a Date to ISO string
date1=new Date()
// console.log(date1.getfullyear())

console.log(String(date1))


// Write code to calculate difference in days between two dates
dt1=new Date("2021-04-12")
dt2=new Date("2024-04-20")
dt=dt2-dt1
newDt=dt/(1000*60*60*24)
console.log(newDt)


console.log(new Date("2021-12-31").getMonth())


// Write code to add 7 days to the current date
let nowDate=new Date()
let newDate=nowDate.setDate(nowDate.getDate()+7)
console.log(newDate)


console.log(new Date().getDay())

// Write code to format date as "DD-MM-YYYY"
let dFormat=new Date()
console.log(dFormat)

console.log(new Date().toLocaleDateString("en-GB"))


// Write code to get the UNIX timestamp from a date
console.log(nowDate.toTimeString())
console.log(new Date(2025, 0, 1).getFullYear())
// Write code to parse a date string "2023-07-23T10:00:00Z"
let dparse="2023-07-23T10:00:00Z"
console.log(parseFloat(dparse))
console.log(new Date().toDateString())


// Write code to compare two dates
cmp1=new Date()
cmp2=new Date()
if(cmp1>cmp2){
    console.log(`${cmp1} is greater`)
}
else{
    console.log(`${cmp2} is greater`)
}


console.log(new Date(2020, 1, 29).toString())
// Write code to convert a date to UTC string
console.log(cmp1.toUTCString())
console.log(new Date().getTimezoneOffset())

// Write code to get the weekday name of a date
console.log(cmp1.getDay())

console.log(new Date(0).toISOString())



// Write code to create a date from components: year, month, day, hour, min, sec
let createDate=new Date(2024,4,23)
console.log(createDate)

console.log(new Date("2022-02-30").toString())

// Write code to get the number of days in a given month and year
let days=new Date(2024,11,0)
console.log(days.getDate())
let tDay=days/(1000*60*60*24)
console.log(tDay)


console.log(new Date(2021, 11, 31).getDate())
