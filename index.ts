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

// // #1
// import {add} from './task-1/add-function';

// console.log(add(1,5));
//////////////////////

// #2
// import { add, subtract } from "./task-1/add-function";

// console.log(add(1,5));
// console.log(subtract(5,3));
//////////////////////

// // #3
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

// // #9 test
// import { Car } from './task-7-test/car'
// import { Doors } from './task-7-test/enum/doors'

// const alto = new Car(800,Doors.FourDoors, false, 'sezoki', 180)
// const verna = new Car(1600, Doors.FourDoors, false, 'hyundai', 200)
// const coupe = new Car(1800, Doors.TwoDoors, true, 'kia', 260)
// const golf = new Car(1800, Doors.FourDoors, true, 'kia', 280)

// console.log(verna.getEngine())
// console.log(verna.getDoors())
// console.log(verna.getHasAirBags())
// console.log(verna.getModel())
// console.log(verna.getTopSpeed())

// console.log(coupe.getEngine())
// console.log(coupe.getDoors())
// console.log(coupe.getHasAirBags())
// console.log(coupe.getModel())
// console.log(coupe.getTopSpeed())

// console.log(golf.getEngine())
// console.log(golf.getDoors())
// console.log(golf.getHasAirBags())
// console.log(golf.getModel())
// console.log(golf.getTopSpeed())

// verna.accelerate(190)
// verna.break(10)

// coupe.accelerate(190)
// coupe.break(10)

// golf.accelerate(190)
// golf.break(10)

// coupe.crash(golf)//No one dies
// coupe.crash(verna)//Lucky you didn't die
// alto.crash(golf)//You died!
// alto.crash(verna) //you both died
//////////////////////

// // #10 test prodct
// import { Catogries } from "./task-8-test/enum/catogries";
// import { Prodct } from "./task-8-test/prodct";

// const screens = new Prodct(Catogries.ElectricityTools, 'screens', 7000)
// const refrigerators = new Prodct(Catogries.ElectricityTools, 'refrigerators', 8000)
// const WashingMachines = new Prodct(Catogries.ElectricityTools, 'WashingMachines', 10000)

// console.log(screens.getCatogry())
// console.log(screens.getName())
// console.log(screens.getPrice())

// console.log(refrigerators.getCatogry())
// console.log(refrigerators.getName())
// console.log(refrigerators.getPrice())

// console.log(WashingMachines.getCatogry())
// console.log(WashingMachines.getName())
// console.log(WashingMachines.getPrice())

// // #10 test warehouse
// import { Brands } from "./task-8-test/enum/brand";
// import { Prodct } from "./task-8-test/prodct";
// import { Warechouse } from "./task-8-test/warehouse";

// samsung
// const screens = new Warechouse(Prodct, Brands.samsung, 20, 'Maradona Maghzan')
// const refrigerators = new Warechouse(Prodct, Brands.samsung, 15, 'Maradona Maghzan')
// const WashingMachines = new Warechouse(Prodct, Brands.samsung, 10, 'Maradona Maghzan')

// lg
// const screens = new Warechouse(Prodct, Brands.lg, 30, 'Maradona Maghzan')
// const refrigerators = new Warechouse(Prodct, Brands.lg, 20, 'Maradona Maghzan')
// const WashingMachines = new Warechouse(Prodct, Brands.lg, 20, 'Maradona Maghzan')

// bosch
// const screens = new Warechouse(Prodct, Brands.bosch, 0, 'Maradona Maghzan')
// const refrigerators = new Warechouse(Prodct, Brands.bosch, 30, 'Maradona Maghzan')
// const WashingMachines = new Warechouse(Prodct, Brands.bosch, 20, 'Maradona Maghzan')

// fresh
// const screens = new Warechouse(Prodct, Brands.fresh, 10, 'Maradona Maghzan')
// const refrigerators = new Warechouse(Prodct, Brands.fresh, 30, 'Maradona Maghzan')
// const WashingMachines = new Warechouse(Prodct, Brands.fresh, 15, 'Maradona Maghzan')

// unionaire
// const screens = new Warechouse(Prodct, Brands.unionaire, 15, 'Maradona Maghzan')
// const refrigerators = new Warechouse(Prodct, Brands.unionaire, 15, 'Maradona Maghzan')
// const WashingMachines = new Warechouse(Prodct, Brands.unionaire, 10, 'Maradona Maghzan')

// console.log(screens.getCatogry())
// console.log(screens.getName())
// console.log(screens.getPrice())

// console.log(refrigerators.getCatogry())
// console.log(refrigerators.getName())
// console.log(refrigerators.getPrice())

// console.log(WashingMachines.getCatogry())
// console.log(WashingMachines.getName())
// console.log(WashingMachines.getPrice())

// // #10 test stor
// import { Warechouse } from "./task-8-test/warehouse";
// import { Stor } from "./task-8-test/stor"

// const maradonaStor = new Stor('Maradona', 'Midan maradona', 19011, Warechouse)

// console.log(maradonaStor.getName())
// console.log(maradonaStor.getAddrass())
// console.log(maradonaStor.getPhoneNumber())
// console.log(maradonaStor.getWarehouse())
