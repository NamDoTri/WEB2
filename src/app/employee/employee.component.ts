import { Component, OnInit } from '@angular/core';
import { employeeArr } from './employeeArr';
import Employee from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee[] = employeeArr;

  constructor() { }

  ngOnInit() {
  }

}
