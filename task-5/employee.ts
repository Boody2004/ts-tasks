import {Department} from '../task-4/enum/department'

class Employee {
  // Encapsulation
  // public and private are called "access modifiers"
  private salary: number;
  public name: string;
  public age: number;
  public department: Department;

  constructor(name: string, age: number, salary: number, department: Department) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.department = department;
  }

  public getSalary() {
    console.log(this.salary);
  }
  
  public setSalary(salary: number) {
    if(salary < this.salary)
      return;
    this.salary = salary;
  }
}

const boody = new Employee('Boody', 16, 5000, Department.Engineering);

boody.getSalary() // 5000
boody.setSalary(1000);
boody.getSalary(); // 5000
boody.setSalary(2000);
boody.getSalary(); // 5000
boody.setSalary(6000);
boody.getSalary(); // 6000
