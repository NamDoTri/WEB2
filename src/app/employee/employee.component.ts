import { Component, OnInit } from '@angular/core';
import {employees} from './employees'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees = employees;
  constructor() { }

  ngOnInit() {
  }

}
