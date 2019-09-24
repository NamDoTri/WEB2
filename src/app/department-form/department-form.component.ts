import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {DepartmentService} from '../department.service';
import {Department} from '../department/department';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent{
  @Output() newDepartment = new EventEmitter();

  departmentForm = new FormGroup({
    name: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    employees: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
  });

  constructor(public departmentService: DepartmentService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.newDepartment.emit(this.departmentForm.value)
    this.departmentForm.reset()
  }
}
