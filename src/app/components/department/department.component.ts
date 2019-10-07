import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  constructor(private departmentService: DepartmentService) { }
  department: Department[] = [];

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.departmentService.getDepartment()
      .subscribe((res: Department[]) => this.department = res);
  }
  removeDepartment(toRemove) {
    this.departmentService.removeDepartment(toRemove)
      .subscribe(() => this.reload())
  }
}
