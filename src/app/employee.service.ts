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
    newEmployee.id = employeeArr[employeeArr.length-1].id + 1;
    employeeArr.push(newEmployee)
    console.log(`Added employee ${employee.name} ${employee.lastName} with id: ${employee.id}. \nemployeeArr.length: ${employeeArr.length}`)
  }
  removeEmployee(id){
    console.log(`Removed employee with id: ${id}. \nemmployeeArr.length: ${employeeArr.length}`)
    this.employeeArr = this.employeeArr.filter(e => e.id != id)
  }
  updateEmployee(id, modifiedEmployee){
    //this is a temporary solution
    let currentEmployee = employeeArr.find(e => e.id == id);
    let index = employeeArr.indexOf(currentEmployee);
    employeeArr[index] = modifiedEmployee;
    console.log(`Modified employee id: ${id} with ${modifiedEmployee.name}`)
  }
}
