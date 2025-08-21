// const a = 10;
// const b =20;
// const sum = a+b
// console.log(sum);

// const a = 10;
// const b =20;
// const sub = a-b
// console.log(sub);

// const a = 10;
// const b =20;
// const multi = a*b
// console.log(multi);

// const a = 10;
// const b =20;
// const div = a/b
// console.log(div);

// const demo = ()=>{
//   console.log("HELLO, SIR");
// }
// demo()


// const {a,b} = require("./main");
// console.log(a+b);

// const a = require("./main");
// console.log(a());

// ------------------------------------------------------------------

// task1
// const a = require("./main");
// console.log(a);

// task2
// const obj = require("./main");
// console.log(obj);

// task3
// const square = require("./main");
// console.log(square(5));

// task4
// const f = require("./main");
// console.log(f);

// task5
// const pi = require("./main");
// const area = (r)=>{
//   return pi*r*r
// }
// console.log(area(5));

// task6
// const sum = require("./main")
// sum()

// task7
// const demo = require("./main");
// console.log(demo);

// task8
// const {a,num,bool} = require("./main");
// console.log(a, num, bool);

// task9
// const multi = require("./main");
// console.log(multi);

// task11
const student = {
  name:"Aman",
  rollNo : "116",
  age: 21
}

// // task12
// console.log(student.name);

// // task13
// student.grade = "A+"
// console.log(student);

// // task14
// delete student.grade;
// console.log(student);

// // task15
// for(let key in student){
  //   console.log(key);
  // }
  
  // task16
  //  for(let key in student){
  //   if(key == "email"){
  //     console.log("exist");
  //   }
  //   else{
  //     console.log("does not exist");
  //   }
  //  }

// task18
const book = {
  title:"ABC",
  author:{
    firstName:"Aman",
    lastName: "Verma"
  },
  publisher:"xyz"
}

// task17
// let count = 0;
//  for(let key in book){
//   count++;
//  }
//  console.log(count);

// // task19
// const key = (obj)=>{
//   for(let key in obj){
//   console.log(key);
// }
// }
// key(book)

// task20
// const arr= []
// for(let key in book){
//   arr[key] = book[key]
// }
// console.log(arr);

// task21
// const clone = {...book}
// console.log(clone);

// task22
// const merge = {...student,...book}
// console.log(merge);

// task23
// const newKey ={grade:"A+"}
// console.log({...student,...newKey});

// task24
// student.age = 22
// const newKey = {age:23};
// console.log({...student,...newKey});

// task25
// const newProp = {gade:"C"}
// const clone = {...book,...newProp}
// console.log(clone);

// task26
// const newObj = {
//   userName:"User1",
//   email: "vaman7409@gmail.com"
// }

// console.log({...book,...student,...newObj});

// // task27
// const newObj = {}

// // task28
// const demo =(obj1,obj2)=>{

// }



// -------------------------------------------------------

// import {demo,a} from "./main.js"

// demo();
// console.log(a);

// import num from "./main.js";
// console.log(num);

// import {name,collegName} from "./info.js"

// const a = name(20);
// console.log(a);
// const b =collegName("Barabanki");
// console.log(b);

import {add,multi} from "./info.js"
// const a = add(10,20);
// console.log(a,"before add");
// console.log(a+10,"after add");

const m = multi(12,12)
console.log(m);