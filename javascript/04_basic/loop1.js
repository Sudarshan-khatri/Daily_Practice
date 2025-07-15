// const coding=[ "java" , "ruby","hello"]

// const values=coding.forEach(item)=>{
//     console.log(item)
//     return item
// })



const myNums=[1,2,3,4,5,6,7,8,9]

const newNum=myNums.filter((num) =>{
    return num>5
} )
console.log(newNum)

myNums.forEach((num) =>{
    if(num>4){
        newNum.push(num)
    }
})
console.log(newNum)




const books=[
   { title: "Book A", author: "Author 1", year: 2001 },
    { title: "Book B", author: "Author 2", year: 2002 },
    { title: "Book C", author: "Author 3", year: 2003 },
    { title: "Book D", author: "Author 4", year: 2004 },
    { title: "Book E", author: "Author 5", year: 2005 },
    { title: "Book F", author: "Author 6", year: 2006 },
    { title: "Book G", author: "Author 7", year: 2007 },
    { title: "Book H", author: "Author 8", year: 2008 },
    { title: "Book I", author: "Author 9", year: 2009 },
    { title: "Book J", author: "Author 10", year: 2010 }
]

const userbook=books.filter((bk)=>bk.year>=2005)
console.log(userbook)


const userBook=books.filter((bk) =>bk.author=="Author 4")
console.log(userBook)