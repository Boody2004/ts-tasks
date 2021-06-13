import { Department } from "./enum/department";
import { Employee } from "./types/employee";

export const getHighSalaries = ({name, salary}: Employee) => {
    console.log(salary >= 10000 
     ? `${name} is getting higher than or equal 10000, current salary is ${salary}`
     : `${name} is getting lower than 10000, current salary is ${salary}`)
};
export const getOldAges = ({name, age}: Employee) => {
    console.log(age >=50
        ? `${name}\'s age is higher than or equal 50, current age is ${age}`
        : `${name}\'s age is lower than 50, current age is ${age}`)
};
export const getDepartment = ({department, name}: Employee) => {
    switch (department) {
        case Department.Engineering:
            console.log(`${name} is working in Engineering department`)
            break;
        case Department.Finance:
            console.log(`${name} is working in Finance department`)
            break;
        case Department.HumanResources:
            console.log(`${name} is working in Human Resources department`)
            break;
        case Department.Management:
            console.log(`${name} is working in Management department`)
            break;
    }
};
