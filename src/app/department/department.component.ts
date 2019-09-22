import { Component, OnInit } from '@angular/core';
import Department from './department';
import {DepartmentService} from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department: Department[] = this.departmentService.getDepartment();
  currentlyUpdated: number = 0;
  modified: boolean = false;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
  }
  addDepartment(newDep){
    this.departmentService	.addDepartment(newDep)
    this.department = this.departmentService.getDepartment()
  }
  removeDepartment(id){
    this.departmentService.removeDepartment(id);
    this.department = this.departmentService.getDepartment()
  }
  updateDepartment(id, modifiedDep: Department){
    this.departmentService.updateDepartment(id, modifiedDep);
    this.currentlyUpdated = 0;
    this.department = this.departmentService.getDepartment();
    this.modified = false;
  }
}