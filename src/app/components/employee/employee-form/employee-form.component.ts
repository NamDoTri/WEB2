import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentService } from 'src/app/services/department.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { Employee } from "src/app/models/employee.model";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  constructor(private employeeService: EmployeeService,
              private departmentService: DepartmentService,
              private location: Location,
              private route: ActivatedRoute) { }
  id: number;
  departments: number[];

  employeeForm = new FormGroup({
    first_name: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    last_name: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    department_id: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    // age: new FormControl('', [Validators.min(18), Validators.required]  ),
  });
  ngOnInit() {
    this.departmentService.getDepartment().subscribe( res => this.departments = res )
    this.id = +this.route.snapshot.paramMap.get("id");
    if (this.id){
      this.employeeService.getEmployeeById(this.id)
        .subscribe( (res: Employee) => {
          delete res.id;
          delete res.birth_date; //TODO: add birth_date formControl
          this.employeeForm.setValue(res)
        })
    }
  }
  onSubmit(){
    if (!this.id) {
      this.employeeService.addEmployee(this.employeeForm.value)
        .subscribe(() => this.goBack());
    } else {
      this.employeeService.updateEmployee(this.id, this.employeeForm.value)
        .subscribe(() => this.goBack());
    } 
  }
  goBack(){
    this.location.back()
  }
}