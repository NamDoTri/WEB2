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
  currentlyUpdated: number;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }
  addEmployee(newEmployee){
    this.employeeService.addEmployee(newEmployee)
    this.employees = this.employeeService.getEmployees()
  }
  removeEmployee(id){
    this.employeeService.removeEmployee(id);
    this.employees = this.employeeService.getEmployees()
  }
  updateEmployee(id, modifiedEmployee: Employee){
    this.employeeService.updateEmployee(id, modifiedEmployee);
    this.currentlyUpdated = 0;
    this.employees = this.employeeService.getEmployees();
  }
}
