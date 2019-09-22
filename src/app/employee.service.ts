import { Injectable } from '@angular/core';
import Employee from './employee/employee';
import {employeeArr} from './employee/employeeArr';
import { EmployeeComponent } from './employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeArr: Employee[] = employeeArr;
  constructor() { }

  getEmployees(){
    return <Employee[]> this.employeeArr;
  }
  addEmployee(employee: Employee){
    console.log(this.employeeArr);
    let newEmployee = employee;
    //newEmployee.id = employeeArr[employeeArr.length-1].id + 1;
    this.employeeArr.push(newEmployee);
    console.log(this.employeeArr);
  }
  removeEmployee(index){
    console.log(this.employeeArr);
    this.employeeArr.splice(index, 1);
    console.log(this.employeeArr);
  }
  updateEmployee(index, modifiedEmployee){
    //this is a temporary solution
    console.log(this.employeeArr);
    this.employeeArr[index] = modifiedEmployee;
    //let currentEmployee = employeeArr.find(e => e.id == id);
    //let index = employeeArr.indexOf(currentEmployee);
    console.log(this.employeeArr);
  }
}
