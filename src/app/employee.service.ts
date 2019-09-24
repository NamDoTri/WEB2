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
    let newEmployee = employee;
    newEmployee.id = this.employeeArr.length == 0 ? 1 : this.employeeArr[this.employeeArr.length-1].id + 1;
    this.employeeArr.push(newEmployee);
    console.log(this.employeeArr)
  }
  removeEmployee(id){
    this.employeeArr = this.employeeArr.filter(e => e.id != id)
    console.log(this.employeeArr)
  }
  updateEmployee(id, modifiedEmployee){
    //this is a temporary solution
    let currentEmployee = this.employeeArr.find(e => e.id == id);
    let index = this.employeeArr.indexOf(currentEmployee);
    modifiedEmployee.id = id;
    this.employeeArr[index] = modifiedEmployee;
    console.log(this.employeeArr)
  }
}
