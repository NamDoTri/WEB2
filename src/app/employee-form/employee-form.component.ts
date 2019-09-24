import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {EmployeeService} from '../employee.service';
import Employee from '../employee/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent{
  @Output() newEmployee = new EventEmitter/*<Employee>*/();

  employeeForm = new FormGroup({
    name: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    lastName: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    age: new FormControl('', [Validators.min(18), Validators.required]  ),
    job: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
  });

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.newEmployee.emit(this.employeeForm.value)
    this.employeeForm.reset()
  }
}
