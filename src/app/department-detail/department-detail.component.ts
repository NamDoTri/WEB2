import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { DepartmentService } from "src/app/services/department.service";
import { Department } from "src/app/models/department.model";

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private departmentService: DepartmentService,
              private route: ActivatedRoute,
              private location: Location,
              ){ }
  department: Department; 

  ngOnInit() {
    let dptID = +this.route.snapshot.paramMap.get("id")
    this.departmentService.getDepartmentById(dptID)
    .subscribe( (res: Department) => this.department = res );
  }

  goBack(){
    this.location.back()
  }
}
