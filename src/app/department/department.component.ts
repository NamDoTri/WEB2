import { Component, OnInit } from '@angular/core';
import {departments} from './departments'

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments = departments;
  constructor() { }

  ngOnInit() {
  }

}
