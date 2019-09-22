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
}
