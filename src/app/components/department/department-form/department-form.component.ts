import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from "@angular/common";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from "src/app/models/department.model";

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  id: number;
  constructor(private departmentService: DepartmentService,
              private location: Location,
              private route: ActivatedRoute) { }

  departmentForm = new FormGroup({
    name: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    building: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
  });

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");

    //if updating, fill the forms with existing values
    if(this.id){
      this.departmentService.getDepartmentById(this.id)
        .subscribe( (res: Department) => {
          this.departmentForm.setValue(
            {
              name: res.name,
              building: res.building
            }
          )
        });
    }
  }

  onSubmit(){
    if (this.id) {
      this.departmentService.updateDepartment(this.id, this.departmentForm.value)
        .subscribe(() => this.goBack());
    }
    else{
      this.departmentService.addDepartment(this.departmentForm.value)
        .subscribe(() => this.goBack());
    } 
  }
  goBack(){
    this.location.back()
  }
}