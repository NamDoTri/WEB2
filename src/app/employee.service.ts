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
    newEmployee.id = employeeArr[employeeArr.length].id++;
    employeeArr.push(newEmployee)
  }
  removeEmployee(id){
    this.employeeArr = this.employeeArr.filter(e => e.id != id)
  }
}
