// var testarrowfunction=()=>{
//     console.log("Test Arrow Function");
// }
// testarrowfunction()

//1.variable refer to variables
//2. arrow function=>
    //var functionname=()=>{}

//scoping

// var a=10;
// console.log(a);
// //scoping starts
// {
//     let a=20;
//     console.log(a);
//     const b=30;
//     console.log(b);
//     let c=40;
//     console.log(c);
//     var e=50;
//     console.log(e);
//     a=40;
//     console.log(a);
//     f=30 //if nothing is given var is default
// }
// console.log(a);
// console.log(e);
// console.log(f)
// var is global
//let is local 
//use var for while loop and let for for loops

// var a=10;
// while(a<12){
//     console.log(a);
// }
// console.log(a);

//ternary operator
// a=10;
// console.log((a%2)?"odd":"Even");

//spread operator
stud1year=["user1","user2","user3"];
stud2year=["user4","user5","user6"];
stud3year=["user7","user8","user9"];
stud4year=["user10","user11","user12"];
studdb=[...stud1year,...stud2year,...stud3year,...stud4year]
console.log(studdb)
