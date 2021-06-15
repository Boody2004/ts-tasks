import { Department } from "./enum/department";

export class Employee {
    private salary: number;
    private age: number;
    private department: Department;
    public name: string;

    constructor (name: string, salary: number, age: number, department: Department) {
      this.name = name;
      this.salary = salary;
      this.age = age;
      this.department = department;
    }

    public hasHighSalary(): boolean {
      return this.salary >= 10000
        ? true
        : false
    }
    public isOldAge(): boolean {
      return this.age >= 50
        ? true
        : false;
    }
    public getDepartment(): Department {
      return this.department
      
    }
}
