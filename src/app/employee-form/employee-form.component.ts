import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.pattern(/[a-zA-Z]/), Validators.minLength(1)]  ),
    lastName: new FormControl('', [Validators.pattern(/[a-zA-Z]/), Validators.minLength(1)]  ),
    age: new FormControl('', Validators.min(18)),
    job: new FormControl('', [Validators.pattern(/[a-zA-Z]/), Validators.minLength(1)]  ),
  })
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.employeeService.addEmployee(this.employeeForm.value)
  }
}
