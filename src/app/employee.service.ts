import { Injectable } from '@angular/core';
import Employee from './employee/employee';
import {employeeArr} from './employee/employeeArr';

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
    //add employee
    employeeArr.push(employee)
  }
}