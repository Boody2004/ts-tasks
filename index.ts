// new file inside task-1
// write a function
// export const add = (a, b) => { return a+b; }
// inside index.ts import new function
// inside index.ts console.log the return of add(1,5)
// in terminal use node index.ts
// import subtract function
// use subtract function to log return of (5,3)

// clean up add-function, remove return, curly brackets
// create 3 more files subtract-function, multiply-function, divide-function all in task-1
// 3 more modules in each file
// import all new modules inside index.ts
// use all 4 functions inside one console.log(``)
// run application

///////////////////////////////////////////////////////////////////////////

//// #1
// import {add} from './task-1/add-function';

// console.log(add(1,5));
//////////////////////

//// #2
// import { add, subtract } from "./task-1/add-function";

// console.log(add(1,5));
// console.log(subtract(5,3));
//////////////////////

//// #3
// import {add} from "./task-1/add-function";
// import {subtract} from "./task-1/subtract-function";
// import {multiply} from "./task-1/multiply-function";
// import {divide} from "./task-1/divide-function";

// console.log(`
//  this is add ${add(0,1)}
//  this is subtract ${subtract(6,4)}
//  this is multiply ${multiply(3,1)}
//  this is divide ${divide(8,2)}
// `);
//////////////////////

//// #4
// const jsonObject = {
//     personName: 'Boody BE',
//     age: 16
//   };
  
//     const {personName, age} = jsonObject;

//     console.log(personName);
//     console.log(age);
//////////////////////

// // #5
// import { getDate } from "./task-2/getDate";
// const today = new Date();

// console.log(getDate(today.getDay()));
//////////////////////

// // #6
// import { sayGreeting } from './task-3/greeting';
// import { Person } from './task-3/types/person';
// import { Gender } from './task-3/enum/gender';

// const boody: Person = {name: "Abd Elrahman", gender: Gender.male}
// const lolo: Person = {name: "Lamiaa", gender: Gender.female}
// const zohlefa: Person = {name: "Zohlefa", gender: Gender.other}

// sayGreeting (boody);
// sayGreeting (lolo);
// sayGreeting (zohlefa);
//////////////////////

// // #7
// import { getHighSalaries, getOldAges, getDepartment } from './task-4/company-operations';
// import { Department } from './task-4/enum/department';
// import { Employee } from './task-4/types/employee';

// const employee1: Employee = {name: "Abd Elrahman", salary: 9000, age: 38, department: Department.Engineering}
// const employee2: Employee = {name: "Hazem", salary: 12000, age: 58, department: Department.Finance}
// const employee3: Employee = {name: "Omar", salary: 5000, age: 30, department: Department.HumanResources}
// const employee4: Employee = {name: "Lamiaa", salary: 11000, age: 27, department: Department.Engineering}
// const employee5: Employee = {name: "Shimaa", salary: 10000, age: 50, department: Department.Management}

// console.log(`//////////////////////`);
// getHighSalaries(employee1);
// getHighSalaries(employee2);
// getHighSalaries(employee3);
// getHighSalaries(employee4);
// getHighSalaries(employee5);
// console.log(`//////////////////////`);
// getOldAges(employee1)
// getOldAges(employee2)
// getOldAges(employee3)
// getOldAges(employee4)
// getOldAges(employee5)
// console.log(`//////////////////////`);
// getDepartment(employee1);
// getDepartment(employee2);
// getDepartment(employee3);
// getDepartment(employee4);
// getDepartment(employee5);
// console.log(`//////////////////////`);
//////////////////////

// // #8
// import { Employee } from "./task-6/employee";
// import { Department } from "./task-6/enum/department";

// const boody = new Employee('boody', 10000, 50, Department.Engineering);

// console.log(`${boody.name} ${boody.isOldAge()? 'is older than 50' : ' is younger than 50'}`);
// console.log(`${boody.name} ${boody.hasHighSalary()? 'gets higher than 10000' : 'gets lower than 10000'}`);
// console.log(`${boody.name} is in department ${boody.getDepartment()}`);
//////////////////////
// #9
