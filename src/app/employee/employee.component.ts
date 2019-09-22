import { Component, OnInit } from '@angular/core';
import Employee from './employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = this.employeeService.getEmployees();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }
  addEmployee(newEmployee){
    this.employeeService.addEmployee(newEmployee)
  }
  removeEmployee(id){
    console.log(`Request to delete employee with id: ${id} received`)
    this.employeeService.removeEmployee(id);
    this.employees = this.employeeService.getEmployees()
  }
}
